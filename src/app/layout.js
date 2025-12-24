import "./globals.css";

export const metadata = {
  title: "Data Grid Example",
  description: "Easy Data Display Grid with Filters, Sorting, Dates and Support for Nested Objects via JSON",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
