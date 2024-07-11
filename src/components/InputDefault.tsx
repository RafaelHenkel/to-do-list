interface InputDefaultProps {
  label: string;
  value: string;
  key: string;
  action: (value: string) => void;
}

function InputDefault({ action, label, value, key }: InputDefaultProps) {
  return (
    <>
      <label htmlFor={key}>{label} </label>
      <input type="text" name={key} value={value} onChange={e => action(e.target.value)} />
    </>
  );
}

export default InputDefault;
