import React from "react";
import PropTypes from "prop-types";
import InspectionsTableRow from "./InspectionsTableRow";

class InspectionsTable extends React.Component {
  static propTypes = {
    inspections: PropTypes.array,
    inspectionsLoadError: PropTypes.bool
  };

  render() {
    const inspections = this.props.inspections;
    const inspectionsLoadError = this.props.inspectionsLoadError;

    if (inspectionsLoadError) {
      return (
        <div>Cannot load data. Error contacting API.</div>
      );
    }

    if (!inspections.length) {
      return (
        <div className="alert alert-info">No inspections found.</div>
      );
    }

    return (
      <table className="border-collapse border-2 border-gray-500">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2 text-gray-800">ID</th>
            <th className="border border-gray-400 px-4 py-2 text-gray-800">Wind farm</th>
            <th className="border border-gray-400 px-4 py-2 text-gray-800">Turbine</th>
            <th className="border border-gray-400 px-4 py-2 text-gray-800">Date</th>
            <th className="border border-gray-400 px-4 py-2 text-gray-800">Pilot</th>
            <th className="border border-gray-400 px-4 py-2 text-gray-800">Gradings performed</th>
            <th className="border border-gray-400 px-4 py-2 text-gray-800">View</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(inspections).map(key => (
            <InspectionsTableRow key={key} id={key} details={inspections[key]} />
            ))}
        </tbody>
      </table>
    )
  }
}

export default InspectionsTable;
