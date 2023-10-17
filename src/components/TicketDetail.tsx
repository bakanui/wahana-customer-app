import { parseDateIncludeHours } from "@/app/utils/utility";
import { ArrowRight } from "@/assets/images/ArrowRight";
import { ClockIcon } from "@/assets/images/ClockIcon";
import { CloseIcon } from "@/assets/images/CloseIcon";
import { PassangerIcon } from "@/assets/images/PassangerIcon";
import { ShipIcon } from "@/assets/images/ShipIcon";
import { WhatsappIcon } from "@/assets/images/WhatsappIcon";
import { useContext } from "react";
import { SearchTiketContext } from "./SearchTiket";

interface ITicketDetailProps {
  close: () => void;
}
export const TicketDetail = (props: ITicketDetailProps) => {
  const { ticketdetail, passangers, journeyDate, returnDate, tripType } =
    useContext(SearchTiketContext);

  var dataPassangers: any = {
    tanggal: parseDateIncludeHours(journeyDate, true),
    tanggalReturn: parseDateIncludeHours(returnDate, true),
    dermagaAwal: ticketdetail.dermaga_awal,
    dermagaTujuan: ticketdetail.dermaga_tujuan,
    totalPassanger: passangers.total,
    passangerAdult: passangers.adult,
    passangerChild: passangers.child,
    tipeTrip: tripType,
  };

  return (
    <div className="w-[80vw] min-h-[50vh]">
      <div className="flex justify-between items-center mb-8">
        <div className="font-bold text-md">Let's Book Now</div>
        <div onClick={props.close}>
          <CloseIcon size="30px" />
        </div>
      </div>
      <img
        src={"/images/tiket/product-1.png"}
        className="w-full h-[200px] bg-no-repeat rounded-t-[10px] object-cover"
      />
      <div className="bg-orange h-[40px] w-full text-md text-white font-robotomedium flex items-center justify-center">
        <ClockIcon size="24px" fill="#fff" />
        <span className="ml-2">{ticketdetail.waktu_berangkat} WITA</span>
      </div>
      <div className="mt-4">
        <div className="flex flex-row">
          <div className="flex flex-col w-full pr-2">
            <span className="text-sm text-slate-500">From</span>
            <div className="text-md font-robotomedium">
              {ticketdetail.dermaga_awal}
            </div>
          </div>
          <div className="w-[35px]">
            <div className="h-[30px] w-[30px] rounded-full flex items-center justify-center bg-primary text-white">
              <ArrowRight size="20px" fill="#fff" />
            </div>
          </div>
          <div className="flex flex-col w-full pl-4">
            <span className="text-sm text-slate-500">To</span>
            <div className="text-md font-robotomedium">
              {ticketdetail.dermaga_tujuan}
            </div>
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <div className="flex mt-2">
            <div className="h-[30px] w-[30px] flex justify-center items-center rounded-full">
              <ShipIcon />
            </div>
            <div className="ml-3">
              <div className="text-sm text-slate-500">Ship</div>
              <div className="text-md font-robotomedium">
                {ticketdetail.nama_kapal}
              </div>
            </div>
          </div>
          <div className="flex mt-2 justify-between">
            <div className="flex">
              <div className="h-[30px] w-[30px] flex justify-center items-center rounded-full">
                <PassangerIcon />
              </div>
              <div className="ml-3">
                <div className="text-sm text-slate-500">Capacity</div>
                <div className="text-md font-robotomedium">
                  {ticketdetail.kapasitas_penumpang}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-2" />
        <div className="text-sm mb-2 mt-4 text-center w-full text-slate-500">
          Let's book tickets now before they run out!
        </div>
        <a
          href={`${
            passangers.total > 1
              ? "/order-ticket-multiple"
              : "/order-ticket-single"
          }`}
          onClick={() =>
            localStorage.setItem("data", JSON.stringify(dataPassangers))
          }
        >
          <div className="w-full bg-[#128C7E] flex h-[46px] rounded-full items-center justify-center text-white font-bold">
            Order Ticket
          </div>
        </a>
        <span className="text-sm mt-2">
          You'll be redirected to WhatsApp for booking process
        </span>
      </div>
    </div>
  );
};
