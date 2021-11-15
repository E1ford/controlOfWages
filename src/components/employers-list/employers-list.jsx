import EmployerListItem from "./employer-list-item/employer-list-item";
import './employers-list.css'
const EmployerList =()=>{
    return (
        <ul className="app-list list-group">
            <EmployerListItem/>
            <EmployerListItem/>
            <EmployerListItem/>
            <EmployerListItem/>
        </ul>
    )
}

export default EmployerList;