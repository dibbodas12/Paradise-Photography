import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import Review from "../Review/Review";

const ServiceDetails = () => {
  const service = useLoaderData();

  return (
    <div>
      <div className="card card-compact mx-auto  bg-base-100 shadow-2xl my-6 rounded-lg border border-gray-600">
        <PhotoProvider>
          <PhotoView src={service.image}>
            <figure>
              <img src={service.image} alt="Shoes" />
            </figure>
          </PhotoView>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title font-bold">{service.name}</h2>
          <div className="flex justify-between text-primary">
            <p className="text-2xl font-semibold">Price : {service.price}</p>
          </div>
          <p>{service.description}</p>
        </div>
      </div>
      <>
        <Review></Review>
      </>
    </div>
  );
};

export default ServiceDetails;
