import React from "react";

export const FlexContainer = ({
  children,
  id,
  column,
  row,
  acenter,
  aevenly,
  astart,
  aend,
  astretch,
  aaround,
  abetween,
  jcenter,
  jevenly,
  jstart,
  jend,
  jstretch,
  jaround,
  jbetween,
  flex,
  gap,
  color,
}) => {
  const flexDirection = (column && "column") || (row && "row");

  const justifyContent =
    (jcenter && "center") ||
    (jevenly && "space-evenly") ||
    (jstart && "flex-start") ||
    (jend && "flex-end") ||
    (jstretch && "stretch") ||
    (jaround && "space-around") ||
    (jbetween && "space-between") ||
    "stretch";

  const alignItems =
    (acenter && "center") ||
    (aevenly && "space-evenly") ||
    (astart && "flex-start") ||
    (aend && "flex-end") ||
    (astretch && "stretch") ||
    (aaround && "space-around") ||
    (abetween && "space-between") ||
    "stretch";

  const style = {
    backgroundColor: color,
    color: "white",
    flex,
    display: "flex",
    gap,
    flexWrap: row && "wrap",
    flexDirection,
    justifyContent,
    alignItems,
  };
  return (
    <div style={style} id={id} children={children}>
      {children || (
        <>
          <p>I'm</p>
          <p>a</p>
          <p>{(column && "column") || (row && "row")}</p>
          <p>
            with justify-content property:{" "}
            {(jcenter && "center") ||
              (jevenly && "space-evenly") ||
              (jstart && "flex-start") ||
              (jend && "flex-end") ||
              (jstretch && "stretch") ||
              (jaround && "space-around") ||
              (jbetween && "space-between") ||
              "stretch"}
          </p>
          <p>
            with align-items property:{" "}
            {(acenter && "center") ||
              (aevenly && "space-evenly") ||
              (astart && "flex-start") ||
              (aend && "flex-end") ||
              (astretch && "stretch") ||
              (aaround && "space-around") ||
              (abetween && "space-between") ||
              "stretch"}
          </p>
        </>
      )}
    </div>
  );
};
