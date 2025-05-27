import React from "react";

const Card = ({ title, image, description, myStyle }) => {
  return (
    <div className={`blog-content-card bg-gray-200 rounded-md ${myStyle}`}>
      {image && <img src={image} alt="Blog Image" className="rounded-md" />}

      <div className="py-5 space-y-1">
        {title && <h4 className="text-lg font-semibold">{title}</h4>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Card;
