import HomePage from "./pages/HomePage"
import DetailProduct from "./pages/DetailFilm"
import CreateMovie from "./pages/CreateMovie"
import  DefaultLayout from "./layout/DefaultLayout"
import  {BrowserRouter, Routes, Route,} from "react-router-dom"
import GlobalContext from "./contexts/globalContexts"
import { useState } from "react"


function App() {
  const [isLoading, setIsLoading] = useState(false)
  

  return (
    <>
    <GlobalContext.Provider value={{isLoading, setIsLoading}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="details/:id" element={<DetailProduct />} />
            <Route path="/movie/create" element={<CreateMovie/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </GlobalContext.Provider>
      
    </>
  )
}

export default App
