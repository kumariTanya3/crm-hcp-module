/*
import FormSecond from "./formsecond";

function FormFirst() {
  return (
    <>
      <FormSecond />

      <div className="mt-6">
        <p className="text-gray-500">
          Interaction form will be built here.
        </p>
      </div>
    </>
  );
}

export default FormFirst;
*/

import FormSecond from "./formsecond";
import Details from "./details";
import SelectMaterial from "./selectmaterial";
import SelectSample from "./selectsample";
import HCPSentiment from "./hcpsentiment";
import Outcomes from "./outcoms";
import FollowUp from "./followup";
import AISuggest from "./aisuggest";

function FormFirst() {
  return (
    <>
      <FormSecond />

      <div className="mt-6 space-y-6">

        <Details />

        <SelectMaterial />

        <SelectSample />

        <HCPSentiment />

        <Outcomes />

        <FollowUp />

        <AISuggest />

      </div>
    </>
  );
}

export default FormFirst;