import {Routes, Route} from "react-router-dom"
import './App.css'
import {Home} from "./pages/Home/Home"
import Mainlayout from "./layout/Mainlayout"

function App() {

  return (
    <>
     <Routes>
      <Route element = {<Mainlayout/>}>
        <Route path =  '/' element = {<Home/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
