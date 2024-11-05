import { Helmet } from 'react-helmet';
import './components/navbar';
import './components/services';
import Navbar from './components/navbar';
import Services from './components/services';
import Projects from './components/projects';
import Maps from './components/map';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Helmet>
        <html lang="ar" dir="rtl" />
      </Helmet>
      <div>
        <Navbar />
        <Services />
        <Projects />
        <Maps />
        <Footer />
      </div>

    </>
  );
}

export default App;
