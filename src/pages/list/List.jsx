import "./list.css";

import { Navbar, Header, SearchItem } from "../../components";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
const List = () => {
  //state passed on navigate hook on header component
  const { state } = useLocation();

  const [destination, setDestination] = useState(state?.destination);
  const [date, setDate] = useState(state?.date);
  const [options, setOptions] = useState(state?.options);
  const [openDate, setOpenDate] = useState(false);

  console.log(options);

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
                date[0]?.startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0]?.endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
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
                  <input min={1} type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionsItem">
                  <span className="lsOptionText">
                    Max Price (<small>per night</small>){" "}
                  </span>
                  <input type="number" className="lsOptionInput" min={1} />
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
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
