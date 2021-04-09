import bp from "./breakpoints";

const mQueryPoint = {
  mobile: `${bp.mobile}px`,
  tabletSmall: `${bp.tabletSmall}px`,
  tablet: `${bp.tablet}px`,
  desktop: `${bp.desktop}px`,
};

export const wrapper = {
  width: `100%`,
  maxWidth: `1200px`,
  marginLeft: `auto`,
  marginRight: `auto`,
  padding: `0 1.5rem`,
};

export const colors = {
  primary: `#026cdf`,
  secondary: `#1f262d`,
  error: `#ff0033`,
  white: `#ffffff`,
};

export const lg = {
  azure: `linear-gradient(
    90deg,
    rgb(1, 80, 167),
    rgb(2, 108, 223),
    rgb(1, 80, 167)
  )`,
};
