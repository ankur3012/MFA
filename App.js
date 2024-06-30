// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;








// client/src/App.js
// import React from 'react';
// import Login from './components/Login';

// function App() {
// 	return (
// 		<div className="App">
// 			<div style={centerStyle}>
// 				<h1>
// 					MFA using
// 					MERN Stack
// 				</h1>
// 			</div>
// 			<Login />
// 		</div>
// 	);
// }

// const centerStyle = {
// 	textAlign: 'center',
// };
// export default App;






import React from 'react';
import './App.css';
import Login from './components/login.js'; // Adjust the path if necessary

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Multi-Factor Authentication App</h1>
        <Login />
      </header>
    </div>
  );
}

export default App;
