import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip as RadixTooltip,
} from "@radix-ui/react-tooltip";

interface Props {
  children: React.ReactNode;
  title: string;
}

export const Tooltip = ({ title, children }: Props) => {
  return (
    <TooltipProvider>
      <RadixTooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </RadixTooltip>
    </TooltipProvider>
  );
};
