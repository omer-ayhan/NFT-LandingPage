import { memo } from "react/cjs/react.production.min";
import { scrollTo } from "./scrollTo";

const SmoothScroll = ({
  toId,
  toRef,
  duration,
  children,
  allowScroll = true,
  ...rest
}) => {
  const handleClick = () =>
    scrollTo({ id: toId, ref: toRef, duration: duration });
  return (
    <span onClick={allowScroll ? handleClick : undefined} {...rest}>
      {children}
    </span>
  );
};

export default memo(SmoothScroll);
