import useFetch from "../../hooks/useFetch";
import "./featuredHotels.css";

const FeaturedHotels = () => {
  const { data, loading } = useFetch("/hotels?featured=true&limit=4");
  return (
    <div className="fh">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data &&
            data.map((item) => (
              <div className="fhItem" key={item?._id}>
                <img
                  src={
                    item?.photos[0] ||
                    "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                  }
                  alt=""
                  className="fhImg"
                />
                <span className="fhName">{item?.name}</span>
                <span className="fhCity">{item?.city}</span>
                <span className="fhPrice">
                  Starting from ${item?.cheapestPrice}
                </span>
                {item?.rating && (
                  <div className="fhRating">
                    <button>{item?.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default FeaturedHotels;
