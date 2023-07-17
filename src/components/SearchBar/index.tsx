import React from "react";
interface SearchBarProps {
  setLetters: (value: string) => void;
}

function SearchBar({ setLetters }: SearchBarProps) {
  const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setLetters(event.currentTarget.value);
  };

  return (
    <>
      <h4>SearchBar</h4>
      <input onInput={inputChangeHandler} />
    </>
  );
}

export default SearchBar;
