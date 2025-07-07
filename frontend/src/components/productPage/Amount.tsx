"use client";
import { useState } from "react";

type AmountProps = {
  inStock: number;
};

export default function Amount({ inStock }: AmountProps) {
  const [amountInput, setAmountInput] = useState("0");
  const [error, setError] = useState("");

  const amountValue = Number(amountInput) || 0;

  const showError = (msg: string) => setError(msg);
  const clearError = () => setError("");

  const handleDecrease = () => {
    if (amountValue > 0) {
      setAmountInput(String(amountValue - 1));
      clearError();
    }
  };

  const handleIncrease = () => {
    if (amountValue < inStock) {
      setAmountInput(String(amountValue + 1));
      clearError();
    } else {
      showError(`We only have ${inStock} units in stock right now.`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    // Remove leading zeros
    val = val.replace(/^0+(?=\d)/, "");

    if (val === "") {
      setAmountInput("0");
      clearError();
      return;
    }

    // Clamp
    if (Number(val) > inStock) {
      val = String(inStock);
      showError(`We only have ${inStock} units in stock right now.`);
    } else {
      clearError();
    }

    setAmountInput(val);
  };

  return (
    <div>
      <div className="flex flex-row items-center gap-3">
        <button
          className="text-gray-500 text-2xl rounded-md w-10 aspect-square hover:bg-gray-100 active:scale-95"
          onClick={handleDecrease}
        >
          -
        </button>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          min={0}
          max={inStock}
          value={amountInput}
          onChange={handleChange}
          className="border border-gray-400 rounded-md text-center w-16 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          className="text-gray-500 text-2xl rounded-md w-10 aspect-square hover:bg-gray-100 active:scale-95"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
      {error && <p className="text-red-500 text-xs animate-pulse">{error}</p>}
    </div>
  );
}
