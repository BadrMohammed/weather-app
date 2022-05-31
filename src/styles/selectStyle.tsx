export const selectStyle = {
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: '1px solid rgba(0, 127, 255,0.1)',
    color: state.isSelected ? '#fff' : '#000',
    padding: 10,
    textAlign:'center',
    borderRadius: '5px'
  }),
  container: (provided: any, state: any) => ({
    ...provided,
    width: '100%',
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    width: '100%',
  }),
  input: (provided: any, state: any) => ({
    ...provided,
    width: '100%',
    color: 'black',
  }),
  placeholder: (provided: any, state: any) => ({
    ...provided,
    color: 'black',
  }),
};
