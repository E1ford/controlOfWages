
import "./app-filter.css"



const AppFilter =(props)=>{
    const buttonData  =[
        {name:'all', label:'все сотрудники'},
        {name:'rise', label:'на повышение'},
        {name:'more', label:'З/П больше 1000$'}
    ]

    const buttons = buttonData.map(item =>{
        const active = props.filter === item.name;
        const clazz = active ? "btn-group btn btn-light" :  "btn-group btn btn-outline-light";
        return <button 
                className={clazz}
                name={item.name}
                key = {item.name}
                onClick={()=>{props.onFilterSelect(item.name)}}
                type="button">
                    {item.label}
            </button>
    })


    return (buttons
    )

}


export default AppFilter;