import Todos from "./components/Todos";

import Stopwatch from "./components/Stopwatch";
import RealTodo from "./components/RealTodo";
import TodosContextProvider from "./store/todos-contexts";

function App() {
  return (
    <TodosContextProvider>
      <Stopwatch />
      <RealTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
