interface IProps {
    y: string;
}
export const Hr = (props: IProps) => {
    return(
        <div className={`w-full h-[1px] bg-slate-200 ${props.y}`}></div>
    );
}