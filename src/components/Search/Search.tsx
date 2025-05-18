"use client";
import { useState } from "react";
import { Input } from "antd";
import { useRouter } from "next/navigation";

interface Search {
  query: string;
}

export default function Search() {
  const { Search } = Input;
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    router.push(`/?query=${encodeURIComponent(inputValue)}`);
  };

  return (
    <div className="p-4">
      <Search
        type="text"
        placeholder="film search"
        value={inputValue}
        onChange={onInputChange}
        allowClear
        onSearch={handleSearch}
      />
      {<>{}</>}
    </div>
  );
}
