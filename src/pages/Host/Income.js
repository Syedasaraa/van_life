import React from "react"

export default function Income() {
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
    return (
        <section >
            <h1 className="text-[45px] font-bold">Income</h1>
            <p className="text-gray-500 text-[20px] mb-4 mt-4">
                Last <span className="font-bold border-b-2">30 days</span>
            </p>
            <h2 className="text-[50px] font-extrabold mb-3">$2,260</h2>
            
            <div>
                <h3 className="text-[25px] font-semibold">Your transactions (3)</h3>

                <p className="text-gray-500 text-[20px] mb-4 mt-4">
                Last <span className="font-bold border-b-2">30 days</span>
            </p>
            </div>
            <div className="m-4">
                {transactionsData.map((item) => (
                    <div key={item.id} className=" bg-white flex  justify-around h-[100px] items-center m-4">
                        <h3 className="text-[40px] font-bold">${item.amount}</h3>
                        <p className="text-gray-400 text-[20px]">{item.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}