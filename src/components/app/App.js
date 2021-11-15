
import AppInfo from '../app-info/app-info';
import './App.css';
import SearchPanel from './../search-panel/search-panel';
import AppFilter from './../app-filter/app-filter';
import EmployerList from './../employers-list/employers-list';
import EmployersAddForm from './../employers-add-form/employers-add-form';

function App() {

  const store =[{name:"Smith.M", salary: 800, id:1},
    {name:"Smith.M", salary: 1600, increase: false, id:2},
    {name:"Yelor.K", salary: 300, increase: true, id:3},
    {name:"Ptushko.O", salary: 600, increase: false, id:4},
    {name:"Smith.L", salary: 15000, increase: false, id:5},
  ]
  return (
    <div className="app">
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployerList store={store}/>
      <EmployersAddForm/>
    </div>
  );
}

export default App;
