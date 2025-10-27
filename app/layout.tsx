const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="font-roboto-flex antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
