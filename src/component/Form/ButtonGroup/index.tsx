interface Props {
  children: React.ReactNode;
}

export const ButtonGroup = ({ children }: Props) => {
  return (
    <div class="mb-5">
      {children}  
    </div>
  );
};
