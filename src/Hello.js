import React from "react";
import componentQueries from "react-component-queries";

const columnsQueryHelper = window => ({ width }) => {
  if (!window || window.innerWidth < 800) {
    return 1;
  } else {
    return width < 300 ? 3 : width < 500 ? 4 : 5;
  }
};

const columnsQuery = window => size => ({
  columns: columnsQueryHelper(window)(size)
});

const Hello = ({ name, columns }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{columns} columns</p>
    </div>
  );
};

export default componentQueries(columnsQuery(window))(Hello);
