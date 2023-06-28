import Home from "./pages/Home/Home";
import logo from "./assets/logo.png";

function App() {
  return (
    <main>
      <header>
        <img className={"logo"} src={logo} alt={"logo"}/>
      </header>
      <Home/> 
    </main>
    
  )
}

export default App;