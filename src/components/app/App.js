
import AppInfo from '../app-info/app-info';
import './App.css';
import SearchPanel from './../search-panel/search-panel';
import AppFilter from './../app-filter/app-filter';
import EmployerList from './../employers-list/employers-list';

function App() {
  return (
    <div className="app">
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployerList/>
    </div>
  );
}

export default App;
