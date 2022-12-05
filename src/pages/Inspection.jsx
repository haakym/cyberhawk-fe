import React from "react";
import { useParams } from 'react-router-dom';

export default function Inspection() {
  const params = useParams();

  return (
    <div>This is inspection {params.inspectionId} </div>
  )
}