import { Index } from "./Components/Index";
import { DataProvider } from "./Context/DataContext";
import { FilterProvider } from "./Context/FilterContext";

function App() {
  return (
    <div>
      <FilterProvider>
        <DataProvider>
            <Index/>
        </DataProvider>
      </FilterProvider>
    </div>
  );
}

export default App;
