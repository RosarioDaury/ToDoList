import { ToDo } from "./Components/Todo";
import { FormProvider } from "./Context/FormContext";


function App() {
  return (
    <div className="App">
      <FormProvider>
        <ToDo/>
      </FormProvider>
    </div>
  );
}

export default App;
