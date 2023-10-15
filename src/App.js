import "./App.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />,
          <Route path="/kontak" element={<Contact />} />,
          <Route path="/tentang" element={<About />} />
        </Route>
      </>
    )
  )
  return <RouterProvider router={router}/>
  
}

export default App;