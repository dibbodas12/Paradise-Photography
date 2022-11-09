import React from "react";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {
  console.log(service);
  const { name, image, price, description } = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-2xl rounded-lg border border-orange-600">
        <PhotoProvider>
        <figure className="px-4">
          <PhotoView src = {image}>
          <img className="" src={image} alt="Shoes" />
          </PhotoView>
        </figure>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <div className="flex justify-between text-primary">
            <p className="text-2xl font-semibold">Price : {price}</p>
          </div>
          <p>
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
