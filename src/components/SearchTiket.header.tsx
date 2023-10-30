import { useContext } from "react";
import { Radio } from "./Radio";
import { SearchTiketContext } from "./SearchTiket";

export const SearchTiketHeader = () => {
    const {
        tripType,
        setTripType
    } = useContext(SearchTiketContext);
    
    return(
        <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex w-full sm:w-[200px] items-center justify-center border-2 border-secondary rounded-full p-2 px-8 hover:cursor-pointer">
                <img src="/images/ship.png" className="w-[20px] h-[20px]"/>
                <span className="font-medium ml-2 text-slate-400">Ship Ticket</span>
            </div>
            <div className="flex font-medium mt-4 text-slate-500">
                <Radio 
                    selected={tripType == 'one_way'}
                    text="One-Way"
                    onClick={()=> setTripType('one_way')}
                />
                <span className="ml-6"/>
                <Radio 
                    selected={tripType == 'round'}
                    text="Round-Trip"
                    onClick={()=> setTripType('round')}
                />
            </div>
        </div>
    );
}