import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  EyeClosedIcon,
  EyeOpenIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { Control, FieldValue } from "react-hook-form";
import { Tooltip } from "../Tooltip";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  control: Control<FieldValue<any>>;
  description?: string;
}

export const InputForm = ({
  control,
  label,
  name,
  description,
  type,
  ...rest
}: Props) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  const isPassword = type === "password";
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <div className=''>
            {isPassword ? (
              visible ? (
                <Tooltip title="Senha visivel">
                  <EyeOpenIcon onClick={handleVisible} />
                </Tooltip>
              ) : (
                <Tooltip title="Visualizar senha">
                  <EyeClosedIcon onClick={handleVisible} />
                </Tooltip>
              )
            ) : null}
            <FormControl>
              <Input
                {...rest}
                {...field}
                type={isPassword ? (visible ? "text" : "password") : "text"}
                className='form-input w-full'
              />
            </FormControl>
          </div>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
