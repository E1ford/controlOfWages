import './employer-list-item.css';
import React from 'react';

const  EmployerListItem = (props)=>{

    let {name,salary,onDelete, rise, increase,onToggleRise,onToggleIncrease} = props;
    
    let classNam = increase ? "list-group-item d-flex justify-content-between increase" :
    "list-group-item d-flex justify-content-between ";
    if(rise){
        classNam = classNam +' like'
    }

    return(
        <li className={classNam} >
            <span className="list-group-item-label " onClick={onToggleRise}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button"
                    onClick={onDelete}
                    className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                    <i className=" fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployerListItem;