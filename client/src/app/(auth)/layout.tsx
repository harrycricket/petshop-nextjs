export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <header>AuthLayout header</header>
        {children}
        <footer>AuthLayout footer</footer>
    </div>
  );
}