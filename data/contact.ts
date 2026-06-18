import { Phone, Send, MessageCircle, Mail } from 'lucide-vue-next'
import type { ContactChannel, SocialLink } from '~/types/content'

export const contactChannels: ContactChannel[] = [
  { icon: Phone, label: 'Հեռախոս', value: '+374 93 632 003', href: 'tel:+37493632003' },
  { icon: Send, label: 'Telegram', value: '@sayadharutyunyan', href: 'https://t.me/sayadharutyunyan' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+374 93 632 003', href: 'https://wa.me/37493632003' },
  { icon: Mail, label: 'Email', value: 'sayadharutyunyan@mail.ru', href: 'mailto:hello@sayadharutyunyan.am' },
]

// Footer socials are the same channels without the display value.
export const socialLinks: SocialLink[] = contactChannels.map(
  ({ icon, label, href }): SocialLink => ({ icon, label, href }),
)

export const contactCopy = {
  ctaTitle: 'Պատրա՞ստ եք տեսնել Հայաստանը նոր տեսանկյունից',
  ctaLead: 'Եկեք միասին ստեղծենք հիշվող և յուրահատուկ օդային կադրեր։',
  ctaPrimary: 'Կապ հաստատել',
  ctaSecondary: 'Պատվիրել նկարահանում',
  formTitle: 'Կապ հաստատենք',
  formLead: 'Ընտրեք ձեզ հարմար եղանակը կամ ուղարկեք հաղորդագրություն ուղիղ։',
  successTitle: 'Հաղորդագրությունն ուղարկվեց',
  successText: 'Շնորհակալություն։ Շուտով կկապվեմ ձեզ հետ՝ նախագիծը քննարկելու համար։',
} as const
