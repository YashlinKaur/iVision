import React from "react";
import MacMice1 from '../../../assets/MacAccessories/MacMice1.png'
import MacMice2 from '../../../assets/MacAccessories/MacMice2.png'
import MacMice3 from '../../../assets/MacAccessories/MacMice3.png'

const miceProducts = [
{
  id: 1,
  badge: "",
  image: MacMice1,
  category: "Mouse",
  name: "Magic Mouse - Black",
  desc: "Multi-Touch surface for smooth and precise navigation.",
  price: "₹7,900",
  sub: "Available in Silver",
},
{
  id: 2,
  badge: "New",
  image: MacMice2,
  category: "Trackpad",
  name: "Magic Trackpad",
  desc: "Expansive glass surface with intuitive gestures and Force Touch.",
  price: "₹11,900",
  sub: "Force Touch enabled",
},
{
  id: 3,
  badge: "",
  image: MacMice3,
  category: "Mouse",
  name: "Magic Mouse - White",
  desc: "Elegant design with seamless Multi-Touch gestures.",
  price: "₹8,900",
  sub: "Available in Black",
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

                <button>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mice;