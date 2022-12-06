import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class InspectionsTableRow extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      id: PropTypes.number,
      date_time: PropTypes.string,
      pilot: PropTypes.object,
      component_gradings_count: PropTypes.number
    })
  };

  render() {
    const {id, date_time, pilot, component_gradings_count} = this.props.details;

    return (
      <tr>
        <td className="border border-gray-400 px-4 py-2 text-gray-800">{id}</td>
        <td className="border border-gray-400 px-4 py-2 text-gray-800">{date_time}</td>
        <td className="border border-gray-400 px-4 py-2 text-gray-800">{pilot.name}</td>
        <td className="border border-gray-400 px-4 py-2 text-gray-800">{component_gradings_count}</td>
        <td className="border border-gray-400 px-4 py-2 text-gray-800">
          <Link to={`inspections/${id}`} className="text-blue-500 hover:text-blue-800">View</Link>
        </td>
      </tr>
    )
  }
}

export default InspectionsTableRow;