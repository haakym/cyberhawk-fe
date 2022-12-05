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
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Date</td>
              <td>View</td>
            </tr>
          </thead>
          <tbody>
            {Object.keys(inspections).map(key => (
              <InspectionsTableRow key={key} id={key} details={inspections[key]} />
              ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default InspectionsTable;
