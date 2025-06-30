// Your TermRepContainer component

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import FirstTermRep from "./FirstTermRep";

const FirstTermRepCont = () => {
  const { id } = useParams();
  // const { examId, subjectId } = useParams(); // Get examId and subjectId from URL params

  return (
    <div>
      {/* You can include any additional components or layout for the TermRep page */}
      <FirstTermRep studentId={id} />
    </div>
  );
};

export default FirstTermRepCont;
