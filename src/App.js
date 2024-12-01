import Header from "./components/Header";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import './App.css'
const App = () => {

  return (
    <div className="app-container">
    <Sidebar/>
    <div className="main-section">
      <Header/>
      <Content />
    </div>
  </div>
  )
}

export default App

