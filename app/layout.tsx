import '@/app/ui/global.css';
import { FInter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${FInter.className} antialiased`}>{children}</body>
    </html>
  );
}
