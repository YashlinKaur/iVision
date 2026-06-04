import React from "react";
import "./Mac.css";

function Filter({ name, price, desc }) {
  return (
    <div className="filter-bar">
      <div className="filter-inner">
        <span className="filter-label">Filter:</span>
        <span className="filter-chip active" onClick={() => filterProducts('all', this)}>
          All
        </span>
        <span className="filter-chip" onClick={() => filterProducts('keyboard', this)}>
          Keyboards
        </span>
        <span className="filter-chip" onClick={() => filterProducts('mouse', this)}>
          Mice &amp; Trackpads
        </span>
        <span className="filter-chip" onClick={() => filterProducts('hub', this)}>
          Hubs &amp; Docks
        </span>
        <span className="filter-chip" onClick={() => filterProducts('display', this)}>
          Displays
        </span>
        <span className="filter-chip" onClick={() => filterProducts('audio', this)}>
          Audio
        </span>
        <span className="filter-chip" onClick={() => filterProducts('protection', this)}>
          Protection
        </span>
      </div>
    </div>
  );
}

export default Filter;
