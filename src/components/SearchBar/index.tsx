import React, { useEffect, useRef } from "react";
import * as s from "./style";

interface SearchBarProps {
  letters: string;
  setLetters: (value: string) => void;
  setIsShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchBar({ letters, setLetters, setIsShowing }: SearchBarProps) {
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
    <s.InputContainer>
      <s.Input
        ref={inputRef}
        onInput={inputChangeHandler}
        onFocus={inputFocusHandler}
        value={letters}
        placeholder="질환명을 입력해주세요"
      />
      <s.DeleteButton visibility={letters !== ""} onClick={deleteHandler}>
        X
      </s.DeleteButton>
    </s.InputContainer>
  );
}

export default SearchBar;
