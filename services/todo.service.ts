import axios from "axios";
import { Todo } from "../interfaces";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getAllToDos = async (): Promise<Todo[]> => {
    const { data } = await axios.get('/todos');
    return data as Todo[];
}

export const getToDoById = async (id: string): Promise<Todo> => {
    const { data } = await axios.get(`/todos/${id}`);
    return data as Todo;
}