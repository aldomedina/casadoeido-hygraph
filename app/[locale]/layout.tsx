import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link href="https://use.typekit.net/eid1mpe.css" rel="stylesheet" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="">{children}</div>
          <Nav />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
