'use client'
import { CloseIcon } from "@/assets/images/CloseIcon";
import { MenuIcon } from "@/assets/images/MenuIcon";
import { useState } from "react";
import { CustomModal } from "./CustomModal";

export const Header = () => {
    const [showModal, setShowModal] = useState(false);
    return(
        <div className="flex bg-white h-[60px] sm:h-[100px] w-full items-center justify-between sm:md:lg:px-20">
            <div className="h-[60px] w-[150px] sm:w-[180px]">
                <div className='w-full h-[60px] bg-[url(./../assets/images/logo-primary.png)] bg-contain bg-no-repeat bg-left ml-[10%]'></div>
            </div>
            <div className="flex text-black sm:justify-between w-[30%] justify-end mr-6 font-small text-[18px]">
                <div className="hidden sm:block hover:cursor-pointer">BUY TICKET</div>
                <div className="hidden sm:block hover:cursor-pointer">BOOKING CHECK</div>
                <div className="hover:cursor-pointer" onClick={()=>setShowModal(true)}>
                    <MenuIcon fill="#000"/>
                </div>
            </div>
            <PopupMenu showModal={showModal} close={()=>setShowModal(false)}/>
        </div>
    );
}

interface IPopupMenuProps {
    showModal: boolean;
    close: ()=> void;
}
export const PopupMenu = (props: IPopupMenuProps) => {
    return(
            <CustomModal
                modalIsOpen={props.showModal}
                closeModal={props.close}

            >
                <div className="w-[100vw] h-[100vh] bg-[url(/images/bg-navigation.png)] bg-cover flex flex-col items-center justify-center">
                    <img src="/images/logo-primary.png" className="object-contain w-[180px] mb-6"/>
                    <div className="sm:block my-4 font-bold hover:cursor-pointer">HOME</div>
                    <div className="sm:block my-4 font-bold hover:cursor-pointer">BUY TICKET</div>
                    <div className="sm:block my-4 font-bold hover:cursor-pointer">BOOKING CHECK</div>
                    <div className="sm:block my-4 font-bold hover:cursor-pointer">GALLERY</div>
                    <div className="sm:block my-4 font-bold hover:cursor-pointer">CONTACT US</div>
                    <div className="sm:block my-4 font-bold hover:cursor-pointer">LOGIN</div>
                    <div className="mt-8" onClick={props.close}>
                        <CloseIcon />
                    </div>
                </div>
            </CustomModal>
    );
}