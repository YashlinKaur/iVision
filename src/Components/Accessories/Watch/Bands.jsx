import React from "react";

const bandProducts = [
{
  id: 1,
  badge: "New",
  category: "Band",
  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MJ5C4_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=NVJHWUg1N3VicHYrcG9hS1hkK1h3MVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTZRTmF4SUlmbkFCWDV5eEcxVHZKVkE",
  name: "46mm Pride Edition Sport Loop",
  desc: "Soft woven nylon with a breathable design and hook-and-loop fastening for all-day comfort.",
  price: "₹3,900",
  sub: "Celebrating Pride • 42mm / 46mm"
},
{
  id: 2,
  badge: "Popular",
  category: "Band",
  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGJ44ref_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=TWFmSndnL0FYb2JrRTJxc0ZING5lbHFwc3MzeTdYYk93SEk5TXdaOTI1eStpNFY0WVMxUVlnblJXSGt4T2pKc3dkUDhhZFFXb2NUT0QwVFpjM2liQVE",
  name: "46mm Gold Milanese Loop - M/L",
  desc: "Elegant stainless steel mesh with a magnetic clasp for a refined and secure fit.",
  price: "₹9,100",
  sub: "Premium Stainless Steel • M/L"
},
{
  id: 3,
  badge: "",
  category: "Band",
  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGD64_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=aHF2NE5DYUE1cytDL2dHNGFZbUg0VlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUUJvT0VGVU96bXFGeE5Scy8rU0Y3VGc",
  name: "46mm Blue Ribbon Nike Sport Loop",
  desc: "Lightweight Nike-designed woven band with reflective threads and exceptional breathability.",
  price: "₹4,200",
  sub: "Nike Edition • Sport Ready"
},
{
  id: 4,
  badge: "",
  category: "Band",
  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MFM64ref_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=bytobm81NkhwRWRtN0pvUXNPdG5DRnFwc3MzeTdYYk93SEk5TXdaOTI1eStpNFY0WVMxUVlnblJXSGt4T2pKc3BXaE44K1RkNVppaUtXVjRRVTMyc0E",
  name: "46mm Green Gray Braided Solo Loop - Size 0",
  desc: "Stretchable recycled yarn construction with a seamless braided design and precise fit.",
  price: "₹8,800",
  sub: "Braided Design • Size 0"
},
{
  id: 5,
  badge: "",
  category: "Band",
  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYPD3ref_AV1_GEO_US?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=U3d4T3lzVnNpS1NtVWVUYkhOVVVQd0V6U1QxT1FyZnArS081L2gxb1JrZGQ0dVBuUCtqQitLVlQ4Z3JzZnd0bHpvQVBSTVNWTW1YOUxaNmxpbzFGQnBXenY3Z1g5VXZBYXl0R0hHdVp0b1E",
  name: "49mm Black Ocean Band - Black Titanium Finish",
  desc: "High-performance elastomer band engineered for water sports and extreme adventures.",
  price: "₹9,100",
  sub: "Black Titanium • Ultra Compatible"
},
{
  id: 6,
  badge: "Special",
  category: "Band",
  img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYGU3ref_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=QllzUlVUdDE5TzVFVWkyVlRaRmlBVnFwc3MzeTdYYk93SEk5TXdaOTI1eStpNFY0WVMxUVlnblJXSGt4T2pKc1NzOVAzUW5ML25vRzMzWkJvcFF2YlE",
  name: "42mm Black Unity Sport Band - Unity Bloom - S/M",
  desc: "Durable fluoroelastomer with a unique Unity Bloom design and comfortable everyday fit.",
  price: "₹4,500",
  sub: "Unity Bloom Edition • S/M"
}
];

function Bands() {
  return (
    <section className="keyboard-section">
      <div className="section-top">
        <div>
          <h1>
            Watch <span>Bands</span>
          </h1>
          <p>Change your look in seconds.</p>
        </div>
        <button className="view-btn">View All</button>
      </div>

      <div className="cards">
        {bandProducts.map((item) => (
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

export default Bands;