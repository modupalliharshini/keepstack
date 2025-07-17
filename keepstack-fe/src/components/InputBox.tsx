interface inputBoxProps {
  placeholder: string;
  reference?: any;
}

export function InputBox({ placeholder, reference }: inputBoxProps) {
  return (
    <div className="p-3 rounded-sm w-[20vw] ">
      <input
        className="border border-main-text p-1 w-[18vw] "
        type="text"
        placeholder={placeholder}
        ref={reference}
      />
    </div>
  );
}
