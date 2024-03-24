"use client";

import { headerData, sideBarData } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  const { logo } = headerData;
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/dashboard" className="sidebar-logo">
          <Image src={logo} alt="logo" width={150} height={90} />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav elements">
              {sideBarData.slice(0, 3).map((link) => {
                const isActive = link.path === pathname;

                return (
                  <li
                    key={link.path}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-dark text-white" : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.path}>
                      <Image
                        src={link.icon}
                        alt="icon"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.name}
                    </Link>
                  </li>
                );
              })}

              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/dashboard" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
