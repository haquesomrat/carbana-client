import { Link } from "react-router-dom";
import "./Product.css";
import PropTypes from "prop-types";

const Product = ({ car }) => {
  const { _id, title, price, fuel, transmission, image } = car;
  return (
    <div>
      <div className="card grid bg-base-300 shadow-xl duration-1000 ">
        <figure className="aspect-video">
          <img className="duration-1000" src={image} alt={title} />
        </figure>
        <div className="card-body p-4 duration-1000">
          <p className="line-clamp-2 font-medium">{title}</p>
          <h2 className="text-2xl font-bold">€ {price}</h2>
          <div className="flex gap-2 text-primary">
            {transmission !== "Select" ? (
              <div className="badge badge-outline text-sm">{transmission}</div>
            ) : (
              ""
            )}
            {fuel !== "Select" ? (
              <div className="badge badge-outline">{fuel}</div>
            ) : (
              ""
            )}
          </div>
          <div className="divider my-0"></div>
          <div className="card-actions justify-between items-center">
            <Link to={`/productdetails/${_id}`}>
              <button className="btn btn-sm rounded-full bg-primary/90 text-white hover:bg-primary">
                Details
              </button>
            </Link>
            <Link to={`/updateproduct/${_id}`}>
              <button className="btn btn-sm rounded-full bg-primary/90 text-white hover:bg-primary">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  car: PropTypes.object,
};
