import AppRoutes from './routes/AppRoutes'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <AppRoutes />
      <Footer></Footer>
    </>
  )
}

export default App
