import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useContext, useState } from "react";
import { SearchTiketContext } from "./SearchTiket";
import { Calendar } from 'react-date-range';
import { CloseIcon } from "@/assets/images/CloseIcon";
import { CustomModal } from "./CustomModal";
import { parseDateIncludeHours } from '@/app/utils/utility';

export const SelectTripDate = () => {
    const {
        tripType,
        journeyDate, setJourneyDate,
        returnDate, setReturnDate
    } = useContext(SearchTiketContext);
    const [showModal, setShowModal] = useState(false);
    const [dateType, setDateType] = useState('journey');
    
    const selectJourneyDate = () => {
        setDateType('journey');
        setShowModal(true);
    }

    const selectReturnDate = () => {
        setDateType('return');
        setShowModal(true);
    }

    const selectDate = (e: Date) => {
        if (dateType == 'return') {
            setReturnDate(e);
        }
        if (dateType == 'journey') {
            setJourneyDate(e);
        }
        setShowModal(false);
    }

    return(
       <>
            {tripType == 'one_way' ? 
                <div onClick={selectJourneyDate} className="rounded-[15px] bg-soft min-h-[120px] w-full sm:w-[25%] mt-2 sm:mt-0 sm:ml-6 p-4 flex justify-center flex-col hover:cursor-pointer">
                    <div className="text-xs text-slate-500">JOURNEY DATE</div>
                    <div className="text-md">{parseDateIncludeHours(journeyDate || new Date(), true)}</div>
                </div>
                : 
                <div className="rounded-[15px] bg-soft min-h-[120px] w-full sm:w-[25%] sm:mt-0 mt-2 sm:ml-6 flex ">
                    <div onClick={selectJourneyDate} className="flex flex-col justify-center w-full px-3 hover:cursor-pointer">
                        <div className="text-xs text-slate-500">JOURNEY DATE</div>
                        <div className="text-md">{parseDateIncludeHours(journeyDate || new Date(), true)}</div>
                    </div>
                    <div onClick={selectReturnDate} className="flex flex-col justify-center w-full hover:cursor-pointer border-l-[1px] border-l-slate-800 ml-2 px-3 rounded-tr-[15px] rounded-br-[15px] bg-[#BCF3FC]">
                        <div className="text-xs text-slate-500">RETURN DATE</div>
                        <div className="text-md">{parseDateIncludeHours(returnDate || new Date(), true)}</div>
                    </div>
                </div>
            }
            <CustomModal
                modalIsOpen={showModal}
                closeModal={()=>setShowModal(false)}
            >
                <DatePickerModal
                    close={()=>setShowModal(false)}
                    type={dateType}
                    onSelect={selectDate}
                    value={dateType == 'return' ? returnDate : journeyDate}
                    minDate={dateType == 'return' ? journeyDate : new Date()}
                />
            </CustomModal>
       </>
    );
}

interface IDatePickerModalProps {
    close: () => void;
    type: string;
    onSelect: (e:Date)=> void;
    value: Date;
    minDate: Date;
}
const DatePickerModal = (props: IDatePickerModalProps) => {
    return(
        <div className="">
            <div className="flex justify-between items-center mb-8">
                <div className="font-bold text-md">Select {props.type == 'return' ? 'Return Date' : 'Journey Date'}</div>
                <div onClick={props.close} className="hover:cursor-pointer">
                    <CloseIcon size="30px"/>
                </div>
            </div>
            <Calendar
                date={props.value || new Date()}
                onChange={props.onSelect}
                minDate={props.minDate}
            />
        </div>
    );
}