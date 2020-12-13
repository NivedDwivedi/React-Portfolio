// import logo from './logo.svg';
import './App.css';
// import "./style.css";
import Header from "./component/header";
import Projects from "./component/projects";
import Education from "./component/education";
import Skill from "./component/skill";
import Contact from "./component/contact";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
        <Header />
        <Projects />
        <Education />
        <Skill />
        <Contact />
    </div>
    
  );
}

export default App;
