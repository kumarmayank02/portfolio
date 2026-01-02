import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import { Home } from "./pages/Home"
import { Notfound } from "./pages/Notfound"
import { Toaster } from "@/components/ui/toaster"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

