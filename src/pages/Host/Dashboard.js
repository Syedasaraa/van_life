import React from "react"
import { Link, defer} from "react-router-dom"
import { getHostVans } from "../api"
import AuthRequired from "../../components/AuthRequired"
import { BsStarFill } from "react-icons/bs"

export async function loader({ request }) {
    await AuthRequired(request)
    return defer( { hostVans : getHostVans()})
}

export default function Dashboard() {

    return (
        <>
            <section >
                <div className="bg-[#ffead0] h-[200px] p-3">
                    <h1 className="font-bold text-[35px] mb-3">Welcome!</h1>
                    <div className="flex mb-3">
                    <p className="mr-auto"> Income last <span className="font-bold border-b-2 border-black">30 days</span></p>
                    <Link to="income" className="hover:border-b-2 border-gray-600"> Details</Link>
                    </div>
                    <h2 className="font-extrabold text-[35px]">$2,260</h2>
                </div>
            </section>
            <section className="bg-[#ffdaad] h-[150px] p-3 flex items-center gap-4">
                <h2 className="text-[35px] font-bold">Review score</h2>
                <BsStarFill  className="text-yellow-500" size={26}/>
                <div className="flex text-[20px]" >
                <p>
                    <span className="font-bold">5.0</span>/5
                </p>
                </div>
                <Link to="reviews" className=" ml-auto hover:border-b-2 border-gray-600">Details</Link>
            </section>
            <section >
                <div className="mt-4">
                    <Link to="vans" className="text-[20px] font-bold ">View Your Listed Vans</Link>
                </div>
            </section>
        </>
    )
}