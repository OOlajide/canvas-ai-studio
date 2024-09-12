import "../styles/globals.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <head>
        <meta name="dscvr:canvas:version" content="vNext" />
      </head>
      <body>{children}</body>
    </html>
  )
}
