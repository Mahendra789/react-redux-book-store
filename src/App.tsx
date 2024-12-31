import { createBrowserRouter, RouterProvider, Outlet, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";


const Layout = ()=>{
  return <>
  <Navbar />
  <Outlet />
  <Footer />
  </>
}


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
      element:  <Home/>
      },
      {
        path: '/cart',
      element:  <Cart/>
      }
    ]
  }
])

function App(){
  return <RouterProvider router={router} />
}

export default App