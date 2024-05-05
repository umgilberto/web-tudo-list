import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";

interface Props {
  children: React.ReactNode;
  onSubmit: () => void;
  goBackButton?: boolean

}

export const Form = ({ children, onSubmit, goBackButton = true }: Props) => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  return(
    <form onSubmit={onSubmit} className='max-w-sm mx-auto'>
      {children}
      <ButtonGroup>
        {goBackButton ? <Button onClick={handleGoBack}>Voltar</Button> : }
        <Button>

        </Button>
      </ButtonGroup>
      </form>
  )
};
