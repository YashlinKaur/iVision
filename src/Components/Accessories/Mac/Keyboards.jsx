import React from "react";
import { GoPlus } from "react-icons/go";
import macKeyboard1 from "../../../assets/MacAccessories/MacKeyboard1.png";
import macKeyboard2 from "../../../assets/MacAccessories/MacKeyboard2.png";
// import macKeyboard3 from "../../../assets/MacAccessories/MacKeyboard3.png";

const keyboardProducts = [
  {
    id: 1,
    badge: "New",
    img: macKeyboard1,
    category: "Keyboard",
    name: "Magic Keyboard — White Keys",
    desc: "Clean, minimal design with smooth, quiet typing for everyday comfort.",
    price: "₹9,900",
    sub: "Free delivery",
    // colors: ["#f5f5f7", "#1d1d1f", "#e8d5c0"],
  },
  {
    id: 2,
    badge: "",
    img: macKeyboard2,
    category: "Keyboard",
    name: "Magic Keyboard — Black Keys",
    desc: "Dark finish with numeric keypad built for fast, efficient workflow.",
    price: "₹12,900",
    sub: "With Numeric Keypad",
    // colors: ["#1d1d1f", "#3a3a3c"],
  },
  // {
  //   id: 3,
  //   badge: "Sale",
  //   category: "Keyboard",
  //   name: "Magic Keyboard — Midnight",
  //   desc: "Deep rich color with anodized aluminum for elegant desks.",
  //   price: "₹8,499",
  //   sub: "Special Offer",
  //   // colors: ["#2c3d6b", "#1c2951"],
  // },
];

function Keyboards() {
  return (
    <section className="keyboard-section">
      <div className="section-top">
        <div>
          <h1>
            Mac <span>Keyboards</span>
          </h1>
          <p>Designed to work seamlessly with Mac.</p>
        </div>

        <button className="view-btn">View All</button>
      </div>

      <div className="cards">
        {keyboardProducts.map((item) => (
          <div className="card" key={item.id}>
            {item.badge && (
              <span
                className={`badge ${
                  item.badge === "Sale" ? "sale" : ""
                }`}
              >
                {item.badge}
              </span>
            )}

            <div className="image-box">
              <img
                width="280"
                height="160"
                viewBox="0 0 100 60"
                src={item.img}
                alt={item.name}
              />
            </div>

            <div className="content">
              <span className="product-type">
                {item.category}
              </span>

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

              {/* <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginBottom: "20px",
                }}
              >
                {item.colors.map((color, index) => (
                  <span
                    key={index}
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: color,
                      border: "1px solid #d2d2d7",
                    }}
                  />
                ))}
              </div> */}

              <div className="bottom">
                <div>
                  <h4>{item.price}</h4>
                  <small>{item.sub}</small>
                </div>

                <button>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Keyboards;