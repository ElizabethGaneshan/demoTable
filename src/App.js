import './App.css';
import { FilteringTable } from './components/FilteringTable';
import { PaginationTable } from './components/PaginationTable';
// import { BasicTable } from "./components/BasicTable";
// import { SortingTable } from './components/SortingTable';

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      <PaginationTable />
    </div>
  );
}

export default App;
