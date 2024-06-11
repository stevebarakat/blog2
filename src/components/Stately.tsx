import React from "react";

type Props = {
  url: string;
  height: string;
};

function Stately({ url, height }: Props) {
  return <iframe className="stately" src={url} width="100%" height={height} />;
}

export default Stately;
