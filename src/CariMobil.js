import Filtering from './components/Filtering';
import Footer from './components/Footer';
import HasilFilter from './components/HasilFilter';
import Navbar from './components/Navbar';
import Faq from './components/Faq';
import Homepage from './components/Homepage';
import HomepagewithSearch from './components/HomepagewithSearch';
import OurService from './components/OurService';
import RentBanner from './components/RentBanner';
import WhyUs from './components/WhyUs';
import Testimonial from './components/Testimonial';


function CariMobil() {
    return (
        <div className="CariMobil">
            <Navbar/>
            <HomepagewithSearch/>
            <Filtering/>
            <Footer/>
        </div>
    );
    }

export default CariMobil;
