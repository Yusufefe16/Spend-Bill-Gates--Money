import React from "react";
import Receipt from "./Receipt";
import Money from "./Money";
import Contents from "./Contents";
import Title from "./Title";

function Form() {
  return (
    <div className="count form">
      <Title/>
      <Money />
      <Contents />
      <Receipt />
    </div>
  );
}

export default Form;
