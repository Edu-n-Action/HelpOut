"use client";

import { useState } from "react";
import DonationBox from "./DonationBox";
import Donate from "./Donate";
import ThankYou from "./ThankYou";

const Page = ({
  data = {
    header: "",
    profilePicture: "",
    category: "volunteering",
    qr: "",
    account: "12i12312301209",
    title: "Donasi Kampung Pemulung Yogyakarta",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus in arcu eu lacinia. Nulla dapibus arcu ac eros molestie dapibus. Fusce lobortis purus sed purus dignissim, eu consectetur ligula scelerisque. Maecenas euismod velit id cursus gravida. Mauris at velit eget augue posuere eleifend.",
  },
}) => {
  const [step, setStep] = useState(0);
  switch (step) {
    case 0:
      return <DonationBox data={data} setStep={setStep} step={step} />;
    case 1:
      return <Donate data={data} setStep={setStep} step={step} />;
    default:
      return <ThankYou data={data} />;
  }
};

export default Page;
