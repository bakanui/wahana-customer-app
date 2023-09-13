import { TicketCard } from "./AvailableTicket";

export const PromoTicket = () => {
    return(
        <div className="">
            <div className="flex justify-between items-center sm:px-20 px-6 my-4 hover:cursor-pointer">
                <h2 className="text-[18px] sm:text-[24px] font-bold ">Promo Ticket Today</h2>
                <div className="bg-[black] h-[40px] w-[100px] flex items-center justify-center text-sm text-[white]">
                    <span>VIEW ALL</span>
                </div>
            </div>
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar no-scrollbar">
                <div className="flex flex-nowrap lg:ml-20 md:ml-20 lg:mr-20 md:mr-20 sm:ml-10 ml-6">
                    <TicketCard
                        image={'/images/tiket/product-1.png'}
                        discount
                    />
                    <TicketCard 
                        image={'/images/tiket/product-1.png'}
                        discount
                    />
                    <TicketCard 
                        image={'/images/tiket/product-1.png'}
                        discount
                    />
                    <TicketCard 
                        image={'/images/tiket/product-1.png'}
                        discount
                    />
                    <TicketCard 
                        image={'/images/tiket/product-1.png'}
                        discount
                    />
                    
                </div>
            </div>
        </div>
    );
}