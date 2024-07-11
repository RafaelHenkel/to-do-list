interface InputDefaultProps {
  label: string;
  value: string;
  name: string;
  action: (value: string) => void;
}

function InputDefault({ action, label, value, name }: InputDefaultProps) {
  return (
    <>
      <label htmlFor={name} style={{ color: '#fff' }}>
        {label}{' '}
      </label>
      <input type="text" name={name} value={value} onChange={e => action(e.target.value)} />
    </>
  );
}

export default InputDefault;
