'use client'
import React from "react";
import { useState } from 'react';

const Application = () => {
  // Initialization with Dummy Data
  const [applicant,setApplicant]= useState("Ballu");
  const [accepted,setAccepted]= useState(false);
  const [rejected,setRejected]= useState(false);
  const [onhold,setHold]= useState(true);
  const [sop,setSop]= useState("Man kiya");


  function accept() {
    setAccepted(true);
    setRejected(false);
    setHold(false)
  }
  function reject() {
    setRejected(true);
    setHold(false)
    setAccepted(false);
  }
  function hold(){
    setHold(true)
    setRejected(true);
    setAccepted(false);
  }


  return <p>
    Applicant's Name: {applicant}
    <>SOP: {sop}</>
    <button onClick={accept}>{accepted? "Accepted":"Accept"}</button>
    <button onClick={reject}>{rejected? "Rejected":"Reject"}</button>
    <button onClick={hold}>{onhold? "On Hold":"hold"}</button>
  </p>;
};

const ApplicationReview = () =>{
  return <>
    <h1>Application Review</h1>
    <Application /></>;
}

export default ApplicationReview;
