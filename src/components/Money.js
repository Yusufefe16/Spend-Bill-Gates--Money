import { useSpring, animated } from "@react-spring/web";
import { useSelector } from "react-redux";

function Money() {
  const money = useSelector((state) => state.money.value);
  const { val } = useSpring({ from: { val: 0 }, to: { val: money } });

  return (
    <div className="money-container">
      <animated.div>{val.to((val) => `$${Math.floor(val)}`)}</animated.div>
    </div>
  );
}

export default Money;
