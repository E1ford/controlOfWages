import "./employers-add-form.css"


const EmployersAddForm = () =>{
    return(
        <div className="app-add-form">
            <h3>добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type=" text"
                    className="form-control new-post-label"
                    placeholder="как его зовут?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="з/п B $?" />
                <button type="submit"
                    className="btn btn-outline-light">добавить</button>
            </form>
        </div>
    )
}


export default EmployersAddForm;
