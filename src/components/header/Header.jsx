import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

import {
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

import { DateRange } from "react-date-range";
import { useContext, useRef, useState } from "react";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const destination = useRef(null);
  const [openOptions, setOpenOptions] = useState(false);
  const navigate = useNavigate();
  const [options, setOptions] = useState({
    adult: 1,
    childreen: 0,
    room: 1,
  });
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "decrease" ? options[name] - 1 : options[name] + 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", {
      state: { destination: destination.current.value, dates, options },
    });
  };

  return (
    <header className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
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

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDescription">
              Get Rewarded for your travels - unlock instant savings of 10% or
              more with a free RESERVE account
            </p>
            <button className="headerBtn">Sign in/ Sign Up</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  ref={destination}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />

                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "mm/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "mm/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    className="date"
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenOptions(!openOptions)}
                >
                  {options.adult} adults - {options.childreen} childreen -
                  {options.room} room
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionsItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "decrease")}
                          disabled={options.adult <= 1}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.childreen <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("childreen", "decrease")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.childreen}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("childreen", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionsItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "decrease")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn searchBtn " onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
