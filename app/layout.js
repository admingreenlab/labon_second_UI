// import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/baosh.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { dmSans, lora } from '@/lib/font'
export const metadata = {
    title: 'Labon',
    description: 'Digital Agency react next Js template'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dmSans.variable} ${lora.variable}`}>
            <body>{children}</body>
        </html>
    )
}
