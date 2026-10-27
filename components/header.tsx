import Link from "next/link";
const navItems[
    {label: "Home", href: "/"},
    {label: "About", href: "/about"},
    {label: "Projects", href: "projects"},
    {label: "Contact", href: "/contact"}
];

export function Header() {
    return (
<header className="border-b border-gray-200">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          SB
        </Link>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-gray-600 hover:text-black"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    );
}