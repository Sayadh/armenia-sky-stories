interface ContactBody {
  name?: string
  phone?: string
  message?: string
}

/** Escape characters that are special in Telegram HTML parse mode. */
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event)

  const name = body?.name?.trim() ?? ''
  const phone = body?.phone?.trim() ?? ''
  const message = body?.message?.trim() ?? ''

  // Validation
  if (!name || !phone || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Բոլոր դաշտերը պարտադիր են։',
    })
  }
  if (name.length > 100 || phone.length > 120 || message.length > 2000) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Տեքստը չափազանց երկար է։',
    })
  }

  const { telegramBotToken, telegramChatId } = useRuntimeConfig(event)
  if (!telegramBotToken || !telegramChatId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Telegram-ը կարգավորված չէ։',
    })
  }

  const text =
    '🚁 <b>Նոր հայտ — Armenia Sky Stories</b>\n\n' +
    `👤 <b>Անուն:</b> ${esc(name)}\n` +
    `📞 <b>Կապ:</b> ${esc(phone)}\n\n` +
    `💬 <b>Հաղորդագրություն:</b>\n${esc(message)}`

  try {
    const result = await $fetch<{ ok: boolean }>(
      `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
      {
        method: 'POST',
        body: {
          chat_id: telegramChatId,
          text,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        },
      },
    )

    if (!result?.ok) {
      throw new Error('Telegram API returned ok=false')
    }
  } catch (error) {
    console.error('[contact] Telegram send failed:', error)
    throw createError({
      statusCode: 502,
      statusMessage: 'Չհաջողվեց ուղարկել հաղորդագրությունը։ Փորձեք կրկին։',
    })
  }

  return { ok: true }
})
