import React from "react";
import "./feature.scss";

function Feature() {
  return (
    <section>
      <p className="header">Recommendation</p>
      <div className="recommendation">
        <div className="recommendation-product">
          <img className="recommendation-image1" />
          <p className="recommendation-name">Coco Loco</p>
          <p className="recommendation-desc">SHOWER OIL</p>
        </div>
        <div className="recommendation-product">
          <img className="recommendation-image2" />
          <p className="recommendation-name">Purity & Clarity</p>
          <p className="recommendation-desc">Massage Bar</p>
        </div>
        <div className="recommendation-product">
          <img className="recommendation-image3" />
          <p className="recommendation-name">Scrubee</p>
          <p className="recommendation-desc">Body Butter</p>
        </div>
      </div>
    </section>
  );
}

export default Feature;
