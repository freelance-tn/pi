"use client"
import Marquee from "react-fast-marquee";
import { crypto } from "@/components/_const/cryptoData";
import { MoveDown, MoveUp } from "lucide-react";

const FixedBar = () => {

    return (
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center space-x-1 bg-gray-300 p-2 shadow-2xl">
            <Marquee pauseOnHover className="">
                {crypto.map((coin) => (
                    <div className="flex items-center justify-center space-x-1" key={coin.name}>
                        <img
                            src={`https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
                            alt={coin.name}
                           
                            className="w-6 h-6 rounded-full ml-6"
                        />
                        <p className="flex items-center justify-center flex-row text-sm font-semibold text-gray-900 ml-6">
                            <span className="text-sm font-medium mr-1">{coin.name}</span>
                            <span className="text-xs mr-2">({coin.symbol})</span>
                            <span className="text-xs font-light">{coin.value}</span>
                            <span>
                                {parseInt(coin.percentage) > 0 ? (
                                    <div className="flex flex-row items-center justify-center">
                                        <MoveUp className="text-green-500 h-4 w-6" />
                                        <span>{coin.percentage}</span>
                                    </div>
                                ) : (
                                    <div className="flex flex-row items-center justify-center">
                                        <MoveDown className="text-red-900 h-4 w-6" />
                                        <span>{coin.percentage}</span>
                                    </div>
                                )}
                            </span>
                        </p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default FixedBar;
