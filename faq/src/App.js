import Navbar from "./components/NavBar";
import Faq from "./components/Faq";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar/> 
    <Faq/>
    </div>
  );
}

export default App;
