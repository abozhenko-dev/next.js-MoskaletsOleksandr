import { FC } from "react";

type Props = {
  title: string
}

export const Title: FC<Props> = ({ title }) => {
  return (
    <h1 className='page-title'>{title}</h1>
  );
};