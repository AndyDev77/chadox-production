import Link from "next/link";
import { navData } from "../constants";
import Socials from "./Socials";

const NavMobile = () => {
  const { items } = navData;
  return (
    <nav className="w-full h-full bg-white flex flex-col justify-evenly overflow-hidden">
      <ul className="flex flex-col justify-center items-center gap-y-6 py-6 mb-8">
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="text-2xl font-primary uppercase"
                href={item.path}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="text-2xl">
        <Socials />
      </div>
    </nav>
  );
};

export default NavMobile;
