import React from "react";
import "./Mac.css";

const miceProducts = [
  {
    id: 1,
    badge: "",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2E3",
    category: "Mouse",
    name: "Magic Mouse",
    desc: "Multi-Touch surface for smooth gestures and scrolling.",
    price: "₹7,900",
    sub: "Available in Silver",
  },
  {
    id: 2,
    badge: "New",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2D3",
    category: "Trackpad",
    name: "Magic Trackpad",
    desc: "Large edge-to-edge glass surface with Force Touch.",
    price: "₹11,900",
    sub: "Force Touch enabled",
  },
  {
    id: 3,
    badge: "",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMQ3",
    category: "Mouse",
    name: "Magic Mouse Black",
    desc: "Premium dark finish designed for modern workspaces.",
    price: "₹8,900",
    sub: "Space Black Edition",
  },
];

function Mice() {
  return (
    <section className="keyboard-section">
      <div className="section-top">
        <div>
          <h1>
            Mice <span>& Trackpads</span>
          </h1>
          <p>Precision devices built for Mac.</p>
        </div>

        <button className="view-btn">
          View All
        </button>
      </div>

      <div className="cards">
        {miceProducts.map((item) => (
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
                src={item.image}
                alt={item.name}
              />
            </div>

            <div className="content">
              <span className="product-type">
                {item.category}
              </span>

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

              <div className="bottom">
                <div>
                  <h4>{item.price}</h4>
                  <small>{item.sub}</small>
                </div>

                <button>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mice;