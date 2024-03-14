import '../public/assets/css/App.css'
import Navbar from "@/components/Navbar.tsx";
import Hero from "@/components/Hero.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomeView, SignInView, ModelsRepoView} from "@/views/index.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />}/>
          <Route path="/signin" element={<SignInView />}/>
          <Route path="/models" element={<ModelsRepoView />}/>
          <Route path="/download" element={<Hero />}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
