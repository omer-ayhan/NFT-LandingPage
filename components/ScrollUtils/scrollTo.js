import { animateScroll } from "./animateScroll";

const logError = () =>
  console.error(
    "Invalid element, please make sure you provided an id or react ref"
  );

const getElementPosition = (element) => element.offsetTop;

export const scrollTo = ({ id, ref = null, duration = 3000 }) => {
  const initialPosition = window.scrollY;

  const element = ref ? ref.current : id ? document.getElementById(id) : null;

  if (!element) {
    logError();
    return;
  }

  animateScroll({
    targetPosition: getElementPosition(element),
    initialPosition,
    duration,
  });
};
