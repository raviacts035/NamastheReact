/***
* HMR - HOT Module Reloading
*
*
*/


import React from "react";
import ReactDOM from "react-dom/client";

// const headin = React.createElement("h2",{},"hello React Two");
// /* const root=ReactDOM. */
// const root =ReactDOM.createRoot(document.getElementById("root"));

// const htag= <h2>This is Ravindra</h2>;
// root.render([headin,htag]);
// // root.render(htag);

// **FUnctional react component- NEW- very useful to use**
// It's a good practice to use first Letter of functional component name Capital
// Functional component is just a javascript function, that it can return a react component.
// const HeadingComp=()=>{
//     return <div><h1>This is A valid Functional component one</h1></div>
// }

// const Headi=()=>{
//     return (
//     <div>
//         {HeadingComp()}
//         <h1>This is Second componenet Two</h1>
//         {SupTag()}
//     </div>
//     );
//     // Reeact functional Components are just like normal JS function
// }
// const SupTag=()=>{
//     return (<p>This is dknf  fsd f f sg sf vee rvervfv frevre vevve verv veecr</p>
//  );}

/**
 *we can give styling components like a function 
 */
const sty= {
    border:"1px solid red",
    margin:"10px",
    padding:"20px"
}
const emptyTag=(
    <>
    <h2>This is a EMpty1</h2>
    <h3>This is second Empty</h3>
    </>
)
const WithStyle=()=>{
    return (<div style={sty}>
        {emptyTag}
        <p>THis is ssoem thing that you cantss uderstand gooes here</p>
    </div>
);}
const root = ReactDOM.createRoot(document.querySelector("#root"));
// When 
root.render(<WithStyle/>);