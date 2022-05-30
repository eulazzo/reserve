import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fListsWrapper">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
          <li className="fListItem"> Places of interest </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes</li>
          <li className="fListItem">Apartments</li>
          <li className="fListItem">Resorts</li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem"> Terms & conditions</li>
          <li className="fListItem"> Guest houses</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places to stay</li>
          <li className="fListItem"> All destinations</li>
          <li className="fListItem">Discover</li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Reviews Unpacked: Travel articles</li>
          <li className="fListItem">Travel communities</li>
          <li className="fListItem">Seasonal and holiday deals</li>
        </ul>

        <ul className="fList">
          <li className="fListItem">Coronavirus (COVID-19) FAQs</li>
          <li className="fListItem"> About Booking.com </li>
          <li className="fListItem">Customer Service Help</li>
          <li className="fListItem">Partner help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem"> Sustainability</li>
          <li className="fListItem">How We Work </li>
        </ul>
      </div>
      <span className="fText">
        {" "}
        &copy; {new Date().getFullYear()}. All Right Reserved - Made with
        &hearts; by &nbsp; @eulazzo
      </span>
    </div>
  );
};

export default Footer;
