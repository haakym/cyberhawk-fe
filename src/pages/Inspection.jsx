import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Inspection() {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost/api/inspections/${params.inspectionId}`)
      .then((response) => {
        if (response.data) {
          setDetails(response.data)
        }
      }).catch((error) => {
        console.error(error);
        setLoadError(true);
      });
  }, []);

  if (loadError) {
    return (
      <div>Cannot load data. Error contacting API.</div>
    );
  }
  
  return (
    <div>
      <h2 className="text-gray-900 font-bold text-4xl mb-4">
        Inspection: Turbine {details.turbine.name}
      </h2>
      <p>Performed on {details.date_time} by {details.pilot.name}</p>
      
      {/*
        // Display the a map component using the latitude and longitude of the windfarm

        <Map 
          latitude={details.turbine.windfarm.latitude}  
          longitude={details.turbine.windfarm.longitude}
        />
        
        // Display the component gradings that were performed on this inspection
        <ComponentGradingsList />
        this component would be a simple list of <ComponentGrading /> that would provide information
        on the Component part and the grading that it received on the inspection that is currently being
        viewed
      */}
    </div>
  )
}
