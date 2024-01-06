import React from "react";

export default function Units( {state, value, noBorder}) {
  return (
    <div class={`one-third ${noBorder}`}>
      <div class={`stat`}>{state}</div>
      <div class={`stat-value`}>{value}</div>
    </div>
  );
}
