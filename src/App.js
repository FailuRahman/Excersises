import React, { useState,useEffect } from "react";
import PaginationA from "./Component/PaginationA";
import Comp1 from "./Component/Comp1";
// import Test from "./Component/Test";
// import Divcolor from "./Component/Divcolor";
// import ComB from "./Component/ComB";
// import Colorchange from "./Component/Colorchange";
// import Forms from "./Component/Forms";

// import Todo from './Component/Todo'
//
// import Forms from './Component/Forms';
// import Listitem from './Component/listitem';

// class App extends Component {
//   state ={
//     firstName : "failu",
//     lastName : "rahman",
//   };
//   hadleChange= ()=>{ 
//     this.setState({
//       lastName : "Rahman.A"
//     })
//   };

//   render() {
//     return (
//       <div>
//        <h1> <Todo sendingData ={this.state.lastName}/></h1>
//        <button onClick={this.hadleChange}>change </button>
//       </div>
//     )
//   }
// }

//  class App extends Component {
//   render() {
//     return (
//       <div>

//         <Listitem/>

//       </div>
//     )
//   }
// };

// export default App;

const App = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  
  const [showTest,setShowTest] = useState(true)
  useEffect(()=>{
    console.log("Runnig");
    
    return ()=>{
      console.log("Unmount");
      
    }

  },[]);
  
  
     
  return (
    <div>
      {/* <PaginationA/> */}
      {/* <Forms/> */}
      {/* {showTest ? <Test/> : null}
      // <Test/> */}
      {/* <button onClick={()=>setShowTest(!showTest)} >Click Me</button>
      <h2>Welcome   </h2> */}
      {/* <input type="text" name="name" value={name} onChange={(event)=> setName(event.target.value)}/>
      <input type="text" name="email" value={email} onChange={(event)=> setEmail(event.target.value)}/> */}
      {/* <Colorchange/> */}
      <Comp1/>
      {/* {/* <Divcolor/> */}
      {/* <ComB/> */}
     

    </div>
  ); 
};

export default App;
