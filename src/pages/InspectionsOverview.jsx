import React from "react";
import axios from "axios";

class InspectionsOverview extends React.Component {
  state = {
    inspections: [],
    loadError: false
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
          loadError: true
        });
      });
  };

  componentDidMount() {
    this.getInspections();
  };

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default InspectionsOverview;