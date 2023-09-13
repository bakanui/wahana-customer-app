import { useTiket } from "@/app/hooks/tiket.hooks";
import { IRute } from "@/app/types/rute";
import { createContext, useState } from "react";
import { Button } from "./Button";
import { CustomModal } from "./CustomModal";
import { Empty } from "./Empty";
import { Loading } from "./Loading";
import { SearchTiketHeader } from "./SearchTiket.header";
import { SearchTiketJadwal } from "./SearchTiket.jadwal";
import { TicketDetail } from "./TicketDetail";
import { TiketComponent } from "./TiketComponent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface ISearchTiketContext {
    tripType: 'one_way' | 'round';
    startRoute: { value: string; label: string, subtitle: string };
    destinationRoute: { value: string; label: string, subtitle: string };
    journeyDate: Date;
    returnDate: Date;
    passangers: number;
    setTripType: (trip: ISearchTiketContext['tripType'])=> void;
    setStartRoute: (dermaga: IRute) => void;
    setDestinationRute: (dermaga: IRute) => void;
}

export const SearchTiketContext = createContext<any>({
    tripType: 'one_way',
    startRoute: { value: '', label: '', subtitle: '' },
    destinationRoute: { value: '', label: '', subtitle: '' },
    journeyDate: new Date(),
    returnDate: new Date(),
    passangers: 1,
    setTripType: ()=> {},
    setStartRoute: ()=> {},
    setDestinationRute: ()=> {}
});

export const SearchTiket = () => {
    const provider = useTiket();
    const [showModal, setShowModal] = useState(false);

    const getJadwal = () => {
        const {
            setParams,
            startRoute,
            destinationRoute
        } = provider;
        if (!startRoute.value || !destinationRoute.value) {
            toast.error('Please select your origin pier and destination pier');
            return;
        }
        setParams({
            limit: 50,
            dermaga_asal: startRoute.value,
            dermaga_tujuan: destinationRoute.value,
            identifier: new Date().getTime()
        });
    }

    const showTicketDetail = (item: any) => {
        provider.setTicketdetail(item);
        setShowModal(true);
    }
    
    return(
        <SearchTiketContext.Provider value={provider}>
            <div className="w-full flex justify-center">
                <div className="bg-[white] sm:w-[75%] w-full min-h-[300px] mt-[-150px] rounded-[15px] drop-shadow-lg p-6">
                    <SearchTiketHeader />
                    <SearchTiketJadwal />
                    <div className="justify-center flex mt-6">
                        <Button 
                            title="Search Schedule"
                            onClick={getJadwal}
                            containerClass='w-full'
                        />
                    </div>
                </div>
            </div>
            {provider.loading ? 
                <Loading 
                    loading
                    title="Searching..."
                />
            :
            provider.data.length > 0 ? 
                <>
                    <div className="my-2 mt-8 ml-6 text-[18px] sm:text-[24px] font-bold">Search Result</div>
                    <div className="flex flex-col items-center justify-center px-6">
                        {provider.data.map((item: any)=> {
                            return(
                                <TiketComponent 
                                    item={item}
                                    onClick={()=>showTicketDetail(item)}
                                />
                            );
                        })}
                    </div>
                </>
            : 
                provider.params.dermaga_asal && provider.data.length == 0 ? 
                    <Empty 
                        title="No data found, or try another destination"
                    />
                : null
            }
            <CustomModal 
                modalIsOpen={showModal}
                closeModal={()=>setShowModal(false)}
            >
                <TicketDetail 
                    close={()=>setShowModal(false)}
                />
            </CustomModal>
            <ToastContainer />
        </SearchTiketContext.Provider>
    );
}