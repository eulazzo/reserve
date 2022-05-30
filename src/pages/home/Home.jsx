import "./home.css";

import {
  Header,
  Navbar,
  Featured,
  PropertyList,
  FeaturedHotels,
  MailList,
  Footer,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Brower by propertie type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedHotels />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
