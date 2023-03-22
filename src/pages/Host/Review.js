import React from "react"
import { BsStarFill } from "react-icons/bs"

export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    
    return (
        <section className="host-reviews">
            <div className="flex gap-4">
                <h2 className="text-[30px] font-bold">Your reviews</h2>
                <p className="mt-3 text-[20px] text-gray-600">
                    Last <span className=" font-bold border-b-2">30 days</span>
                </p>
            </div>

            <h3 className="text-[20px] font-bold mt-3 mb-3">Reviews (2)</h3>
            {reviewsData.map((review) => (
                <div key={review.id} className="flex flex-col gap-4">
                    <div className="review">
                        <div className="flex gap-2">
                        {[...Array(review.rating)].map((_, i) => (
                            <BsStarFill className="text-yellow-400" key={i} />
                        ))}
                        </div>
                        <div className="flex gap-4">
                            <p className="font-bold">{review.name}</p>
                            <p className="text-gray-500">{review.date}</p>
                        </div>
                        <p>{review.text}</p>
                    </div>
                    <hr />
                </div>
            ))}
        </section>
    )
}
