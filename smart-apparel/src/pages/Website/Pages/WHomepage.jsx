import React from 'react';
import {useNavigate } from 'react-router-dom';
import WNavbar from '../../../components/Website/Navbar/WNavbar';
import Hero from '../../../components/Website/Hero/Hero';
import Popular from '../../../components/Website/Popular/Popular';
import NewCollection from '../../../components/Website/NewCollection/NewCollection';
import Footer from '../../../components/Website/Footer/Footer';

export default function WHomepage() {
    const navigate = useNavigate();

  return (
    <div> 
      <WNavbar/>
      <div>
        <Hero/>
        <Popular/>
        <NewCollection/>
        <Footer/>

        {/* <div>
          <Link to="/Froks">Frocks</Link>
          <button onClick={() => navigate('/Froks')}></button>
        </div>
        <div>
          <Link to="/Skirts">Skirts</Link>
          <button onClick={() => navigate('/Skirts')}></button>
        </div>
        <div>
          <Link to="/Blouses">Blouses</Link>
          <button onClick={() => navigate('/Blouses')}></button>
        </div>
        <div>
          <Link to="/TShirts">T-Shirts</Link>
          <button onClick={() => navigate('/T-Shirts')}></button>
        </div> */}

      
      </div>
    </div>
  )
}
