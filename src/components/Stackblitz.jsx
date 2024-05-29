"use client";

function Stackblitz({ width, height }) {
  return (
    <div className="stackblitz">
      <iframe
        width={width || "100%"}
        height={height || "500px"}
        src="https://stackblitz.com/github/stevebarakat/circle-dragger/tree/v1?embed=1&file=src%2Fmachine.ts"
      />
    </div>
  );
}

export default Stackblitz;
