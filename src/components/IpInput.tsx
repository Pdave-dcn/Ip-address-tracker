import React from "react";

type IpAddressType = {
  tempIpAddress: string;
  setTempIpAddress: React.Dispatch<React.SetStateAction<string>>;
  setIpAddress: React.Dispatch<React.SetStateAction<string>>;
};

const IpInput = ({
  tempIpAddress,
  setTempIpAddress,
  setIpAddress,
}: IpAddressType) => {
  const handleSubmit = () => {
    const ipv4Regex =
      /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)$/;

    if (!ipv4Regex.test(tempIpAddress)) {
      alert("Please enter a valid IP address.");
      return;
    }

    setIpAddress(tempIpAddress);
  };

  return (
    <div className="flex flex-col items-center relative">
      <h1 className="text-white text-2xl font-medium mb-5">
        IP Address Tracker
      </h1>
      <form
        className="flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          placeholder="Enter an IP address"
          value={tempIpAddress}
          onChange={(e) => setTempIpAddress(e.target.value)}
          className="w-64 h-8 outline-none p-6 rounded-l-xl text-gray-800"
        />
        <button
          type="submit"
          aria-label="Submit button"
          className="p-6 h-8 bg-veryDarkGray flex rounded-r-xl"
        >
          <img
            src="images/icon-arrow.svg"
            alt="Arrow icon"
            className="self-center"
          />
        </button>
      </form>
    </div>
  );
};

export default IpInput;
