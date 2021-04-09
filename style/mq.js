import { css } from "styled-components";
import bp from "../consts/breakpoints";

// Creates up & down media queries for your breakpoints
// *** Usage ***
// import media from "**/MediaQueries.js"
// export const StyledComponent = styled.div`
// ${media.tablet`
//   display: flex;
// `}
// ${media.mobile_up`
//   display: none;
// `}
//`

const mq = Object.keys(bp).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (min-width: ${bp[label]}px) {
      ${css(...args)};
    }
  `;

  acc[`${label}_up`] = (...args) => css`
    @media screen and (min-width: ${bp[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default mq;

// // Extra small devices (portrait phones, less than 576px)
// @media (max-width: 575.98px) { ... }

// // Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) and (max-width: 767.98px) { ... }

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) and (max-width: 991.98px) { ... }

// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) and (max-width: 1199.98px) { ... }

// // Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }
