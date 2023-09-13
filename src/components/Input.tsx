import { HTMLInputTypeAttribute } from "react";
import { InputType } from "zlib";

interface IProps {
    label: string;
    placeholder: string;
    value?: string;
    onChangeText: (e: any)=> void;
    disabled?: boolean;
    subtitle?: string;
    type?: HTMLInputTypeAttribute;
}
export const Input = (props: IProps) => {
    return(
        <div className="sm:flex sm:flex-col w-full">
            <div className="flex items-center mb-2">
                <div className="font-robotomedium text-sm">{props.label}</div>
                {props.subtitle && <div className="text-[8pt] font-robotoregular ml-2">{props.subtitle}</div>}
            </div>
            <input value={props.value} onChange={props.onChangeText} className={`text-input text-sm mb-4 border-primary ${props.disabled && 'bg-slate-300'}`} placeholder={props.placeholder} type={props.type || 'text'}/>
        </div>
    );
}