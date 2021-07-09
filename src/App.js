import React, { Component } from 'react';

// class App extends Component {
//   render(){
//     const str = "hi tmo";
//     const dom = 
//         <React.Fragment>
//           <label htmlFor="bar">bar</label>
//           <input type="text" onClick={()=> {console.log("click")} }/>
//         </ React.Fragment>
//     return dom ;
//   }
// };

const App = () => {
  return (
    <div> 
      <cat />
      <cat />
      <cat />
    </div>)
}

const cat = () => {
  return <div>Move!</div>
}
export default App;
 