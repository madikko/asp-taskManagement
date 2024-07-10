import { Poppins,Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { SidebarProvider } from "./providers";

const playfair = Playfair_Display({ subsets: ["latin"], weight:['400'] });
const poppins = Poppins({ subsets: ["latin"], weight:['400'] });

export const metadata = {
  title: "Task Management Application",
  description: "Working with ASP.NET and React to manage tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>   
        <SidebarProvider>     
          <Navbar/>
          <div className="min-h-[80vh]">
            {children}
          </div>
          <Footer/>
        </SidebarProvider>
      </body>
    </html>
  );
}
