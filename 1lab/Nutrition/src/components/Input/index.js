import { FormControl, Input as NativeBaseInput, WarningOutlineIcon } from "native-base";
import Select from "./Select";
import TextArea from "./TextArea";

const Input = ({
  value,
  onChange,
  label,
  placeholder = 'Enter field',
  error,
  style,
  keyboardType,
  type = 'text',
  isRequired
}) => <FormControl style={style} isInvalid={error} isRequired={isRequired}>
  <FormControl.Label>{label}</FormControl.Label>
  <NativeBaseInput
    value={value}
    onChangeText={onChange}
    placeholder={placeholder}
    keyboardType={keyboardType}
    type={type}
  />
  <FormControl.ErrorMessage
    leftIcon={<WarningOutlineIcon size="xs" />}
  >
    {error}
  </FormControl.ErrorMessage>
</FormControl>

Input.Select = Select;
Input.TextArea = TextArea;

export default Input;
