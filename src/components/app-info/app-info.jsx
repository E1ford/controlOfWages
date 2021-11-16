import React from "react"
import './app-info.css'
const AppInfo =({store})=>{

    let countEmployee = store.length;
    let countEmployeeInIncrease= store.filter(el => el.increase ).length
    return(
        <div className="app-info">
            <h1>учет сотрудников в компании Name</h1>
            <h2>общее число сотрудников: {countEmployee}</h2>
            <h3>премию получат: {countEmployeeInIncrease}</h3>
            
        </div>
    )
}

export default AppInfo;