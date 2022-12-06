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
    <div>This is inspection {params.inspectionId} for {details.id} </div>
  )
}
