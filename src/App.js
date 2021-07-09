import React from 'react';
import { PropTypes } from 'prop-types';

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
  const profiles = [
    {name: "Tabo", age: 10},
    {name: "nama", age: 222},
    {name: "taka"}
  ]
  return (
    <div> 
      {
        profiles.map((profile, index) => {
          return <Cat name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const Cat = (props) => {
  return <div>i am a {props.name}, age is {props.age}</div>
}
 
Cat.defaultProps = {
  age: 1
}

Cat.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}
export default App;
 