import React, { useEffect, useRef } from "react";
import * as s from "./style";

interface SearchBarProps {
  letters: string;
  setLetters: (value: string) => void;
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
  isOnFocus: boolean;
}

function SearchBar({
  letters,
  setLetters,
  setIsShowing,
  isOnFocus,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setLetters(event.currentTarget.value);
  };

  const deleteHandler = () => {
    setLetters("");
  };

  const inputFocusHandler = () => {
    setIsShowing(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsShowing(false);
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        onInput={inputChangeHandler}
        onFocus={inputFocusHandler}
        value={letters}
      />
      <s.Button onClick={deleteHandler} className={isOnFocus ? "focused" : ""}>
        x
      </s.Button>
    </>
  );
}

export default SearchBar;
