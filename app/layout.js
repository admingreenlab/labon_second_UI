// import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/baosh.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { dmSans, lora } from '@/lib/font'
import { SearchProvider } from "@/components/context/SearchContext";
import { RouteChangeListener } from "./route-change-listener";

export const metadata = {
    title: 'Labon',
    description: 'Labon Diomands LLC'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dmSans.variable} ${lora.variable}`}>
            <SearchProvider>
                <RouteChangeListener />
                <body>{children}</body>
            </SearchProvider>
        </html>
    )
}
