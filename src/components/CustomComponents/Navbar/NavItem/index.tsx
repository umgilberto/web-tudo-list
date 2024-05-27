import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";

interface Props {
  title: string;
  href: string;
  children?: React.ReactNode;
}

export const NavItem = ({ title, children }:  Props) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
            <div className='text-sm font-medium leading-none'>{title}</div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  };
