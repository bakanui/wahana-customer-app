interface IButtonProps {
    title: string;
    containerClass?: string;
    onClick?: () => void;
}
export const Button = (props: IButtonProps) => {
    return(
        <div className={`${props.containerClass}`}>
            <div onClick={props.onClick} className="hover:cursor-pointer bg-secondary h-[50px] px-8 border-1 rounded-full flex w-full sm:w-[200px] items-center justify-center font-bold">{props.title}</div>
        </div>
    );
}