import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils";

export interface Todo {
    id: number,
    text: string,
    completed: boolean
}

export const DeleteTodo = (todos: Todo[], id: number): Todo[] =>
    todos.filter((todo) => todo.id != id)
export const AddTodo = (todos: Todo[], text: string): Todo[] =>
    [...todos,
    {
        id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1, text, completed: false
    }]


export const ToggleTodo = (todos: Todo[], id: number): Todo[] =>
 todos.map((todo) => ({ ...todo, completed: todo.id === id ? !todo.completed : todo.completed, }));


export const newTodoAtom = atom<string>("")
export const todosAtom = atom<Todo[]>([])
export const themeAtom = atomWithStorage('dark', false);
export const addTodoAtom = atom(() => "", (get, set) => {
    set(todosAtom, AddTodo(get(todosAtom), get(newTodoAtom)));
    set(newTodoAtom, "");
})
export const ToggleTodoAtom = atom(() => "", (get, set, id: number) => {
    set(todosAtom, ToggleTodo(get(todosAtom), id));
    set(newTodoAtom, "");
})
export const DeleteTodoAtom = atom(() => "", (get, set, id: number) => {
    set(todosAtom, DeleteTodo(get(todosAtom), id));
    set(newTodoAtom, "");
})


