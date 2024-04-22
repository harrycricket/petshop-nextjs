import { ModeToggle } from "@/components/mode-toggle";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <header>AuthLayout header</header>
        <ModeToggle/>
        {children}
        <footer>AuthLayout footer</footer>
    </div>
  );
}