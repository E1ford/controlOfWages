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
        {name:"Smith.M", salary: 700, rise:true, increase: false, id:1},
        {name:"Yelor.K", salary: 300, rise:false, increase: true, id:2},
        {name:"Ptushko.O", salary: 600, rise:false, increase: false, id:3},
        {name:"Smith.L", salary: 15000, rise:false, increase: false, id:4},
      ],
      newKey: 5,
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
  onToggleIncrease=(id)=>{
    this.setState(({store})=>({
      store : store.map(item => {
        if(item.id === id ){
          return {...item, increase: !item.increase}
        }
        return item 
      })
    }))
  }
  onToggleRise=(id)=>{
    this.setState(({store})=>({
      store : store.map(item => {
        if(item.id === id ){
          return {...item, rise: !item.rise}
        }
        return item 
      })
    }))
  }

  render(){
    return (
      <div className="app">
        <AppInfo store={this.state.store}/>
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <EmployerList onDeleteEmployee={this.onDeleteEmployee}
          onToggleIncrease={this.onToggleIncrease} 
          store={this.state.store}
          onToggleRise={this.onToggleRise}
        />
        <EmployersAddForm onAddEmployee={this.onAddEmployee}/>
      </div>
    );
    }
}

export default App;
