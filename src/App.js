import Home from "./pages/Home/Home";
import logo from "./assets/logo.png";

function App() {
  return (
    <div>
      <img className={"logo"} src={logo} alt={"logo"}/>
      <Home/> 
    </div>
    
  )
}

export default App;