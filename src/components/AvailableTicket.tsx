export const AvailableTicket = () => {
    return(
        <div className="my-20">
            <div className="flex justify-between items-center sm:px-20 px-6 my-4 hover:cursor-pointer">
                <h2 className="text-[18px] sm:text-[24px] font-bold">Available Ticket Today</h2>
                <div className="bg-[black] h-[40px] w-[100px] flex items-center justify-center text-sm text-[white]">
                    <span>VIEW ALL</span>
                </div>
            </div>
            <div className="flex overflow-x-scroll pb-10 hide-scroll-bar no-scrollbar">
                <div className="flex flex-nowrap lg:ml-20 md:ml-20 lg:mr-20 md:mr-20 sm:ml-10 ml-6">
                    <TicketCard 
                        image={'/images/tiket/product-1.png'}
                    />
                    <TicketCard 
                        image={'/images/tiket/product-1.png'}
                    />
                    <TicketCard 
                        image={'/images/tiket/product-1.png'}
                    />
                    <TicketCard 
                        image={'/images/tiket/product-1.png'}
                    />
                    <TicketCard 
                        image={'/images/tiket/product-1.png'}
                    />
                    
                </div>
            </div>
        </div>
    );
}

interface ITicketCardProps {
    image: string;
    discount?: boolean;
}
export const TicketCard = (props: ITicketCardProps) => {
    const {
        image,
        discount
    } = props;
    return(
        <div className="w-[300px] mr-3 relative">
            {discount && <div className="w-[100px] h-[50px] bg-[#07B5B8] flex items-center justify-center text-[white] absolute top-2">
                <span className="text-xl font-bold">50%</span>
                <span className="text-xs mt-2 ml-2">OFF</span>
            </div>}
            <img className="w-full h-[320px] object-cover" src={image}/>
            <div className="h-[100px] w-full flex">
                <div className="bg-orange w-[100px] h-[100px] text-[white] flex items-center justify-center text-center text-sm">
                    Today <br/>
                    06.00 WITA
                </div>
                <div className="flex justify-center flex-col p-3 w-[200px] bg-[url(/images/water-bg.png)] object-cover bg-no-repeat">
                    <div>Padangbai</div>
                    <div>Gili Tarawangan</div>
                </div>
            </div>
        </div>
    );
}