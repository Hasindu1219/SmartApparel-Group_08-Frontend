import './WHomepage.css';
import WNavbar from '../../../components/Website/Navbar/WNavbar';
import Hero from '../../../components/Website/Hero/Hero';

export default function WHomepage() {
  return (
    <div> 
      <WNavbar/>
      <div>
        <Hero/>
      </div>
    </div>
  )
}
