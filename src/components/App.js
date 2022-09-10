import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from "./components/Heading";
import InputQuery from "./components/InputQuery";
import SubHeading from "./components/SubHeading";
import SubmitButton from "./SubmitButton";
const App = () => {
  return (
    <div id="main">
      <Heading/>
      <InputQuery/>
      <SubHeading/>
      <SubmitButton/>
    </div>
  )
}

export default App;

