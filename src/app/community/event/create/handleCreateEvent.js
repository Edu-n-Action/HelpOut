"use client";

import Confirm from "@/components/common/confirm/confirm";
import { useState } from "react";
import UploadMaterials from "./uploadMaterials";
import SelectPeers from "./selectPeers";

const { default: FormEvent } = require("./formEvent");

const HandleCreateEvent = () => {
  const [step, setStep] = useState(0);

  return <SelectPeers setStep={setStep} step={step} />;

  // return <UploadMaterials setStep={setStep} step={step} />;
  // return <FormEvent setStep={setStep} step={step} />;

  //   switch (step) {
  //     case 0:
  //       return <FormEvent setStep={setStep} step={step} />;
  //     case 1:
  //       return <div></div>;
  //     case 2:
  //       <UploadMaterials setStep={setStep} step={step} />;
  //     default:
  //       return <Confirm message="Event Uploaded" buttonMessage="Home" href="/" />;
  //   }
};

export default HandleCreateEvent;
