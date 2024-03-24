"use client";
import { headerData, sideBarData } from "@/constants";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const SideMobileNav = () => {
  const pathname = usePathname();
  const { logo } = headerData;
  return (
    <header className="header">
      <Link href="/dashboard" className="flex items-center gap-2 md:py-2">
        <Image src={logo} alt="logo" width={150} height={28} />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/dashboard" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/img/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image src={logo} alt="logo" width={152} height={23} />

                <ul className="header-nav_elements">
                  {sideBarData.map((link) => {
                    const isActive = link.path === pathname;

                    return (
                      <li
                        className={`${
                          isActive && "gradient-text"
                        } p-18 flex whitespace-nowrap text-dark-700`}
                        key={link.path}
                      >
                        <Link
                          className="sidebar-link cursor-pointer"
                          href={link.path}
                        >
                          <Image
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default SideMobileNav;
