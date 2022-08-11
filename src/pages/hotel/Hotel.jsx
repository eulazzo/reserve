import "./hotel.css";
import { useContext, useState } from "react";
import { Footer, Header, MailList, Navbar, Reserve } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Hotel = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { id: hotelid } = useParams();
  const { dates, options } = useContext(SearchContext);
  const { data, loading } = useFetch(`/hotels/find/${hotelid}`);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    return Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  };

  const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate);

  const handleMove = (direction) => {
    let newSliderNumber;

    if (direction === "right")
      newSliderNumber = sliderIndex === 0 ? 5 : sliderIndex - 1;
    else newSliderNumber = sliderIndex === 5 ? 0 : sliderIndex + 1;

    setSliderIndex(newSliderNumber);
  };

  const handleClick = () => {
    if (user) setOpenModal(true);
    else navigate("/login");
  };

  console.log(data);
  return (
    <div>
      <Navbar />
      <Header type={"list"} />

      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="hotelContainer">
            {open && (
              <div className="slider">
                <FontAwesomeIcon
                  onClick={() => setOpen(false)}
                  className="close"
                  icon={faCircleXmark}
                />
                <FontAwesomeIcon
                  className="arrow"
                  onClick={() => handleMove("left")}
                  icon={faCircleArrowLeft}
                />
                <slider className="sliderWrapper">
                  <img
                    className="sliderImg"
                    src={
                      data?.photos[sliderIndex] ||
                      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1"
                    }
                    alt="hotel pic"
                  />
                </slider>
                <FontAwesomeIcon
                  className="arrow"
                  onClick={() => handleMove("right")}
                  icon={faCircleArrowRight}
                />
              </div>
            )}

            <div className="hotelWrapper">
              <button className="bookNow">Reserve or Book Now!</button>
              <h1 className="hotelTitle">{data.name}</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.address}</span>
              </div>
              <span className="hotelDistance">
                Excellent location - {data.distance} from center
              </span>
              <span className="hotelPriceHigtlight">
                Book a stay over ${data.cheapeatPrice} at this property and get
                a free airport taxi.
              </span>

              <div className="hotelImages">
                {data?.photos &&
                  data?.photos?.map((img, index) => (
                    <div key={index} className="hotelImgWrapper">
                      <img
                        onClick={() => {
                          setSliderIndex(index);
                          setOpen(true);
                        }}
                        src={
                          img ||
                          "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1"
                        }
                        alt="hotel-pic"
                        className="hotelImg"
                      />
                    </div>
                  ))}
              </div>

              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">{data.title}</h1>
                  <p className="hotelDesc">{data.desc}</p>
                </div>
                <div className="hotelDetailsPrice">
                  <h1>Perfect for a {days}-night stay!</h1>
                  <span>
                    Located in the real heart of Krakow, this property has an
                    excellent location score of 9.8!
                  </span>
                  <h2>
                    <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                    nights)
                  </h2>
                  <button onClick={handleClick}>Reserve or Book Now!</button>
                </div>
              </div>
            </div>

            <MailList />
            <Footer />
          </div>
        </>
      )}
      {openModal && <Reserve setOpen={setOpen} hotelId={hotelid} />}
    </div>
  );
};

export default Hotel;
