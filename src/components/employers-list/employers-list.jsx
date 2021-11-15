import EmployerListItem from "./employer-list-item/employer-list-item";
import './employers-list.css'
const EmployerList =({store})=>{

     let employerList = store.map(item => {
        const {id, ...itemProps} = item;
        return <EmployerListItem key={id} {...itemProps}/>
    });


    return (
        <ul className="app-list list-group">
            {employerList}
        </ul>
    )
}

export default EmployerList;