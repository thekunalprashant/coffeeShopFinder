import Link from "next/link";

const navLinkItem = [
  {
    name: "Find Coffee",
    href: "/find",
  },
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  return (
    <div className="px-4 lg:px-6 h-14 flex items-center justify-between bg-amber-500">
      <Link href="/" className="font-bold hover:text-white">
        Coffee Finder App
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {navLinkItem.map((item) => (
          <Link
            href={item.href}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
