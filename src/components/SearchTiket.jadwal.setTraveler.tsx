import { CloseIcon } from "@/assets/images/CloseIcon";
import { useContext, useEffect, useState } from "react";
import { Button } from "./Button";
import { CustomModal } from "./CustomModal";
import { Hr } from "./Hr";
import { PassangerInput } from "./PassangerInput";
import { SearchTiketContext } from "./SearchTiket";

export const SetTraveler = () => {
    const {
        passangers
    } = useContext(SearchTiketContext);
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <div onClick={()=>setShowModal(true)} className="rounded-[15px] bg-soft min-h-[120px] w-full sm:w-[20%] sm:ml-6 mt-2 sm:mt-0 p-4 flex justify-center flex-col hover:cursor-pointer">
                <div className="text-xs text-slate-500">PASSANGERS</div>
                <div className="text-md text-slate-600">{passangers.total} Person{passangers.total > 1 ? 's': ''}</div>
            </div>
            <CustomModal
                modalIsOpen={showModal}
                closeModal={()=>setShowModal(false)}
            >
                <PassangersModal 
                    close={()=>setShowModal(false)}
                />
            </CustomModal>
        </>
    );
}

interface IPassangersModalPorps {
    close: () => void;
}
export const PassangersModal = (props: IPassangersModalPorps) => {
    const {
        passangers, setPassangers
    } = useContext(SearchTiketContext);

    useEffect(()=> {
        const adult = passangers.adult || 0;
        const child = passangers.child || 0;
        const tot = parseInt(adult) + parseInt(child);
        setPassangers({
            ...passangers,
            total: tot
        });
    }, [passangers.adult, passangers.child]);

    const increaseAdult = () => {
        setPassangers({
            ...passangers,
            adult: parseInt(passangers.adult) + 1
        });
    }

    const decreaseAdult = () => {
        setPassangers({
            ...passangers,
            adult: parseInt(passangers.adult) - 1
        });
    }

    const increaseChild = () => {
        setPassangers({
            ...passangers,
            child: parseInt(passangers.child) + 1
        });
    }

    const decreaseChild = () => {
        setPassangers({
            ...passangers,
            child: parseInt(passangers.child) - 1
        });
    }

    const setAdult = (e: any) => {
        setPassangers({
            ...passangers,
            adult: e.target.value
        });
    }

    const setChild = (e: any) => {
        setPassangers({
            ...passangers,
            child: e.target.value
        });
    }


    return(
        <div className="w-[80vw] sm:w-[50vw] text-slate-500">
            <div className="flex justify-between items-center mb-8">
                <div className="font-bold text-md">Input Passangers</div>
                <div onClick={props.close} className="hover:cursor-pointer">
                    <CloseIcon size="30px"/>
                </div>
            </div>
            <div className="font-bold text-lg">{passangers.total} Person{passangers.total > 1 ? 's': ''}</div>
            <Hr y='my-4'/>
            <PassangerInput 
                title="Adult" 
                value={passangers.adult}
                onPlus={increaseAdult}
                onMin={decreaseAdult}
                onChange={setAdult}
            />
            <Hr y='my-4'/>
            <PassangerInput 
                title="Child"
                value={passangers.child}
                onPlus={increaseChild}
                onMin={decreaseChild}
                onChange={setChild}
            />
            <Hr y='my-4'/>
            <Button 
                title="Confirm"
                onClick={props.close}
                containerClass='flex justify-end'
            />
        </div>
    );
}