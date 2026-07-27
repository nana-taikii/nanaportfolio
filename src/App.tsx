import {Routes, Route} from "react-router-dom"
import './App.css'
import {Home} from "./pages/Home/Home"
import Mainlayout from "./layout/Mainlayout"
import UIUXProjectDesc from "./components/Projects/UIUXProjects/UIUXProjectDesc/UIUXProjectDesc"

function App() {

  return (
    <>
     <Routes>
      <Route element = {<Mainlayout/>}>
        <Route path =  '/' element = {<Home/>}/>
        <Route path = '/uiux/:projectId'  element = {<UIUXProjectDesc/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
