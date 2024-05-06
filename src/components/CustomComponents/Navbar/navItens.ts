interface NavItem { 
  label: string;
  href: string;
  icon?: JSX.Element;
}

export const navItens = [
  {
    label: "My Tasks",
    href: "/tasks",
  }
]