import { Component } from 'react';
import { useBeforeunload } from 'react-beforeunload';
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
      term:'',
      filter: 'all'
    } 
    // this.componentDidMount(
    //   inicialState = localStorage.
    //   this.setState(state=>{
    //     return 
    //   })
    // )
    
  }
  componentDidMount(){
    let Prevstore = JSON.parse(localStorage.getItem("data"))
    this.setState({store: Prevstore})
  }
  componentDidUpdate() {
    let store = this.state.store
    localStorage.clear();
    localStorage.setItem("data", JSON.stringify(store) )
  }
  
  
  onChangeValueSalary=(id, newSalary)=>{
    this.setState(({store})=>({
      store : store.map(item => {
        if(item.id === id ){
          return {...item, salary: newSalary}
        }
        return item 
      })
    }))
  }
  // удаление сотрудника 
  onDeleteEmployee =(id)=>{
    this.setState(({store})=>{
      let newState =  store.filter(el=>el.id!== id);
      return {store: newState}
    })
  }
  // добавление нового сотрудника
  onAddEmployee=(name,salary)=>{
    this.setState(state=>{
      let newObj = {name:name, salary:salary, increase:false, id:state.newKey}
      console.log('add')
      return {store: [...state.store, newObj],newKey: state.newKey + 1}
    })
  }
  // кнопка со звездочкой
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
  // кнопка с печенькой
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
  // поиск среди работников, ищет точное совпадение в имени
  searchEmp = (items, term )=>{
    if(term.length === 0 ){
      return items
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1})
  }
  onUpdateSearch =(term)=>{
    this.setState({term})
  }
  onFilterSelect=(filter)=>{
    this.setState({filter})

  }
  filterPost =(items,filter)=>{
    switch(filter){
      case 'rise': 
              return items.filter(item =>item.rise)
      case 'more':
              return items.filter(item =>item.salary >=1000)
      case 'all':
              return items
      default:
              return items
    }
  }
  

  render(){
    
    const {store, term, filter} = this.state
    // количество рабочих и рабочих получающих премию
    const  countEmployee = store.length;
    const  countEmployeeInIncrease= store.filter(el => el.increase ).length
    // готовые данные для отображения, отфильтрованные
    const visibleData = this.filterPost(this.searchEmp(store, term), filter)



    return (
      <div className="app">
        <AppInfo countEmployeeInIncrease={countEmployeeInIncrease} countEmployee={countEmployee}/>
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter onFilterSelect={this.onFilterSelect} filter={filter}/>
        </div>
        <EmployerList
          onChangeValueSalary={this.onChangeValueSalary}
          onDeleteEmployee={this.onDeleteEmployee}
          onToggleIncrease={this.onToggleIncrease} 
          store={visibleData}
          onToggleRise={this.onToggleRise}
        />
        <EmployersAddForm onAddEmployee={this.onAddEmployee}/>
      </div>
    );
    }
}

export default App;
