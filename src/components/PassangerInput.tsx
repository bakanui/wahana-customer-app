interface IPassangerInputProps {
    title: string;
    value: number;
    onPlus: ()=> void;
    onMin: ()=> void;
    onChange: (e: any) => void;
}
export const PassangerInput = (props: IPassangerInputProps) => {
    return(
        <div className="flex justify-between items-center">
            <span >{props.title}</span>
            <div className="flex">
                <div onClick={props.onMin} className="w-[42px] h-[42px] bg-secondary flex items-center justify-center text-md mr-[-4px] hover:cursor-pointer z-[20]">-</div>
                <input 
                    style={{fontSize: 16}} 
                    value={props.value}
                    onChange={props.onChange}
                    minLength={3}
                    className={`text-sm h-[42px] text-center w-[50px] sm:w-[80px] border-2 border-secondary`} 
                    type='number'/>
                <div onClick={props.onPlus} className="w-[42px] h-[42px] bg-secondary flex items-center justify-center text-md ml-[-4px] hover:cursor-pointer">+</div>
            </div>
        </div>
    );
}