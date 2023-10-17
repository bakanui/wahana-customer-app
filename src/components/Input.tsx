import { HTMLInputTypeAttribute } from "react";
import { InputType } from "zlib";

interface IProps {
  label: string;
  placeholder: string;
  value?: string;
  onChangeText: (e: any) => void;
  disabled?: boolean;
  subtitle?: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  error: string;
}

export const Input = (props: IProps) => {
  return (
    <div className="sm:flex sm:flex-col w-full mb-4">
      <div className="flex items-center mb-2">
        <div className="font-robotomedium text-md">{props.label}</div>
        {props.subtitle && (
          <div className="text-[8pt] font-robotoregular ml-2">
            {props.subtitle}
          </div>
        )}
      </div>
      <input
        value={props.value}
        onChange={props.onChangeText}
        className={`text-input text-sm border-primary ${
          props.disabled && "bg-slate-300"
        }`}
        placeholder={props.placeholder}
        type={props.type || "text"}
        name={props.name}
      />
      <p className="text-red-600">{props.error}</p>
    </div>
  );
};
