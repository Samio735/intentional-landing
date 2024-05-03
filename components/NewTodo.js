import { Input } from "./ui/input";

export function NewTodo({ setTodos }) {
  const addTodo = (e) => {
    if (e.key === "Enter") {
      setTodos((todos) => [
        { text: e.target.value, completed: false },

        ...todos,
      ]);
      e.target.value = "";
    }
  };
  return (
    <div className="opacity-30 hover:opacity-100">
      <Input type="new-todo" placeholder="New todo ..." onKeyPress={addTodo} />
    </div>
  );
}
