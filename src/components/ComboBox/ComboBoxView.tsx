/* eslint-disable react/jsx-props-no-spreading */
import './ComboBox.scss';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function ComboBoxView({
  options, value, setValue, handleComboBoxChange, label,
}:any) {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  return (
    <Autocomplete
      multiple
      loading
      loadingText="Waiting..."
      size="small"
      id="checkboxes-tags-demo"
      options={options}
      disableCloseOnSelect
      getOptionLabel={(option) => option.label}
      onChange={(e: any, entry: any) => {
        setValue(entry);
        handleComboBoxChange(e, entry);
      }}
      value={value}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox icon={icon} checkedIcon={checkedIcon} checked={selected} />
          {option.label}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={label} />
      )}
    />
  );
}

export default ComboBoxView;
