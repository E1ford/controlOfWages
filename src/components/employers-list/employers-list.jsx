import EmployerListItem from "./employer-list-item/employer-list-item";
import './employers-list.css'



const EmployerList =({store,onDeleteEmployee,onToggleIncrease,onToggleRise,onChangeValueSalary})=>{

     let employerList = store.map(item => {
        return (<EmployerListItem 
            onChangeValueSalary={onChangeValueSalary}
            onToggleRise={()=>{onToggleRise(item.id)}} 
            onToggleIncrease={()=>{onToggleIncrease(item.id)}} 
            onDelete={()=>{onDeleteEmployee(item.id)}} 
            key={item.id} {...item}/>)
    });


    return (
        <ul className="app-list list-group">
            {employerList}
        </ul>
    )
}

export default EmployerList;