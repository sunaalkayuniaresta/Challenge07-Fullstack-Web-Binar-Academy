// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Faq from './components/Faq';
import Homepage from './components/Homepage';
import OurService from './components/OurService';
import RentBanner from './components/RentBanner';
import WhyUs from './components/WhyUs';
import Testimonial from './components/Testimonial';

function Home() {
    return (
        <div className="Home">
            <Navbar/>
            <Homepage/>
            <OurService/>
            <WhyUs/>
            <Testimonial/>
            <RentBanner/>
            <Faq/>
            <Footer/>
        </div>
    );
    }

export default Home;

// ps : want to use this credential but take long time to register it -_-
//392114532854-kl5krilp1o6ij2p45pec2btriq2bf534.apps.googleusercontent.com
