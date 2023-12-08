import { FormControl, TextArea as NativeBaseTextArea, WarningOutlineIcon } from "native-base";

const TextArea = ({
  value,
  onChange,
  label,
  placeholder = 'Enter field',
  error,
  style,
}) => <FormControl style={style} isInvalid={error}>
  <FormControl.Label>{label}</FormControl.Label>
  <NativeBaseTextArea
    h={20}
    value={value}
    onChangeText={onChange}
    placeholder={placeholder}
  />
  <FormControl.ErrorMessage
    leftIcon={<WarningOutlineIcon size="xs" />}
  >
    {error}
  </FormControl.ErrorMessage>
</FormControl>

export default TextArea;
