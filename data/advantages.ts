import { Cpu, Heart, Film, Clock, Zap, Mountain } from 'lucide-vue-next'
import type { Advantage } from '~/types/content'

export const advantages: Advantage[] = [
  {
    icon: Cpu,
    title: 'Ժամանակակից DJI սարքավորում',
    desc: 'Վերջին սերնդի դրոներ՝ կայուն և հստակ օդային կադրերի համար։',
  },
  {
    icon: Film,
    title: 'Բարձրորակ 4K նկարահանում',
    desc: 'Կտրուկ մանրամասներ և գունային հարստություն յուրաքանչյուր կադրում։',
  },
  {
    icon: Heart,
    title: 'Անհատական մոտեցում',
    desc: 'Յուրաքանչյուր նախագիծ ձևավորվում է ձեր տեսլականի շուրջ։',
  },
  {
    icon: Mountain,
    title: 'Կինեմատոգրաֆիկ մոնտաժ',
    desc: 'Պրոֆեսիոնալ գունավորում և մոնտաժ՝ կինոյի որակով։',
  },
  {
    icon: Zap,
    title: 'Արագ իրականացում',
    desc: 'Արագ հաղորդակցություն և հուսալի առաքում՝ սկզբից մինչև վերջ։',
  },
  {
    icon: Clock,
    title: 'Հայաստանի լավագույն տեսարանները',
    desc: 'Գիտեմ՝ որտեղ և երբ նկարահանել ամենագեղեցիկ կադրերը։',
  },
]
