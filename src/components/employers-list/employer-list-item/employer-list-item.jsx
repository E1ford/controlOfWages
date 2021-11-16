import './employer-list-item.css';
import React from 'react';

class EmployerListItem extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            increase:false,
            like:false
        }
    }
    onIncrease=()=>{
        this.setState(({increase})=>({
            increase:!increase
        }))
    }
    onLike=()=>{
        this.setState(({like})=>({
            like:!like
        }))
    }
    render() {
        let {name,salary} = this.props;
        let {increase, like} = this.state;
        let classNam = increase ? "list-group-item d-flex justify-content-between increase" :
        "list-group-item d-flex justify-content-between ";
        if(like){
            classNam = classNam +' like'
        }

        return(
            <li className={classNam} >
                <span className="list-group-item-label " onClick={this.onLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
                <div className="d-flex justify-content-center align-items-center">
                   <button type="button"
                       className="btn-cookie btn-sm "
                       onClick={this.onIncrease}>
                       <i className="fas fa-cookie"></i>
                   </button>
                   <button type="button"
                       className="btn-trash btn-sm ">
                       <i className="fas fa-trash"></i>
                   </button>
                       <i className=" fas fa-star"></i>
                </div>
            </li>
        )
    }
    
 
}

export default EmployerListItem;