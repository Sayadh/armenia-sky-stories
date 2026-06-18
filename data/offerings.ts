import {
  Mountain,
  Trees,
  Home,
  Heart,
  Compass,
  Car,
  Megaphone,
  PartyPopper,
  Clapperboard,
  Palette,
  Music,
  Sparkles,
  MonitorSmartphone,
} from 'lucide-vue-next'
import type { Component } from 'vue'

export interface Offering {
  icon: Component
  title: string
  desc: string
}

/** Main "what I can shoot" directions */
export const offerings: Offering[] = [
  {
    icon: Mountain,
    title: 'Տեսարժան վայրեր',
    desc: 'Հայաստանի բնության, լեռների, լճերի, վանքերի և պատմական վայրերի օդային նկարահանումներ։',
  },
  {
    icon: Trees,
    title: 'Հողատարածքներ',
    desc: 'Հողատարածքների, այգիների, գյուղատնտեսական տարածքների և բաց տարածքների ներկայացում վերևից։',
  },
  {
    icon: Home,
    title: 'Անշարժ գույք',
    desc: 'Առանձնատների, վիլլաների, հյուրատների, վաճառվող կամ վարձակալվող գույքի պրոֆեսիոնալ ներկայացում։',
  },
  {
    icon: Heart,
    title: 'Անհատական նկարահանում',
    desc: 'Անհատական, ընտանեկան, սիրային, ընկերական և հիշարժան պահերի դրոնային նկարահանումներ։',
  },
  {
    icon: Compass,
    title: 'Տուրեր և արշավներ',
    desc: 'Զբոսաշրջային խմբերի, արշավների, ճանապարհորդությունների և outdoor նախագծերի նկարահանում։',
  },
  {
    icon: Car,
    title: 'Ավտոմեքենաներ',
    desc: 'Մեքենաների կինեմատոգրաֆիկ կադրեր՝ վաճառքի, սոցիալական ցանցերի կամ անձնական օգտագործման համար։',
  },
  {
    icon: Megaphone,
    title: 'Բիզնես և գովազդ',
    desc: 'Ռեստորանների, հյուրանոցների, հանգստի գոտիների, արտադրամասերի և բրենդների գովազդային տեսանյութեր։',
  },
  {
    icon: PartyPopper,
    title: 'Միջոցառումներ',
    desc: 'Հարսանիքներ, նշանադրություններ, բացօթյա միջոցառումներ և հատուկ օրերի օդային կադրեր։',
  },
]

/** Compact editing / post-production services */
export const editingServices: Offering[] = [
  {
    icon: Clapperboard,
    title: 'Կարճ Reel / TikTok / Shorts',
    desc: 'Կարճ, դինամիկ և գեղեցիկ տեսանյութեր սոցիալական ցանցերի համար։',
  },
  {
    icon: Palette,
    title: 'Գունային մշակում',
    desc: 'Կադրերի գույների ուղղում և կինեմատոգրաֆիկ տեսքի ստեղծում։',
  },
  {
    icon: Music,
    title: 'Երաժշտության ընտրություն',
    desc: 'Տեսանյութի տրամադրությանը համապատասխան երաժշտության ընտրություն։',
  },
  {
    icon: Sparkles,
    title: 'Անցումներ և էֆեկտներ',
    desc: 'Ժամանակակից, մաքուր և գեղեցիկ անցումներ՝ առանց ավելորդ ծանրաբեռնվածության։',
  },
  {
    icon: MonitorSmartphone,
    title: 'Ֆորմատներ տարբեր հարթակների համար',
    desc: 'Տեսանյութի պատրաստում Instagram-ի, TikTok-ի, YouTube-ի և Facebook-ի համար։',
  },
]

export const offeringsCopy = {
  eyebrow: 'Ուղղություններ',
  title: 'Ինչ կարող եմ նկարահանել',
  subtitle:
    'Ընտրեք Ձեզ համապատասխան ուղղությունը․ յուրաքանչյուր նախագիծ քննարկվում է անհատական մոտեցմամբ։',
  editingTitle: 'Մոնտաժի ծառայություններ',
  note: 'Եթե Ձեր գաղափարը նշված ցանկում չկա, կարող եք կապ հաստատել․ միասին կքննարկենք լավագույն լուծումը։',
  cta: 'Քննարկել իմ գաղափարը',
} as const
