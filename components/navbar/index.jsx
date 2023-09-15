"use client";

import { useSession } from "next-auth/react";
import AvatarMenu from "../avatar-menu";
import { ThemeToggle } from "../toggle-theme";

const Navbar = () => {
  const session = useSession();

  return (
    <div className="fixed inset-x-0 top-0 shadow">
      <ul className="w-full max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-2 lg:px-0">
        <li className="text-xl lg:text-2xl font-semibold">Todoist</li>
        <div className="flex items-center gap-x-4">
          <AvatarMenu className="" />
          <ThemeToggle className="" />
        </div>
      </ul>
    </div>
  );
};
export default Navbar;
