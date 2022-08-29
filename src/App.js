import Home from "./routes/home/home.component";
import { Routes, Route } from 'react-router-dom'
import Navigation from "./routes/navigation/navigation.route";
import SignIn from "./routes/sign-in/sign-in";

const Shop = () => {
  return (
    <h1>shoping </h1>
  )

}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
      
    </Routes>
  )

}

export default App;
