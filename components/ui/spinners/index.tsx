export const CircularPulseSpinner = () => {
  return (
    <div className="relative w-12 h-12">
      <div className="absolute w-full h-full rounded-full border-2 border-neutral-200 opacity-25" />
      <div className="absolute w-full h-full rounded-full border-2 border-t-neutral-800 animate-spin" />
    </div>
  );
};

export const DotsSpinner = () => {
  return (
    <div className="flex space-x-2">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="w-2 h-2 bg-neutral-800 rounded-full animate-[bounce_1s_ease-in-out_infinite]"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
};

export const RingSpinner = () => {
  return (
    <div className="relative w-12 h-12">
      <div className="absolute w-full h-full rounded-full border-4 border-neutral-100" />
      <div className="absolute w-full h-full rounded-full border-4 border-neutral-800 border-t-transparent animate-spin" />
    </div>
  );
};

export const BarSpinner = () => {
  return (
    <div className="w-16 h-1 bg-neutral-100 rounded-full overflow-hidden">
      <div
        className="w-full h-full bg-neutral-800 rounded-full animate-[slide_1s_ease-in-out_infinite]"
        style={{
          transformOrigin: "left",
          animation: "slide 1.5s ease-in-out infinite",
        }}
      />
    </div>
  );
};

export const MorphSpinner = () => {
  return (
    <div className="relative w-12 h-12">
      <div
        className="absolute w-full h-full border-4 border-neutral-800 animate-[morph_2s_ease-in-out_infinite]"
        style={{
          animation: "morph 2s ease-in-out infinite",
        }}
      />
    </div>
  );
};

export const SquareRotateSpinner = () => {
  return (
    <div className="relative w-12 h-12">
      <div
        className="absolute w-full h-full border-4 border-neutral-800 animate-[squareRotate_3s_linear_infinite]"
        style={{
          animation: "squareRotate 3s linear infinite",
        }}
      />
    </div>
  );
};
