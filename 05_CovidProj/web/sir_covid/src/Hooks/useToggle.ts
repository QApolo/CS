import { useCallback, useState } from "react";

const useToggle = (
  initialValue: boolean,
  callback: () => void = () => {}
): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(currentValue => !currentValue);
    callback();
  }, [setValue, callback]);

  return [value, toggle];
};

export { useToggle };
