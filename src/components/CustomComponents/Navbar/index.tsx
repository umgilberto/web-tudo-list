import {
  Link,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import React, { useEffect, useState } from "react";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navOptions } from "./options";

const Navbar: React.FC = () => {
  return (
    <NavigationMenu className="border-b-red-200">
      <NavigationMenuList>
        <NavigationMenuItem>
          {navOptions.map((item) => (
            <Link href={item.href}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {item.label}
              </NavigationMenuLink>
            </Link>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
