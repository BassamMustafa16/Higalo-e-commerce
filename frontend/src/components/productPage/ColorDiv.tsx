type ColorDiv = {
  color: string;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
};
export default function ColorDiv({
  color,
  selectedColor,
  setSelectedColor,
}: ColorDiv) {
  return (
    <div
      className={`w-8 aspect-square ${
        selectedColor === color && "outline-2"
      } outline-offset-2 rounded-full`}
      style={{ backgroundColor: color, outlineColor: color }}
      onClick={() => {
        setSelectedColor(color);
      }}
    ></div>
  );
}
