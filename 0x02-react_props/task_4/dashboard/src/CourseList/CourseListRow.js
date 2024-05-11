import React from "react";

import PropTypes from "prop-types";
const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  // Check if isHeader is true
  if (isHeader) {
    return (
      <tr>
        {/* check if textSecondCell is null */}
        {textSecondCell === null ? (
          <th colSpan="2">{textFirstCell} </th>
        ) : (
          <>
            <th>{textFirstCell} </th>
            <th>{textSecondCell} </th>
          </>
        )}
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{textFirstCell} </td>
        <td>{textSecondCell} </td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

export default CourseListRow;
