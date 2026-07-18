import { useState } from "react";

import Card from "../same/card";
import Section from "../same/section";

import Text from "../same/text";
import Select from "../same/select";
import DateField from "../same/date";
import TimeField from "../same/time";

function Details() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("09:00");

  return (
    <Card>
      <Section title="Interaction Details">

        <div className="grid grid-cols-2 gap-5">

          <Text
            label="HCP Name"
            placeholder="Search or select HCP..."
          />

          <Select
            label="Interaction Type"
            options={[
              "Meeting",
              "Call",
              "Email",
              "Conference",
            ]}
          />

          <DateField
            label="Date"
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />

          <TimeField
            label="Time"
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />

        </div>

      </Section>
    </Card>
  );
}

export default Details;