import React from "react";

function Stately({ url, height }) {
  return (
    <div className="wrapper">
      <iframe className="stately" src={url} width="100%" height={height} />
    </div>
  );
}

export default Stately;
