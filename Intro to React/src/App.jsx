import './App.css'
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Catalog from './components/Catalog';
import Who from './components/Who';
import Projects from './components/Projects'
import Client from './components/Client';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import CopyRigth from './components/CopyRight';

function App() {

  return (
    <div>
     
      <Header />

      <Banner />

      <Services />

      <About />

      <Catalog />

      {/* <Who /> */}

      {/* <Projects /> */}

      <Client />

      <Contacts />

      <Footer />
      <CopyRigth />

    </div>

  )
}

export default App
