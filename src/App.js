// import logo from './logo.svg';
// import './App.css';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Gallery from './component/Gallery';
import Middle from './component/Middle';
import Nav from './component/Nav';
import Testimonials from './component/Testimonials';

function App() {
  return (
    <>
      <Nav/>
      <Middle/>
      <Testimonials/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
