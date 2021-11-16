import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import './App.css';
import SearchPanel from './../search-panel/search-panel';
import AppFilter from './../app-filter/app-filter';
import EmployerList from './../employers-list/employers-list';
import EmployersAddForm from './../employers-add-form/employers-add-form';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      store : [
        {name:"Smith.M", salary: 800, id:1},
        {name:"Smith.M", salary: 1600, increase: false, id:2},
        {name:"Yelor.K", salary: 300, increase: true, id:3},
        {name:"Ptushko.O", salary: 600, increase: false, id:4},
        {name:"Smith.L", salary: 15000, increase: false, id:5},
      ],
      newKey: 6
    } 
  }
  onDeleteEmployee =(id)=>{
    this.setState(({store})=>{
      let newState =  store.filter(el=>el.id!== id);
      return {store: newState}
    })
  }
  onAddEmployee=(name,salary)=>{
    this.setState(state=>{
      let newObj = {name:name, salary:salary, increase:false, id:state.newKey}
      console.log('add')
      return {store: [...state.store, newObj],newKey: state.newKey + 1}
    })
  }

  render(){
    return (
      <div className="app">
        <AppInfo/>
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <EmployerList onDeleteEmployee={this.onDeleteEmployee} store={this.state.store}/>
        <EmployersAddForm onAddEmployee={this.onAddEmployee}/>
      </div>
    );
    }
}

export default App;
