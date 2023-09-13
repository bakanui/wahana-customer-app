import { ArrowRight } from "@/assets/images/ArrowRight";
import { ClockIcon } from "@/assets/images/ClockIcon";
import { PassangerIcon } from "@/assets/images/PassangerIcon";
import { ShipIcon } from "@/assets/images/ShipIcon";

interface ITiketComponentProps {
    item: any;
    onClick: () => void;
}
export const TiketComponent = (props: ITiketComponentProps) => {
    return(
        <div onClick={props.onClick} className={`w-full bg-white shadow-md rounded-xl sm:hover:scale-[1.05] transform-gpu cursor-pointer duration-200 mb-6`}>
            <img src={'/images/tiket/product-1.png'} className='w-full h-[160px] bg-no-repeat object-cover rounded-t-[14px]'/>
            <div className="bg-orange h-[40px] w-full text-md text-white font-robotomedium flex items-center justify-center">
                <ClockIcon size="24px" fill="#fff"/>
                <span className="ml-2">{props.item.waktu_berangkat} WITA</span>
            </div>
            <div className="p-4">
                <div className="flex flex-row">
                    <div className="flex flex-col w-full pr-2">
                        <span className="text-sm text-slate-500">From</span>
                        <div className="text-md font-robotomedium">{props.item.dermaga_awal}</div>
                    </div>
                    <div className="w-[35px]">
                        <div className="h-[30px] w-[30px] rounded-full flex items-center justify-center bg-primary text-white">
                            <ArrowRight size="20px" fill="#fff"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-full pl-4">
                        <span className="text-sm text-slate-500">To</span>
                        <div className="text-md font-robotomedium">{props.item.dermaga_tujuan}</div>
                    </div>
                </div>
                <hr className="my-2"/>
                <div className="flex justify-between">
                    <div className="flex mt-2">
                        <div className="h-[30px] w-[30px] flex justify-center items-center rounded-full">
                        <ShipIcon />
                        </div>
                        <div className="ml-3">
                            <div className="text-sm text-slate-500">Ship</div>
                            <div className="text-md font-robotomedium">{props.item.nama_kapal}</div>
                        </div>
                    </div>
                    <div className="flex mt-2 justify-between">
                        <div className="flex">
                            <div className="h-[30px] w-[30px] flex justify-center items-center rounded-full">
                            <PassangerIcon />
                            </div>
                            <div className="ml-3">
                                <div className="text-sm text-slate-500">Capacity</div>
                                <div className="text-md font-robotomedium">{props.item.kapasitas_penumpang}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}