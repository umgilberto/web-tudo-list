import React from "react";

const WithCentralizedLayout =
  (Component: React.FC) =>
  ({ ...props }) =>
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <Component {...props} />
      </div>
    );

export default WithCentralizedLayout;
