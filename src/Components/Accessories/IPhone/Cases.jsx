import React from "react";

const caseProducts = [
  {
    id: 1,
    badge: "New",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGF44?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=cHdSemp2YjhYekRJcDdKSXlDWDBYUWtuVHYzMERCZURia3c5SzJFOTlPZ3JTRTZ5Yi94UDBnUUhiU2ZvQ2ZITjVPa2c3TjVoZUpzc083SWlOWlMxV2c",
    category: "Case",
    name: "iPhone 17 Pro TechWoven Case with MagSafe – Blue",
    desc: "Premium woven finish with built-in MagSafe magnets for effortless attachment.",
    price: "₹5,100",
    sub: "MagSafe compatible",
  },
  {
    id: 2,
    badge: "Best Seller",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MHWF4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=SThybUxoS1N1VXhJVUZWTFBISDNjQWtuVHYzMERCZURia3c5SzJFOTlPaWk0MUtKM1cwZkI0WFZOa2NIRHpiRHN3aTBtVDJQdkJsek9DWVVsUkNZR0E",
    category: "Case",
    name: "iPhone 17e Silicone Case with MagSafe – Light Moss",
    desc: "Soft-touch silicone exterior with microfiber lining for everyday protection.",
    price: "₹4,300",
    sub: "MagSafe compatible"
  },
  {
    id: 3,
    badge: "",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HSGB2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=NVVDRC85QzVYYW95bGtmUk5YcTliQWtuVHYzMERCZURia3c5SzJFOTlPakNpaTMzRWlORGJoUWJ0cmszMXhJV0E5a2E2d3NzNy9FRUgzd0Qrem5GQkE",
    category: "Case",
    name: "Tech21 FlexQuartz Case for iPhone Air (MagSafe compatible)",
    desc: "Crystal-clear design with advanced impact protection and MagSafe support.",
    price: "₹4,9",
    sub: "Drop protection up to 2m"
  },
];

function Cases() {
  return (
    <section className="keyboard-section">
      <div className="section-top">
        <div>
          <h1>
            iPhone <span>Cases</span>
          </h1>
          <p>Protection that looks as good as your iPhone.</p>
        </div>
        <button className="view-btn">View All</button>
      </div>

      <div className="cards">
        {caseProducts.map((item) => (
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

export default Cases;