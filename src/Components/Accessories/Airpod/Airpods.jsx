import React from "react";

const airpodsProducts = [
  {
    id: 1,
    badge: "",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509?wid=532&hei=582&fmt=png-alpha&.v=cmp4MmZ6OWxOeHNNTXh4SzlBNUpEb1RucE9zZTI5eEREaWZpY29lSld3eG5ybFVoUG5ONDlkK2JkbHErdVFSNVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFk1ZmVZeDNxQ3ljaDhwR2JKTTZHaDg",
    category: "AirPods",
    name: "AirPods Pro 3",
    desc: "Redesigned for a better fit. Personalized Spatial Audio and adaptive noise control built in.",
    price: "₹22,900",
    sub: "Active Noise Cancellation",
  },
  {
    id: 2,
    badge: "New",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-purple_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=azQxRkVJKzd6V3J0aGNqWFhLMzBmdEFZMGtjOXNTYXJEaHFYa1lFVzIyUnJHdFc3SWNOdWRSclF6WTRFc2h1eFJnYUxCQWt1UDJiRlJNZVhPYkVVc2hXdERnUW81QWI5aTlucjZuTWh1dnhzQVNZV1grZHBseDduSWhqSlA3QUE",
    category: "AirPods",
    name: "AirPods Pro 2 - Purple",
    desc: "Up to 2x more Active Noise Cancellation. Adaptive Audio. Hearing health features.",
    price: "₹51,900",
    sub: "MagSafe Charging Case",
  },
  {
    id: 3,
    badge: "",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-select-202409_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=WnVKRVRUTFVsYThXaWkydWViL1Q3ZDZGTE9TV3RDcGJJclBqdUtzdTJYYjNHc3NlSmU2dzJyR1kxZEwyTE1neUJkRlpCNVhYU3AwTldRQldlSnpRa0NZZXAxWFNjRXhITDI1RVE5YVpyU0E",
    category: "AirPods ",
    name: "AirPods 4",
    desc: "Over-ear headphones with high-fidelity audio, ANC, and Transparency mode.",
    price: "₹12,100",
    sub: "USB-C · 5 colours",
  },
];

function AirPods() {
  return (
    <section className="keyboard-section">
      <div className="section-top">
        <div>
          <h1>
            AirPods
          </h1>
          <p>Wireless audio, perfected by Apple.</p>
        </div>
        <button className="view-btn">View All</button>
      </div>

      <div className="cards">
        {airpodsProducts.map((item) => (
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

export default AirPods;