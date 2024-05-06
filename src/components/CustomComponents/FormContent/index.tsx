import { useNavigate } from "react-router-dom";
import { Form } from "../../ui/form";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  formProvider: UseFormReturn<any>;
  onSubmit: (x: any) => void;
  hiddenGoBackButton?: boolean;
}

export const FormContent: React.FC<Props> = ({
  children,
  formProvider,
  onSubmit,
  hiddenGoBackButton = true,
  ...props
}) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Form {...formProvider}>
      <form
        onSubmit={formProvider.handleSubmit(onSubmit)}
        className="space-y-8"
        {...props}
      >
        {children}
        <div className="flex gap-2">
          {!hiddenGoBackButton ? (
            <Button
              onClick={handleGoBack}
              type="button"
              className="w-full py-2 px-4 bg-slate-900 text-white rounded-md"
            >
              back
            </Button>
          ) : null}
          <Button
            type="submit"
            className="w-full py-2 px-4 bg-slate-900 text-white rounded-md"
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
