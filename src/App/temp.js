// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('John Doe');

//   const alertName = () => {
//     alert(name);
//   };

//   const handleNameInput = e => {
//     setName(e.target.value);
//   };

//   return (
//     <div>
//       <h3>This is a Functional Component</h3>
//       <input
//         type="text"
//         onChange={handleNameInput}
//         value={name}
//         placeholder="Your Name"
//       />
//       <button onClick={alertName}>
//         Alert
//       </button>
//     </div>
//   );
// };

// export default App;


// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     name: ''
//   }

//   alertName = () => {
//     alert(this.state.name);
//   };

//   handleNameInput = e => {
//     this.setState({ name: e.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <h3>This is a Class Component</h3>
//         <input
//           type="text"
//           onChange={this.handleNameInput}
//           value={this.state.name}
//           placeholder="Your Name"
//         />
//         <button onClick={this.alertName}>
//           Alert
//         </button>
//       </div>
//     );
//   }
// }

// export default App;


