import React, { useEffect, useRef } from "react";
import * as s from "./style";

interface SearchBarProps {
  letters: string;
  setLetters: (value: string) => void;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchBar({ letters, setLetters, setIsSearching }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setLetters(event.currentTarget.value);
  };

  const deleteHandler = () => {
    setLetters("");
  };

  const inputFocusHandler = () => {
    setIsSearching(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      console.log("다른 곳 클릭");
      setIsSearching(false);
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
      <s.Button onClick={deleteHandler}>x</s.Button>
    </>
  );
}

export default SearchBar;
