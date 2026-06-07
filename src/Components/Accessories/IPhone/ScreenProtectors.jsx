import React from "react";

const screenProducts = [
  {
    id: 1,
    badge: "Popular",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HS832?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=eUt3Q2dRUkVlSHR5cnhxQ0dZMlovd2tuVHYzMERCZURia3c5SzJFOTlPakQwdWYxSVdGMXZFVkRVMWhEbUpuektFalJOYVN4cUZ5akdJdWxlbllOZWc",
    category: "Screen Protector",
    name: "Belkin UltraGlass 2 Screen Protector for iPhone 17 Pro",
    desc: "Premium tempered glass protection with exceptional scratch resistance.",
    price: "₹3,499",
    sub: "UltraGlass 2 technology"
  },
  {
    id: 2,
    badge: "",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HSE62?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cnIzUXdCWFY0dG0zeFIwYkNzQnpad2tuVHYzMERCZURia3c5SzJFOTlPaUE2dU56UmhTZGpIbzRENkZzV2M2d0JaWHdkZVhjZEJ6QzRwRlc4SkFsaEE",
    category: "Screen Protector",
    name: "Belkin UltraGlass 2 Privacy Screen Protector for iPhone Air",
    desc: "Keeps your screen visible only to you while protecting against scratches.",
    price: "₹4,199",
    sub: "Privacy protection"
  },
];

function ScreenProtectors() {
  return (
    <section className="keyboard-section">
      <div className="section-top">
        <div>
          <h1>
            Screen <span>Protectors</span>
          </h1>
          <p>Keep your display scratch-free and crystal clear.</p>
        </div>
        <button className="view-btn">View All</button>
      </div>

      <div className="cards">
        {screenProducts.map((item) => (
          <div className="card" key={item.id}>
            {item.badge && (
              <span className={`badge ${item.badge === "Sale" ? "sale" : ""}`}>
                {item.badge}
              </span>
            )}

            <div className="image-box">
              <img src={item.img} alt={item.name} />
            </div>

            <div className="content">
              <span className="product-type">{item.category}</span>
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

export default ScreenProtectors;