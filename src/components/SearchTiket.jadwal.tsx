import { useContext } from "react";
import { SearchTiketContext } from "./SearchTiket";
import { SelectTripDate } from "./SearchTiket.jadwal.selectDate";
import { SelectRute } from "./SearchTiket.jadwal.selectRute";
import { SetTraveler } from "./SearchTiket.jadwal.setTraveler";

export const SearchTiketJadwal = () => {
    return(
        <div className="mt-4">
            <div className="flex flex-col sm:flex-row items-center">
                <SelectRute />
                <SelectTripDate/>
                <SetTraveler/>
            </div>
        </div>
    );
}