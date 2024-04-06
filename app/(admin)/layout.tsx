import "../globals.css";
import SideBarPage from "@/Components/sidebar/SideBarPage";
export const metadata = {
  title: 'CSTAD Ecommerce',
    openGraph: {
        title: 'CSTAD Ecommerce',
        description: 'An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location',
        images: "https://st.depositphotos.com/2021695/1972/i/450/depositphotos_19724845-stock-illustration-various-shoes.jpg"
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className="flex">
      <aside className="h-screen">
        <SideBarPage/>
      </aside>
      <main className="flex-1">
        <section>
          {children}
        </section>
      </main>
      </body>
      </html>
  )
}
