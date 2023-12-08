import { Select as NativeBaseSelect, FormControl, WarningOutlineIcon } from "native-base";

const Select = ({
  value,
  onChange,
  values,
  label,
  placeholder = 'Enter field',
  error,
  style,
}) => <FormControl style={style} isInvalid={error}>
  <FormControl.Label>{label}</FormControl.Label>
  <NativeBaseSelect
    selectedValue={value}
    onValueChange={onChange}
    placeholder={placeholder}
  >
    {values.map(({ value, label }) => <NativeBaseSelect.Item key={value} label={label} value={value} />)}
  </NativeBaseSelect>
  <FormControl.ErrorMessage
    leftIcon={<WarningOutlineIcon size="xs" />}
  >
    {error}
  </FormControl.ErrorMessage>
</FormControl>

export default Select
