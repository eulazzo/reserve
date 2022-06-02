import "./list.css";

import { Navbar, Header, SearchItem } from "../../components";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import useFetch from "../../hooks/useFetch";

const List = () => {
  //state passed on navigate hook on header component
  const { state } = useLocation();

  const [destination] = useState(state?.destination);
  const [dates, setDates] = useState(state?.dates);
  const [options] = useState(state?.options);
  const [openDate, setOpenDate] = useState(false);

  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);

  const URI_ENPOINT = `/hotels?city=${destination}&min=${min || 0}&max=${
    max || 2999
  }`;
  const { data, loading, reFetch } = useFetch(URI_ENPOINT);

  const handleClick = () => {
    reFetch(`/hotels?city=${destination}&min=${min || 0}&max=${max || 0}`);
  };

  return (
    <div>
      <Navbar />
      <Header type={"list"} />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0]?.startDate,
                "MM/dd/yyyy"
              )} to ${format(dates[0]?.endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionsItem">
                  <span className="lsOptionText">
                    Min Price (<small>per night</small>){" "}
                  </span>
                  <input
                    onChange={(e) => {
                      setMin(e.target.value);
                    }}
                    min={1}
                    type="number"
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptionText">
                    Max Price (<small>per night</small>){" "}
                  </span>
                  <input
                    onChange={(e) => {
                      setMax(e.target.value);
                    }}
                    type="number"
                    className="lsOptionInput"
                    min={1}
                  />
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptionText">Adults</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.childreen}
                    min={0}
                  />
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className="listResult">
            {!loading &&
              data.map((place) => <SearchItem item={place} key={place._id} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
