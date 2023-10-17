interface ITicketProps {
    image: string;
    discount: string;
    time: string;
    dermagaAsal: string;
    dermagaTujuan: string;
}
export const Ticket = (props: ITicketProps) => {
    const {
        image,
        discount
    } = props;
    return(
        <div className="w-[90%] relative my-2">
            {discount && <div className="w-[100px] h-[50px] bg-[#07B5B8] flex items-center justify-center text-[white] absolute top-2">
                <span className="text-xl font-bold">50%</span>
                <span className="text-xs mt-2 ml-2">OFF</span>
            </div>}
            <img className="w-full h-[200px] object-cover rounded-tl-[10px] rounded-tr-[10px]" src={image}/>
            <div className="h-[80px] w-full flex">
                <div className="bg-orange min-w-[100px] h-[80px] text-[white] flex items-center justify-center text-center text-sm">
                    {props.time} WITA
                </div>
                <div className="flex justify-center flex-col p-3 w-[200px] bg-[url(/images/water-bg.png)] object-cover">
                    <div>{props.dermagaAsal}</div>
                    <div>{props.dermagaTujuan}</div>
                </div>
            </div>
        </div>
    );
}
// bg-[url(/images/water-bg.png)] 