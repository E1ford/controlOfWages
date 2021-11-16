import { Component } from "react";
import "./employers-add-form.css"

class EmployersAddForm extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            salary:''
        }
    }
    onChangeValue=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){


        const {name, salary} = this.state
        return(
            <div className="app-add-form">
                <h3>добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type=" text"
                        name='name'
                        className="form-control new-post-label"
                        placeholder="как его зовут?" 
                        value={name}
                        onChange={this.onChangeValue}/>
                    <input type="number"
                        name='salary'
                        className="form-control new-post-label"
                        placeholder="з/п B $?" 
                        value={salary}
                        onChange={this.onChangeValue}/>
                    <button type="button"
                        className="btn btn-outline-light"
                        onClick={()=>{
                            this.props.onAddEmployee(name,salary)
                            this.setState(state=>{
                                return {name:'',salary:''}
                            })}}>добавить</button>
                </form>
            </div>
        )
    }
}


export default EmployersAddForm;
