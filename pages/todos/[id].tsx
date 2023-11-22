import { GetServerSideProps } from "next";
import {MainLayout} from "../../src/layouts";
import { ToDoService } from "../../src/services/todo.service";
import { ITodo, NextPageWithLayout } from "../../src/utils";
import { ReactElement } from "react";
import ToDo from "../../src/pages/todo";
import { Meta } from "../../src/components/utils";
import { useRouter } from "next/router";

type Props = {
  todo: ITodo
};

const Page: NextPageWithLayout<Props> = ({ todo }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Meta meta={{ title: `Todo #${id}  | Next.js` }} />
      <ToDo todo={todo} />
    </>
  )
};


Page.getLayout = (page: ReactElement) => (
  <MainLayout>
    {page}
  </MainLayout>
);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const { data } = await ToDoService.getOneById(id as string);

  return {
    props: {
      todo: data
    }
  }
}

export default Page;