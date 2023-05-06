import React, {useDeferredValue, useState} from 'react';

const StateTutorial = () => {
  // [name of the variable, name of a function that changes variable] = useState( initial value );
  const [counter, setCounter] = useState(0);

  const [inputValue, setInputValue] = useState('Jeff');

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  }

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  return (
    <div>
      <input placeholder='type something here' onChange={onChange}/>
      {inputValue}
      <br/>
      {counter}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}


// using class components
// import { Component } from 'react';
// class StateTutorial extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0
//     };
//     this.increment = this.increment.bind(this);
//   }

//   increment() {
//     this.setState(prevState => ({
//       counter: prevState.counter + 1
//     }));
//   }

//   render() {
//     return (
//       <div>
//         {this.state.counter}
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

export default StateTutorial;