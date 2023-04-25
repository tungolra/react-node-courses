import { useNavigate, useLocation } from "react-router-dom";
import React from "react";

export default function Card({ path, title, createdAt, user, id }) {
  const navigate = useNavigate();
  const timestamp = React.useMemo(() => {
    const date = new Date(createdAt?.seconds * 1000);
    return date.toLocaleDateString();
  }, []);

  const handleClick = () => {
    navigate(`/images/${id}`, { state: { id }});
   } 
  return (
    <div className="col mb-5" onClick={handleClick}>
      <div className="card" style={{ width: "18rem" }}>
        <div
          style={{
            height: "220px",
            backgroundImage: `url(${path})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <h5 className="text-center">{title}</h5>
        <div className="d-flex justify-content-between px-2">
          <p className="text-center ">{timestamp}</p>
          <i>@{user}</i>
        </div>
      </div>
    </div>
  );
}
