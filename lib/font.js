import { DM_Sans, Lora } from 'next/font/google'

export const dmSans = DM_Sans({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--thm-font",
    display: 'swap',
})

export const lora = Lora({
    weight: ['400', '500', '600', '700',],
    subsets: ['latin'],
    variable: "--thm-font-2",
    display: 'swap',
})