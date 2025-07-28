import React from "react";
import { SchoolCard } from "../data/interface/index";

interface Props {
  school: SchoolCard;
}

const SchoolCardComponent: React.FC<Props> = ({ school }) => {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        {school.badge && (
          <span className="badge bg-warning position-absolute m-2">{school.badge}</span>
        )}
        <img src={school.image} alt={school.name} className="card-img-top" style={{ height: "150px", objectFit: "contain" }} />
        <div className="card-body">
          <div className="mb-2">
            <span className="badge bg-primary me-2">{school.board}</span>
            <span className="badge bg-secondary">{school.type}</span>
          </div>
          <h6 className="card-title">{school.name}</h6>
          <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>{school.address}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="text-warning">{"★".repeat(school.rating)}</span>
              <span className="text-muted ms-1" style={{ fontSize: "0.85rem" }}>
                ({school.rating})
              </span>
            </div>
            {/* <span className="text-success" style={{ fontSize: "0.85rem" }}>
              {school.views} Views
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolCardComponent;
