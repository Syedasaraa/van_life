import React, { Suspense } from "react";
import { useLocation, Link , defer , Await , useLoaderData} from "react-router-dom";
import { getVan } from "../api";

export function loader ({params}) {
  return defer({ van : getVan(params.id)})
}
const VanDetail = () => {
  const vanPromise = useLoaderData()
  const location = useLocation();

  function details (van){
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
  
  return (<>
  <Suspense fallback={<h1 className="text-[30px] font-bold">Loading...</h1>}>
    <Await resolve ={vanPromise.van}>
      {details}
    </Await>
    </Suspense>
  </>)
};

export default VanDetail;
