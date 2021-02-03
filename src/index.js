import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

function Employee(props){
    return <div style= {{border:"3px solid red"}}>
         <p>Employee ID : <b>{props.data.Id}</b></p>

         <p>Employee Name : <b>{props.data.Name}</b></p>

          <p>Employee Location : <b>{props.data.Location}</b></p>

          <p>Employee Salary : <b>{props.data.Salary}</b></p>

    </div>
}
function DisplayEmployees(props){
    const emplist= props.employeeList;
    const listElements =emplist.map((emp)=>
    <Employee key ={emp.Id} data ={emp}></Employee>
    );
    return (
        <div>
            {listElements}
        </div>
    );
}
const employees =[
    {Id:101,Name:'Abhinav',Location:'Bangalore',Salary:12345},
    {Id:102,Name:'Sumit',Location:'Chennai',Salary:123456},
    {Id:103,Name:'Ajay',Location:'Noida',Salary:123453}
];
const  element = <DisplayEmployees employeeList = {employees}></DisplayEmployees>
ReactDOM.render(element,document.getElementById("root"));

// class Employee extends React.Component{
//     render(){
//         return <div>
//             <h2>Employee Details......</h2>
//             <p>
//                 <lable>Employee ID:<b>{this.props.Id}</b></lable>
//             </p>
//             <p>
//                 <lable>Employee Name:<b>{this.props.Name}</b></lable>
//             </p>
//             <p>
//                 <lable>Employee Location:<b>{this.props.Location}</b></lable>
//             </p>
//             <p>
//                 <lable>Employee Salary:<b>{this.props.Salary}</b></lable>
//             </p>
//             <Department DeptName={this.props.deptName} HeadName= {this.props.headName}></Department>
//         </div>
//     }
// }

// class Department extends React.Component{
//     render(){
//         return <div>
//              <h2>Department Details......</h2>
//             <p>
//                 <lable>Dept Name: ID:<b>{this.props.DeptName}</b></lable>
//             </p>
//             <p>
//                 <lable>Head Name:<b>{this.props.HeadName}</b></lable>
//             </p>
           
//         </div>
//     }
    
// }
// const element =<Employee Id = "101" Name = "Sumit" Location =" Banglore"
//  Salary ="123456" deptName="UI" headName="Money"></Employee>

// ReactDOM.render(element,document.getElementById("root"));
// function DisplayEmployeeInfo(employee){
//     var DisplayEmployeeInfo=(employee) => {
//     return<div>

//         <h1>Employee Details...</h1>
//         <p>
//             <lable>Employee ID: <b>{employee.Id}</b></lable>
//             </p>
//             <p>
//             <lable>Employee Name: <b>{employee.Name}</b></lable>
//             </p>
//             <p>
//             <lable>Employee Location: <b>{employee.Location}</b></lable>
//             </p>
//             <p>
//             <lable>Employee Salary: <b>{employee.Salary}</b></lable>
//         </p>
//         <Department deptName ={employee.deptName} headName ={employee.headName}></Department>
//     </div>;
// }

// const Department =(deptinfo) =>{
//     return <div>
//         <p>Dept Name is: <b>{deptinfo.deptName}</b></p>
//         <p>Dept Head is: <b>{deptinfo.headName}</b></p>
//     </div>;
// }

// const element =<DisplayEmployeeInfo Id= "101" Name ="Sumit" Location = "Banglore"
//  Salary ="12345" deptName="UI Dev" headName= "Pragim Tech"></DisplayEmployeeInfo>

// ReactDOM.render(element,document.getElementById("root"));

// const element=React.createElement("h1",null,"Welcome to React Programming World....");
// ReactDOM.render(element,document.getElementById("root"));

// const element=React.createElement("div",{className:"testclass"},

// React.createElement("h1",null,'Welcome to React Programming World'),

// React.createElement('h2',null,'Understanding the creation of React Element'));
// ReactDOM.render(element,document.getElementById("root"));

// const element =<h1 className="testclass">Welcome to React programming...</h1>;
// ReactDOM.render(element,document.getElementById("root"));
// const newelement =<h1 className="testclass">Understanding the creation of Element in React..</h1>;
// ReactDOM.render(newelement,document.getElementById("App"));

// const element=(
//   <div className="testclass">
//     <h1>Welcome to the React Programming...</h1>
//     <h1>Understanding the creation of React Element...</h1>
//   </div>
// );
// ReactDOM.render(element,document.getElementById("root"));