function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{
    width: "1.5rem",
    height: "1.5rem"
  }} {...props}><path d="M18 13.2c.2 2.3 2 1.7 2 4 0 1.7-3.5 3.8-8 3.8s-8-2.1-8-3.8c0-2.3 1.8-1.7 2-4 .5-5.5 1-7.7 4.4-8.9C11.6 3.8 11 3 12 3s.4.8 1.6 1.3c3.5 1.2 3.9 3.4 4.4 8.9zM12 20c3.9 0 6.5-1.7 6.5-2.1 0-.7-2-2-6.5-1.9-4.5 0-6.5 1.4-6.5 2 0 .3 2.6 2 6.5 2zm-2.5-2.8c.7-.1 1.6-.2 2.5-.2s1.8.1 2.5.2c-.6 1.2-1.4 1.8-2.5 1.8s-2-.6-2.5-1.8zm6.1-4.6l-2.1-2.1 2.1-2.1L14.2 7 12 9.1 9.9 7 8.5 8.4l2.1 2.1-2.1 2.1L9.9 14l2.1-2.1 2.1 2.1 1.5-1.4z" /></svg>;
});