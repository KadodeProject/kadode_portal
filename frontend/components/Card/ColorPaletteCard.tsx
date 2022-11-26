interface CPT {
  color: string;
  borderColor?: string;
  textColor?: string;
}

export default function ColorPaletteCard({
  color,
  textColor,
  borderColor,
}: CPT) {
  return (
    <div class="flex flex-col items-center p-4">
      <div
        class="w-12 h-12 rounded-xl"
        style={
          `background-color:var(--${color});` +
          (borderColor ? ` border:1px solid var(--${borderColor});` : "")
        }
      ></div>
      <p
        class="text-xs mt-2"
        style={textColor ? `color:var(--${textColor});` : ""}
      >
        {color}
      </p>
    </div>
  );
}
