export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

//треба розібратися як заюзати це замість ITodo[] в сервісах
export interface ITodos {
  data: ITodo[];
}