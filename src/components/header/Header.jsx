import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            stays
          </div>
          <div className="headerListItem ">
            <FontAwesomeIcon icon={faPlane} />
            Flights
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            Car rentals
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            Attractions
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            Airport taxis
          </div>
        </div>

        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDescription">
          Get Rewarded for your travels - unlock instant savings of 10% or more
          with a free RESERVE account
        </p>
        <button className="headerBtn">Sign in/ Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
