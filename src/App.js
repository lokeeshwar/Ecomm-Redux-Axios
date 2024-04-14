import './App.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Components/Dashboard';
import CartComp from './Components/CartComp';
import RootLayout from './Components/RootLayout';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element = {<RootLayout/>} >
        <Route index element = {<Dashboard/>}></Route>
        <Route path='/cart' element = {<CartComp/>}></Route>
      </Route>
  )
)
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
