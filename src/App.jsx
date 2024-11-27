import {
  CustomerReview,
  Footer,
  Hero,
  Popularproducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from './sections/index.js';
import Nav from './components/Nav.jsx';

// import Hero from './sections/Hero.jsx';
// import Popularproducts from './sections/Popularproducts.jsx';
// import SuperQuality from './sections/SuperQuality.jsx';
// import Services from './sections/Services.jsx';
// import SpecialOffer from './sections/SpecialOffer.jsx';
// import CustomerReview from './sections/CustomerReview.jsx';
// import Subscribe from './sections/Subscribe.jsx';
// import Footer from './sections/Footer.jsx';


function App() {
  return (
    <main className="relative">
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
       <Hero />
        <section className="padding">
         <Popularproducts />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        {/* <section className="padding">
         <SpecialOffer />
        </section> */}
        <section className="bg-pale-blue padding">
          <CustomerReview />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </section>
    </main>
  );
}
export default App;