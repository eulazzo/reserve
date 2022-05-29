import "./home.css";

import { Header, Navbar } from "../../components";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedHotels from "../../components/featuredHotels/FeaturedHotels";

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
      </div>
    </div>
  );
};

export default Home;
