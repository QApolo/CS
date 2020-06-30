import { useState, ChangeEvent } from "react";

interface bind<T> {
  value: T;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);

  const bind = {
    value,
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      if (typeof initialValue === "string")
        setValue((String(event.target.value) as unknown) as T);
      else if (typeof value === "number")
        setValue((Number(event.target.value) as unknown) as T);
      else if (typeof value === "boolean")
        setValue((Boolean(event.target.value) as unknown) as T);
      else throw Error("Wrong type at useInput");
    },
    ...(typeof value === "number" && { type: "number" })
  };

  return [value, bind] as [T, bind<T>];
};

export { useInput };
