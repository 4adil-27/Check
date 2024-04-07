import './App.css'
import Footer from './components/Footer'
import Mentorhub from './components/Mentorhub'
import { NavbarWithMegaMenu } from './components/NavbarWithMegaMenu'
import Reviwe from './components/Reviwe'



function App() {
  return (
    <div className="root" >
      <div className="App" >
        <div className="container mx-auto max-w-screen-x1 py4">
          <NavbarWithMegaMenu />
          <Mentorhub />
          <Reviwe />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App