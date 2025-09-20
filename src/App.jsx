import HomePage from "./pages/HomePage"
import DetailProduct from "./pages/DetailFilm"

import  DefaultLayout from "./layout/DefaultLayout"
import  {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element ={<DefaultLayout/>}>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/detailproduct' element={<DetailProduct/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
