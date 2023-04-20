import React from "react";

export default function Card({ photo }) {
  return (
    <div className="col mb-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={photo}
          className="card-img-top"
          alt={photo}
        />
      </div>
    </div>
  );
}
