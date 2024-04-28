import './WHomepage.css';
import WNavbar from '../../../components/Website/Navbar/WNavbar';
import Hero from '../../../components/Website/Hero/Hero';
import Popular from '../../../components/Website/Popular/Popular';
import NewCollection from '../../../components/Website/NewCollection/NewCollection';
import Footer from '../../../components/Website/Footer/Footer';

export default function WHomepage() {
  return (
    <div> 
      <WNavbar/>
      <div>
        <Hero/>
        <Popular/>
        <NewCollection/>
        <Footer/>
      </div>
    </div>
  )
}
