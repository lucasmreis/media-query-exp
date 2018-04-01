import React from "react";
import componentQueries from "react-component-queries";

const columnsQuery = ({ width }) => ({
  columns: width < 300 ? 3 : width < 500 ? 4 : 5
});

const View = ({ columns }) => {
  console.log(`rendering desktop with ${columns} columns...`);
  return (
    <div>
      <h2>Desktop</h2>
      <p>{columns} columns</p>
    </div>
  );
};

export default componentQueries(columnsQuery)(View);
