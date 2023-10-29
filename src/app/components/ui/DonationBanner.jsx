'use client';
import { createContext, useState } from "react";

export const DonationContext = createContext(null);

const DonationBanner = () => {
    const [display, setDisplay] = useState(false);

    return (
        <DonationContext.Provider value={{ display, setDisplay }}>
            {true ? (
                <div className="w-fit flex flex-col justify-start h-screen items-start gap-y-10">
                    <div className={`text-3xl bg-white border-b border-l-4 border-l-green-500 px-20 py-12 rounded-md text-black flex justify-center items-center w-fit shadow-md font-medium`}>
                        Dais mendonet <span className="text-green-500 ml-3 font-bold">15.000</span>
                    </div>
                    <div className="max-w-full w-full flex justify-center items-center">
                        <p className="text-3xl w-full grid place-items-center text-white text-center -translate-x-1 truncate">
                            Semangat bang
                        </p>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </DonationContext.Provider>
    )
}

export default DonationBanner