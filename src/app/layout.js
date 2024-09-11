import "./globals.css";
export const metadata = {
  title: "Dashbord-Admin",
  description: "AdminPanel-Exercise-Dashbord- Check the Your Account!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="icon.png" /></head>
      <body className="bg-[#F8F9FA]">
        <main className="w-full mx-auto 2xl:container overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
