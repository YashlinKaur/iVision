import React, { useState } from "react";
import "./Store.css";

const macbooks = [
  {
    id: 1,
    name: "MacBook Air 13-inch (M4, 2025)",
    desc: "Latest ultra-portable MacBook with M4 chip and Apple Intelligence.",
    price: "₹99,900",
    img: "https://i.pinimg.com/1200x/25/c3/a8/25c3a8ec425f78fbd8383d2e6ebd62bd.jpg"
  },
  {
    id: 2,
    name: "MacBook Air 15-inch (M4, 2025)",
    desc: "Large display, M4 performance, and all-day battery life.",
    price: "₹124,900",
    img: "https://i.pinimg.com/1200x/bd/16/0c/bd160c8a571eecfa20b58612d424d06c.jpg"
  },
  {
    id: 3,
    name: "MacBook Pro 14-inch (M4)",
    desc: "Professional laptop with Liquid Retina XDR display.",
    price: "₹169,900",
    img: "https://i.pinimg.com/1200x/97/43/0a/97430af9b634bcacc08bbb74623e0530.jpg"
  },
  {
    id: 4,
    name: "MacBook Pro 14-inch (M4 Pro)",
    desc: "Advanced performance for developers and creators.",
    price: "₹199,900",
    img: "https://i.pinimg.com/736x/40/b0/0b/40b00b6b7da3f8d94b53bd6ce8a44c15.jpg"
  },
  {
    id: 5,
    name: "MacBook Pro 14-inch (M4 Max)",
    desc: "Extreme power for 3D rendering and AI workloads.",
    price: "₹319,900",
    img: "https://i.pinimg.com/1200x/18/30/7d/18307dfde0f655618d822607bda8c931.jpg"
  },
  {
    id: 6,
    name: "MacBook Pro 16-inch (M4 Pro)",
    desc: "Large display with workstation-class performance.",
    price: "₹249,900",
    img: "https://i.pinimg.com/1200x/cc/38/48/cc3848a2541c91ecb971f757d2db10ba.jpg"
  },
  {
    id: 7,
    name: "MacBook Pro 16-inch (M4 Max)",
    desc: "The most powerful MacBook for demanding professionals.",
    price: "₹349,900",
    img: "https://i.pinimg.com/736x/a4/3d/6b/a43d6bb07745fed56ade51d339bce957.jpg"
  },
  {
    id: 8,
    name: "MacBook Air 13-inch (M3)",
    desc: "Lightweight design with excellent performance and efficiency.",
    price: "₹114,900",
    img: "https://i.pinimg.com/736x/39/6b/90/396b909423ab6e4f265bdd0e78f75b87.jpg"
  },
  {
    id: 9,
    name: "MacBook Air 15-inch (M3)",
    desc: "Extra screen space with Apple's M3 chip.",
    price: "₹134,900",
    img: "https://i.pinimg.com/1200x/a5/7a/ea/a57aea9092201d182cdf2e24d63a91c0.jpg"
  },
  {
    id: 10,
    name: "MacBook Pro 14-inch (M3 Pro)",
    desc: "Powerful laptop for coding, editing, and design.",
    price: "₹199,900",
    img: "https://i.pinimg.com/736x/28/54/d7/2854d79af2e0f15c702f1b6b4a53d1d9.jpg"
  },
  {
    id: 11,
    name: "MacBook Pro 16-inch (M3 Max)",
    desc: "Desktop-class performance in a portable design.",
    price: "₹329,900",
    img: "https://i.pinimg.com/736x/76/43/96/764396d55e7b3d5d43f4778a7d8cc082.jpg"
  },
  {
    id: 12,
    name: "MacBook Air 13-inch (M2)",
    desc: "Redesigned MacBook Air with MagSafe charging.",
    price: "₹99,900",
    img: "https://i.pinimg.com/736x/b4/05/49/b40549bbe5c0f8ae086109553f49988d.jpg"
  },
  {
    id: 13,
    name: "MacBook Air 15-inch (M2)",
    desc: "Thin and light with a larger 15-inch display.",
    price: "₹124,900",
    img: "https://i.pinimg.com/1200x/18/30/7d/18307dfde0f655618d822607bda8c931.jpg"
  },
  {
    id: 14,
    name: "MacBook Pro 13-inch (M2)",
    desc: "Classic MacBook Pro design powered by Apple Silicon.",
    price: "₹129,900",
    img: "https://i.pinimg.com/736x/09/f1/11/09f11130cd19c14f1dc5916a96366529.jpg"
  },
  {
    id: 15,
    name: "MacBook Air (M1)",
    desc: "The legendary Apple Silicon laptop that changed everything.",
    price: "₹79,900",
    img: "https://i.pinimg.com/736x/da/c3/55/dac355181106bb20cca1a7440c21f4b0.jpg"
  }
];

function AddToCartButton({ onAdd }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
    onAdd();

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <button
      className={`cart-btn${added ? " added" : ""}`}
      onClick={handleClick}
    >
      {added ? "✓ Added" : "Add to Cart"}
    </button>
  );
}

export default function MacBookSection() {
  const [cart, setCart] = useState([]);

  return (
    <div className="store-wrapper">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Power Meets Portability</p>

          <h1 className="hero-title">
            MacBook<span>.</span>
          </h1>

          <p className="hero-sub">
            Incredible performance, stunning displays, and all-day battery
            life. Discover the MacBook that's right for you.
          </p>
        </div>
      </section>

      <section className="iphone-section">
        <div className="section-heading">
          <h2>All Models</h2>
        </div>

        <div className="iphone-grid">
          {macbooks.map((item) => (
            <div key={item.id} className="iphone-card">
              <div className="iphone-image-box">
                <img
                  src={item.img}
                  alt={item.name}
                  className="iphone-image"
                />
              </div>

              <div className="iphone-info">
                <h3 className="iphone-name">{item.name}</h3>

                <p className="iphone-desc">{item.desc}</p>

                <div className="iphone-bottom">
                  <span className="iphone-price">{item.price}</span>

                  <AddToCartButton
                    onAdd={() => setCart([...cart, item.id])}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}