import Outputscreen from "./Outputscreen";
import CalculatorTittle from "./CalculatorTittle";
import Button from "./Button";
import { useState } from "react";
const Calculator = () => {
  const [ansstate, setans] = useState();
  const [question, setquestion] = useState();
  return (
    <>
      <CalculatorTittle value="calculator" />
      <Outputscreen />
      <div className="row">
        <Button lable={"Delete"} />
        <Button lable={"Clear"} />
        <Button lable={"/"} />
        <Button lable={"."} />
      </div>
      <div className="row">
        <Button lable={"1"} />
        <Button lable={"2"} />
        <Button lable={"3"} />
        <Button lable={"%"} />
      </div>
      <div className="row">
        <Button lable={"4"} />
        <Button lable={"5"} />
        <Button lable={"6"} />
        <Button lable={"*"} />
      </div>
      <div className="row">
        <Button lable={"7"} />
        <Button lable={"8"} />
        <Button lable={"9"} />
        <Button lable={"+"} />
      </div>
      <div className="row">
        <Button lable={"0"} />
        <Button lable={"#"} />
        <Button lable={"%"} />
      </div>
    </>
  );
};

export default Calculator;
