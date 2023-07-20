import { useCallback, useState } from "react";
import { PUSH } from "../constant/key";

const useKey = (
  autoCompleteWordArr: string[],
  isFocused: boolean,
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>,
  choiceItemHandler: (name: string) => void
) => {
  const [focusIndex, setFocusIndex] = useState<number>(-1);

  const keyboardNavigation = useCallback(
    (e: KeyboardEvent) => {
      if (!isFocused) return;
      if (e.key === PUSH.down) {
        setFocusIndex((prev) =>
          Math.min(prev + 1, autoCompleteWordArr.length - 1)
        );
        return;
      }

      if (e.key === PUSH.up) {
        setFocusIndex((prev) => Math.max(-1, prev - 1));
        return;
      }

      if (e.key === PUSH.enter) {
        choiceItemHandler(autoCompleteWordArr[focusIndex]);
        setIsFocused(false);
      }
    },
    [
      autoCompleteWordArr,
      focusIndex,
      isFocused,
      choiceItemHandler,
      setIsFocused,
    ]
  );

  return { focusIndex, setFocusIndex, keyboardNavigation };
};

export default useKey;
