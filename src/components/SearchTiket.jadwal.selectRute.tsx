import { IRute } from "@/app/types/rute";
import { useContext, useState } from "react";
import { CustomModal } from "./CustomModal";
import { SearchTiketContext } from "./SearchTiket";
import { SelecrRuteModal } from "./SelectRuteModal";

export type IRuteType = 'departure' | 'back';
export const SelectRute = () => {
    const {
        startRoute,
        destinationRoute,
        setStartRoute,
        setDestinationRoute
    } = useContext(SearchTiketContext);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<IRuteType>('departure');

    const selectRute = (type: IRuteType) => {
        setModalType(type);
        setShowModal(true);
    }

    const selectDermaga = (dermaga: IRute) => {
        if(modalType == 'departure') {
            setStartRoute({ value: dermaga.id, label: dermaga.nama_dermaga, subtitle: dermaga.lokasi_dermaga });
            
        }
        if(modalType == 'back') {
            setDestinationRoute({ value: dermaga.id, label: dermaga.nama_dermaga, subtitle: dermaga.lokasi_dermaga });
        }
        setShowModal(false);
    }

    const switchDestination = () => {
        const start = {...startRoute}, end = {...destinationRoute};
        setStartRoute(end);
        setDestinationRoute(start);
        const element: any = document.querySelector('#switcher');
        element.classList.add('rotate');
        element.addEventListener('animationend', () => {
            element.classList.remove('rotate');
        });
    }

    return(
        <div className="w-full flex">
            <div onClick={()=>selectRute('departure')} className="rounded-[15px] bg-soft min-h-[120px] w-full p-6 sm:px-6 sm:pl-10 flex items-center hover:cursor-pointer">
                <div className="flex flex-col sm:w-[80%]">
                    <div className="text-slate-500 text-xs">FROM</div>
                    <div className="font-bold text-md">{startRoute.label}</div>
                    <div className="text-slate-500 text-sm">{startRoute.subtitle}</div>
                </div>
                <div className="flex w-[20%] h-full hidden sm:block">
                    <img src="/images/ship.png" className="w-[40px] h-[40px]"/>
                </div>
            </div>
            <div className="relative">
                <div id="switcher" onClick={switchDestination} className="rotateswitch absolute sm:top-[30px] top-[40px] left-[-25px] bg-soft h-[50px] w-[50px] sm:h-[70px] sm:w-[70px] rounded-[35px] flex items-center justify-center sm:border-[8px] border-[6px]  border-[white]">
                    <img src="/images/switch.png" className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"/>
                </div>
            </div>
            <div onClick={()=>selectRute('back')} className="rounded-[15px] bg-soft min-h-[120px] w-full ml-2 sm:ml-6 p-6 sm:px-6 sm:pl-10 flex items-center hover:cursor-pointer">
                <div className="flex flex-col sm:w-[80%]">
                    <div className="text-slate-500 text-xs">TO</div>
                    <div className="font-bold text-md">{destinationRoute.label}</div>
                    <div className="text-slate-500 text-sm">{destinationRoute.subtitle}</div>
                </div>
                <div className="flex w-[20%] h-full hidden sm:block">
                    <img src="/images/ship.png" className="w-[40px] h-[40px]"/>
                </div>
            </div>
            <CustomModal
                modalIsOpen={showModal}
                closeModal={()=>setShowModal(false)}
            >
                <SelecrRuteModal 
                    close={()=>setShowModal(false)}
                    type={modalType}
                    onSelect={selectDermaga}
                />
            </CustomModal>
        </div>
    );
}