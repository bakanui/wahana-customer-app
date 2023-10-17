interface IDProps {
  label: string;
  value?: string;
  onChangeText: (e: any) => void;
  disabled?: boolean;
  name: string;
}

export const Select = (props: IDProps) => {
  const sex = [{ sex: "Male" }, { sex: "Female" }];

  return (
    <div className="sm:flex sm:flex-col w-full mt-6 sm:mt-0">
      <div className="flex items-center mb-2">
        <div className="font-robotomedium text-md">{props.label}</div>
      </div>
      <select
        value={props.value}
        onChange={props.onChangeText}
        className={`text-input text-sm mb-4 border-primary block ${
          props.disabled && "bg-slate-300"
        }`}
        name={props.name}
      >
        {sex.map((item) => (
          <option value={item.sex} key={item.sex}>
            {item.sex}
          </option>
        ))}
      </select>
    </div>
  );
};
