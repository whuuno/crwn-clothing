import {Routes, Route, Outlet} from 'react-router-dom';

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component.js";



const Shop = () => {
  return (
    <div>
      <h2>This is Shop Zone </h2>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route path='/home' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
