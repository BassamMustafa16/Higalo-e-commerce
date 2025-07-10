"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/lib/fontawseome";
import { Aspects } from "@/types/db";
import ColorDiv from "./ColorDiv";
import { addFavorite, removeFavorite } from "@/lib/favorite";
import { useAuth } from "@/contexts/AuthContext";

type AmountProps = {
  inStock: number;
  aspects: Aspects;
  productId: string;
};

export default function PreOrder({ inStock, aspects, productId }: AmountProps) {
  const [amountInput, setAmountInput] = useState("0");
  const [selectedColor, setSelectedColor] = useState("");
  const [error, setError] = useState("");
  const [favorited, setFavorited] = useState(false);

  const { favorites } = useAuth();
  useEffect(() => {
    setFavorited(
      favorites.find((favorite) => favorite.product.id === productId)
    );
  }, []);
  console.log(favorited);

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

  const handleFavoriteClick = async (productId: string) => {
    if (favorited) {
      const res = await removeFavorite(productId);
      if (res.status === 200) {
        setFavorited(false);

        return;
      }
    } else {
      const res = await addFavorite(productId);
      if (res.status === 201) {
        setFavorited(true);
      }
    }
  };
  return (
    <div className="flex flex-col gap-3">
      {/* Colors */}
      <div>
        {aspects.colors && (
          <div className="flex flex-col gap-3">
            <h3>Colors: </h3>
            <div className="flex flex-row gap-3">
              {aspects.colors?.map((color: string, index: number) => (
                <ColorDiv
                  key={index}
                  color={color}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quantity */}
      <div className="flex flex-col gap-3">
        <h3>Amount: </h3>

        {/* Content */}
        <div className="flex flex-row gap-3">
          {/* Amount Input */}
          <div className="flex flex-row gap-1">
            <button
              className="text-gray-500 text-2xl aspect-square rounded-md w-5  hover:bg-gray-100"
              onClick={handleDecrease}
            >
              <FontAwesomeIcon
                icon={["fas", "minus"]}
                className="w-3 aspect-square"
              />
            </button>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              min={0}
              max={inStock}
              value={amountInput}
              onChange={handleChange}
              className="border border-gray-400 rounded-md text-center w-10 h-8 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              className="text-gray-500 text-2xl aspect-square rounded-md w-5  hover:bg-gray-100 "
              onClick={handleIncrease}
            >
              <FontAwesomeIcon
                icon={["fas", "plus"]}
                className="w-3 aspect-square"
              />
            </button>
          </div>

          {/* Buttons */}
          <div className="flex flex-row justify-between gap-3 w-full">
            {/* Add to cart */}
            <button className="bg-orange text-white py-1 rounded-md flex-3">
              Add to Cart
            </button>

            {/* Add to favorite */}
            <button
              className="flex flex-col justify-center items-center flex-1 bg-darkBlue rounded-md py-1"
              onClick={() => handleFavoriteClick(productId)}
            >
              <div className="w-full relative h-full">
                <FontAwesomeIcon
                  icon={[`${favorited ? "fas" : "far"}`, "heart"]}
                  className="w-3 aspect-square text-white"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Error Message */}
      {error && (
        <span className="text-red-500 text-xs animate-pulse">{error}</span>
      )}
    </div>
  );
}
