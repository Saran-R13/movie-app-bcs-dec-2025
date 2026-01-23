import "./index.css";

// Component = UI + Logic
// Props - Arg & Parameter - Properties
export default function App() {
  // Logic Starts

  // Logic Ends
  return (
    // UI Starts
    <div className="App">
      {/* prop - name */}
      <Msg name="Nk" />
      <Msg name="Tara" />
      <Msg name="Pushpa" />
    </div>
    // UI Ends
  );
}

function Msg({ name }) {
  return (
    <div>
      <h1 className="user-msg">Hello, {name} 🎊</h1>
    </div>
  );
}

// function Msg(props) {
//   const { name } = props;

//   return (
//     <div>
//       <h1 className="user-msg">Hello, {name} 🎊</h1>
//     </div>
//   );
// }

// function Msg(props) {
//   console.log(props, typeof props);
//   // let name = "NK";

//   return (
//     <div>
//       <h1 className="user-msg">Hello, {props.name} 🎊</h1>
//     </div>
//   );
// }

// function print(name) {
//   return `Hello, ${name}`;
// }

// print('nk')
// print('pusha')
// print('tara')

// Component Rules
// 1. Start with Capital (PascalCase)
// 2. Return JSX

function Msg1() {
  let name = "Suriya";
  let followers = 100;

  return (
    <div>
      <h1 className="user-msg">Hello, {name} 🎊</h1>
      <h2>
        {name} has {followers * 2} followers
      </h2>
    </div>
  );
}

// JSX - JavaScript XML
// Babel -> JSX -> JS
// class -> reserverd keyword

// // Component = UI + Logic
// export default function App() {
//   // Logic Starts
//   let name = "Suriya";

//   // Logic Ends
//   return (
//     // UI Starts
//     <div className="App">
//       <input type="text" placeholder="Tell me your fav color" />
//       <h1 className="user-msg">Hello, Vikas 🎊</h1>
//     </div>
//     // UI Ends
//   );
// }

// // JSX - JavaScript XML
// // Babel -> JSX -> JS
// // class -> reserverd keyword
