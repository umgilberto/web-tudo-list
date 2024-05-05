interface Props {
  children: React.ReactNode;
}

export const FormGroup = ({ children }: Props) => {
  return <form className='max-w-sm mx-auto'>{children}</form>;
};
