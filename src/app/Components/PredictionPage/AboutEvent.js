import NoButton from "../../ui/NoButton";
import YesButton from "../../ui/YesButton";
import { ChevronRight } from "lucide-react";

const AboutEvent = () => {
  return (
    <div className=" text-white  rounded-lg w-full max-w-lg mx-auto space-y-6 mt-5">
      <h2 className="text-lg font-medium">About the Event</h2>
      <div className="grid grid-cols-4  gap-6 text-center text-[#9D9D9D]">
        {[
          { label: "Trader", value: "56" },
          { label: "Volume", value: "11.6k" },
          { label: "Yes", value: "68%" },
          { label: "No", value: "32%" },
        ].map((item, index) => (
          <div key={index} className="">
            <span className="text-lg font-normal">{item.label}</span>
            <p className="text-lg font-medium text-white">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="text-sm text-[#9D9D9D] ">
        {[
          { label: "Started", value: "05 March 2025, 02:30 PM" },
          { label: "Ending at", value: "05 March 2025, 09:30 PM" },
        ].map((item, index) => (
          <div key={index} className="space-y-1">
            <span className="text-lg font-normal">{item.label}</span>
            <p className="text-lg font-medium text-white">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="">
        {[
          { label: "Overview", description: "Information about event" },
          { label: "Source of truth", description: "Information about source of truth" },
          { label: "Rules", description: "Terms and Conditions" },
        ].map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2 ">
            <div>
              <h3 className="text-sm text-[#9D9D9D]">{item.label}</h3>
              <p className="text-lg font-medium">{item.description}</p>
            </div>
            <ChevronRight className="text-white" />
          </div>
        ))}
      </div>
      <div className="bg-[#333333] p-5 rounded-lg mt-4">
        <div className="flex justify-between gap-4">
        <YesButton/>
        <NoButton/>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
