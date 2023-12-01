import useSWR from "swr";

export const useToDo = (slug: string) => {
  const { data } = useSWR("/todos/" + slug);

  return data;
};
