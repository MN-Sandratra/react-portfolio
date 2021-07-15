import '@fortawesome/fontawesome-free/css/all.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap';



import NavBar from './components/NavBar';
import Resume from './components/Resume';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <About/>
      <Resume></Resume>
      <Work></Work>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
