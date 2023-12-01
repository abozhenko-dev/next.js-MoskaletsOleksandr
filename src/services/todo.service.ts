import { BASE_URL, ITodo } from "@utils";

import { $api } from "./axios.service";

export class ToDoService {
  static getAll() {
    return $api<ITodo[]>(BASE_URL.todos);
  }

  static getOneById(slug: string) {
    return $api<ITodo>(`${BASE_URL.todos}/${slug}`);
  }
}
