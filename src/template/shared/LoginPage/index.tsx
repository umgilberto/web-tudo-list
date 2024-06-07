import WithCentralizedLayout from "@/components/CustomComponents/ScreenResize/withCentralizedLayout";
import { loginFormSchema, LoginFormSchema } from "./formSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "@/components/CustomComponents/InpitForm";
import { FormContent } from "@/components/CustomComponents/FormContent";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const LoginPage = () => {
  const { toast } = useToast();
  
  const defaultValues = {
    email: "",
    password: "",
  };

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues,
  });

  function onSubmit(data: LoginFormSchema) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  
  return (
    <div className="w-2/6 h-2/4 justify-center items-center">
      <Card className="p-4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign in to tudo-list</CardTitle>
          <CardDescription>
            Enter your email below to Sign in
          </CardDescription>
        </CardHeader>
        <FormContent formProvider={form} onSubmit={onSubmit}>
          <InputForm
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <InputForm
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
          />
        </FormContent>
      </Card>
    </div>
  );
};

export default WithCentralizedLayout(LoginPage);
