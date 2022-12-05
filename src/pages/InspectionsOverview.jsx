import React from "react";
import axios from "axios";
import InspectionsTable from "../components/InspectionsTable";

class InspectionsOverview extends React.Component {
  state = {
    inspections: [],
    inspectionsloadError: false
  };

  getInspections = () => {
    axios.get('http://localhost/api/inspections')
      .then((response) => {
        if (response.data) {
          this.setState({ inspections: response.data });
        }
      }).catch((error) => {
        console.error(error);
        this.setState({
          inspectionsloadError: true
        });
      });
  };

  componentDidMount() {
    this.getInspections();
  };

  render() {
    return (
      <div>
        <InspectionsTable
          inspections={this.state.inspections}
          inspectionsLoadError={this.state.inspectionsLoadError}
        />
      </div>
    )
  }
}

export default InspectionsOverview;