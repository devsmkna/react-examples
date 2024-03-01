import React, { useEffect, useState } from "react";

const RReverseString = () => {
  const [str, setStr] = useState<string>("");
  const [isPalindrome, setIsPalindrome] = useState<boolean>(false);

  useEffect(() => {
    if (str.length > 1) {
      setIsPalindrome(str === str.split("").reverse().join(""));
    }
  }, [str]);

  useEffect(() => {}, [isPalindrome]);

  const handleReverse = (newString: string) => {
    setStr(newString.split("").reverse().join(""));
  };

  return (
    <div className="r-reverse-sting">
      <span>{isPalindrome && "This is a palindrome"}</span>
      <p>{str}</p>
      <input
        type="text"
        onChange={(e) => handleReverse(e.target.value)}
        placeholder="Enter string"
      />
    </div>
  );
};

export default RReverseString;
