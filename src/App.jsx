import HomePage from "./pages/HomePage"
import DetailProduct from "./pages/DetailFilm"

import  DefaultLayout from "./layout/DefaultLayout"
import  {BrowserRouter, Routes, Route, Links} from "react-router-dom"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="details" element={<DetailProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
