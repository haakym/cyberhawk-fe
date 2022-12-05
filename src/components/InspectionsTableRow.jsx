import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class InspectionsTableRow extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      id: PropTypes.number
    })
  };

  render() {
    const {id} = this.props.details;

    return (
      <tr>
        <td>{id}</td>
        <td>le date</td>
        <td>
          <Link to={`inspections/${id}`}>Link</Link>
        </td>
      </tr>
    )
  }
}

export default InspectionsTableRow;