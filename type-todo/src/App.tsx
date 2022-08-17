import Todos from "./components/Todos";

import RealTodo from "./components/RealTodo";
import TodosContextProvider from "./store/todos-contexts";

function App() {
  return (
    <TodosContextProvider>
      <RealTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
