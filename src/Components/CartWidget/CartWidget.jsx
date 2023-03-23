import { BsFillCartCheckFill } from "react-icons/bs";
import "./CartWidget.css";

import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <div className="container-cart">
        <BsFillCartCheckFill
          style={{
            fontSize: "2rem",
            color: "black",
          }}
        />
        <div className="bubble-counter">
          <span>0</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
