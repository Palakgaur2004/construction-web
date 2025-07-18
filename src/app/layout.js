import { Layout } from "lucide-react"
import "./globals.css"
import Navbar from "@/components/Navbar"
import  Footer from "@/components/Footer"

export const metadata = {
  title: "BuilderPro",
  description: "End-to-end building and construction services",
  icons: {
    icon: "/favicon.png",
   
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F1F5F9] text-[#1E293B]">
        <Navbar />
        
      
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
