import { useState } from 'react';
import ComboBoxView from './ComboBoxView';

function ComboBoxController({
  label, options, saveSelectData, dispatch,
}: any) {
  const [value, setValue] = useState<any>([]);
  const handleComboBoxChange = (e: any, entry: any) => {
    const result: any[] = [];
    entry.map((item: any) => result.push(item.value));

    dispatch(saveSelectData(result));
  };
  return (
    <ComboBoxView
      label={label}
      options={options}
      value={value}
      setValue={setValue}
      handleComboBoxChange={handleComboBoxChange}
    />
  );
}

export default ComboBoxController;
