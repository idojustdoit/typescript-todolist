import Todos from "./components/Todos";

import Timer from "./components/Timer";
import RealTodo from "./components/RealTodo";
import TodosContextProvider from "./store/todos-contexts";

function App() {
  return (
    <TodosContextProvider>
      <Timer />
      <RealTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
