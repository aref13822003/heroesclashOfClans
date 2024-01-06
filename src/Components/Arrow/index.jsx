import React from "react";

export default function Arrow({classArrow,handleIndex}) {
  return (
    <div class="arrow-wrapper" onClick={handleIndex}>
      <div class="round">
        <div id="cta">
          <span class={`arrow ${classArrow}`}></span>
        </div>
      </div>
    </div>
  );
}
