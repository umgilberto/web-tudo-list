import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Control, FieldValue } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  control: Control<FieldValue<any>>;
  description?: string;
}

const CustomInput = (props: any) => {
  const [show, setShow] = useState(false);

  const handleShowPassword = () => setShow(!show);

  const isPassField = props.type === "password";
  return (
    <div className="relative inline-block w-full">
      {isPassField &&
        (show ? (
          <EyeOpenIcon
            onClick={handleShowPassword}
            className="absolute right-2 top-1/4 cursor-pointer"
          />
        ) : (
          <EyeClosedIcon
            onClick={handleShowPassword}
            className="absolute right-2 top-1/4 cursor-pointer"
          />
        ))}
      <Input {...props} type={isPassField ? show ? "text" : "password" : "text"} />
    </div>
  );
};

export const InputForm = ({
  control,
  label,
  name,
  description,
  ...rest
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <CustomInput {...rest} {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
