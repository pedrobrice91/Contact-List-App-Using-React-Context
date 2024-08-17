import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Home from "./views/Home"
//import Login from "./views/Login"
//import Profile from "./views/Profile"
//import ProfileInfo from "./views/ProfileInfo"
//import Navbar from "./componets/Navbar"
import injectContext from "./store/context"
import Addcontact from "./views/Addcontact"
import Editcontact from "./views/Editcontact"

const App = () =>{
  return <div>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/create" element={<Addcontact/>}/>
  <Route path="/edit/:id" element={<Editcontact/>}/>
</Routes>
</BrowserRouter>
  </div>
}
//export default App
export default injectContext(App);