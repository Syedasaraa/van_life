import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { vanData } from "../../components/data";

const VanDetail = () => {
  const params = useParams();
  const location = useLocation();

  const details = vanData.map((van) => {
    if (van.id === params.id) {
      return (
        <div className="w-full " key={van.id}>
          <div className="w-[75%] lg:w-[35%] mx-auto mt-2">
            <Link
              className="font-bold text-gray-500 hover:border-b-2 w-[120px] "
              to={`..?${  location.state?.searchParam || "" }`}
              relative="path"
            >
              &larr; Back to {location.state?.type ? location.state.type :"all" } vans
            </Link>
            <img src={van.imageUrl} alt="van" className="mt-4"/>
            <div>
              <div>
                <div className="p-2 bg-[#E17654] w-[25%] text-center rounded text-white mt-2">
                  {van.type}
                </div>

                <h1 className="text-[30px] font-bold">{van.name}</h1>
                <p className="text-[25px] font-bold"> ${van.price}/day</p>
              </div>

              <p className="mb-4 mt-4">{van.description}</p>
            </div>
            <button className="p-2 bg-[#E17654] w-full text-white mb-3">
              Rent this van
            </button>
          </div>
        </div>
      );
    }
    return null;
  });
  
  return <div>{details}</div>;
};

export default VanDetail;
