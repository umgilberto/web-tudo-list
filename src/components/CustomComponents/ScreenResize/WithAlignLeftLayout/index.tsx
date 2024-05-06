import React from "react";

const WithAlignLeftLayout =
  (Component: React.FC) =>
  ({ ...props }) =>
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          paddingLeft: "20px",
        }}
      >
        <Component {...props} />
      </div>
    );
export default WithAlignLeftLayout;
