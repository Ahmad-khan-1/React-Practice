import React from "react";
import { useParams } from "react-router-dom";

const CostumerContact = () => {
  const { cid } = useParams();
  console.log(cid);

  return <div>Contact Details for Customer {cid}</div>;
};

export default CostumerContact;
