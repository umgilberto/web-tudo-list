import { PageTitle } from "../PageTitle";

export type Props = {
  title: string;
  children: React.ReactNode;
};

export const PageContent = ({ children, title }: Props) => {
  return (
    <div className='display: flex; flex-direction: column; gap: 5px; width: 100%;'>
      <PageTitle title={title} />
      {children}
    </div>
  );
};
