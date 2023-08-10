import React from "react";
import {data} from "../data/Data";
import Card from "./Card"

function Contents() {
  return <section className="cards">
  {
    data.map((item) =>
      <Card key={item.id} item={item}  />
    )
  }
</section>
}

export default Contents;
