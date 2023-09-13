import { useRute } from "@/app/hooks/rute.hook";
import { IRute } from "@/app/types/rute";
import { CloseIcon } from "@/assets/images/CloseIcon";
import { useContext, useEffect } from "react";
import { Loading } from "./Loading";
import { SearchTiketContext } from "./SearchTiket";
import { IRuteType } from "./SearchTiket.jadwal.selectRute";

interface ISelecrRuteModalProps {
    close: ()=> void;
    type: IRuteType;
    onSelect: (dermaga: IRute) => void;
}
export const SelecrRuteModal = (props: ISelecrRuteModalProps) => {
    const {startRoute, destinationRoute} = useContext(SearchTiketContext);
    const [ruteParams, setRuteParams, rute, loading] = useRute();
    
    useEffect(()=> {
        getRute();
    },[]);

    const getRute = () => {
        const tmpParams = {
            limit: 100,
            status: 1
        };
        setRuteParams(tmpParams);
    }

    return(
        <div className="w-[80vw] h-[60vh]">
            <div className="flex justify-between items-center mb-8">
                <div className="font-bold text-md">Select {props.type == 'departure' ? 'Departure' : 'Back'}</div>
                <div onClick={props.close}>
                    <CloseIcon size="30px"/>
                </div>
            </div>
            {loading ? 
                <Loading 
                    loading
                    title="Memuat Rute"
                />
            : 
                <>
                    {rute.map((item: IRute)=> {
                        if (props.type == 'departure' && item.id != destinationRoute.value) {
                            return(
                                <div key={item.id} onClick={()=> props.onSelect(item)} className="bg-soft p-3 rounded-[10px] my-2 hover:cursor-pointer">
                                    <div className="font-bold text-md">{item.nama_dermaga}</div>
                                    <div className="text-slate-500 text-sm">{item.lokasi_dermaga}</div>
                                </div>
                            );
                        }
                        if (props.type == 'back' && item.id != startRoute.value) {
                            return(
                                <div key={item.id} onClick={()=> props.onSelect(item)} className="bg-soft p-3 rounded-[10px] my-2 hover:cursor-pointer">
                                    <div className="font-bold text-md">{item.nama_dermaga}</div>
                                    <div className="text-slate-500 text-sm">{item.lokasi_dermaga}</div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </>
            }
        </div>
    );
}