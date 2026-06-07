import React from "react";
import MacProtection1 from '../../../assets/MacAccessories/MacProtection1.png'
import MacProtection2 from '../../../assets/MacAccessories/MacProtection2.png'
import MacProtection3 from '../../../assets/MacAccessories/MacProtection3.png'


function Protection() {

  const protectionProducts = [
 {
  id: 1,
  badge: "",
  category: "Case",
  img: MacProtection1,
  name: "MOFT Carry Sleeve for 16” MacBook Pro",
  desc: "Slim protective sleeve with water-resistant lining and premium finish.",
  price: "₹5,899",
},
{
  id: 2,
  badge: "New",
  category: "Skin",
  img: MacProtection2,
  name: "Incase Edge Hardshell Case for 13″ MacBook Air",
  desc: "Lightweight snap-on case that protects without hiding your Mac.",
  price: "₹3,599",
  sub: "All MacBook models",
},
{
  id: 3,
  badge: "",
  category: "Bag",
  img: MacProtection3,
  name: "Herschel Anchor Sleeve for 15″ and 16″ Mac Laptops",
  desc: "Durable padded sleeve with a clean design and secure protection.",
  price: "₹3,990",
  sub: "Genuine leather",
},
];

  return (
    <section className="keyboard-section">

      {/* HEADER (standardized) */}
      <div className="section-top">
        <div>
          <h1>
            Mac <span>Protection</span>
          </h1>
          <p>Premium cases and sleeves built for durability.</p>
        </div>

        <button className="view-btn">View All</button>
      </div>

      {/* GRID (same system everywhere) */}
      <div className="cards">
        {protectionProducts.map((item) => (
          <div className="card" key={item.id}>

            {/* badge */}
            {item.badge && (
              <span className="badge">
                {item.badge}
              </span>
            )}

            {/* image placeholder */}
            <div className="image-box">
              <img src={item.img} alt={item.name} />
            </div>

            {/* content */}
            <div className="content">

              <span className="product-type">{item.category}</span>

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

              {/* footer */}
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

export default Protection;