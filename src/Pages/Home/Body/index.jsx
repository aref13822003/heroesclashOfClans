import React from "react";
import Units from "../../../Components/unit";

export default function Body({hero}) {
  const {img,level,units,name,desc}=hero
  const unitsItem=units.map((e, index)=><Units key={index} value={e.value} state={e.state} noBorder={index===units.lengths-1 && "no-border" }></Units>)
  return (
    <div class={`clash-card ${name}`}>
      <div class={`clash-card__image clash-card__image--${name}`}>
        <img
          src={img}
          alt={`${name}`}
        />
      </div>
      <div class={`clash-card__level clash-card__level--${name}`}>{level}</div>
      <div class={`clash-card__unit-name`}>The {name}</div>
      <div class={`clash-card__unit-description`}>
   {desc}
      </div>








      <div class={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}>
       {unitsItem}
      </div>
    </div>
  );
}
