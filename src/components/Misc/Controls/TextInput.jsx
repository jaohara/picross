import "./TextInput.scss";

const TextInput = ({
  disabled = false,
  label = undefined,
  labelPosition = "top",
  name,
  noLabel = false,
  onChange = (e) => {setValue(e.target.value)},
  placeholder = "",
  setValue = () => {},
  value = ""
}) => {
  const getWrapperClassNames = () => {
    return `TextInput__Wrapper`;
  }

  const getInputClassNames = () => {
    return `Controls__TextInput`;
  }

  const getLabel = () => {
    if (!noLabel && label !== undefined && typeof label === 'string' && label.length > 0) {
      return;
    }
    
    return (<label className={`label-${labelPosition}`}htmlFor={name}>{label}</label>);
  }

  return (
    <div className={getWrapperClassNames()}>
      {getLabel()}
      <input
        className={getInputClassNames()}
        disabled={disabled}
        name={name}
        onChange={onChange} 
        placeholder={placeholder}
        type="text"
        value={value} 
      />
    </div>
  );
}
 
export default TextInput;