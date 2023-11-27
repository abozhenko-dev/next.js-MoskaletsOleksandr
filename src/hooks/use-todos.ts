import useSWR from "swr";

export const useToDos = () => {
  const { data } = useSWR("/todos");

  return data;
};
