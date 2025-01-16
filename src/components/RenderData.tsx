import React, { useEffect, useState } from "react";

const useDataFetching = (ipAddress: string) => {
  const [location, setLocation] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [isp, setIsp] = useState(null);
  const [coordinates, setCoordinates] = useState<[number, number]>([
    51.505, -0.09,
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_somyEdSGFlPOBua9ddWEndDB0ZEaC&ipAddress=${ipAddress}`
        );

        if (response.status >= 400) {
          throw new Error("Server error");
        }

        const json = await response.json();
        setLocation(json.location.region);
        setTimezone(json.location.timezone);
        setIsp(json.isp);
        setCoordinates([json.location.lat, json.location.lng]);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [ipAddress]);

  return { location, timezone, isp, coordinates };
};

type RenderDataType = {
  ipAddress: string;
  setIpCoordinates: React.Dispatch<React.SetStateAction<[number, number]>>;
};

const RenderData = ({ ipAddress, setIpCoordinates }: RenderDataType) => {
  const { location, timezone, isp, coordinates } = useDataFetching(ipAddress);

  useEffect(() => {
    if (coordinates) {
      setIpCoordinates(coordinates);
    }
  }, [coordinates, setIpCoordinates]);
  return (
    <div className="bg-white flex flex-col items-center w-64 p-2 text-center sm:w-72 lg:flex-row lg:items-center lg:w-auto lg:gap-20 lg:text-left lg:text-nowrap lg:p-0">
      <div className="mb-5">
        <p className="text-xs font-semibold text-darkGray sm:text-base sm:font-medium">
          IP ADDRESS
        </p>
        <p className="text-veryDarkGray text-xl font-semibold sm:text-2xl">
          {ipAddress}
        </p>
      </div>
      <div className="mb-5">
        <p className="text-xs font-semibold text-darkGray sm:text-base sm:font-medium">
          LOCATION
        </p>
        <p className="text-veryDarkGray text-xl font-semibold sm:text-2xl">
          {location}
        </p>
      </div>
      <div className="mb-5">
        <p className="text-xs font-semibold text-darkGray sm:text-base sm:font-medium">
          TIMEZONE
        </p>
        <p className="text-veryDarkGray text-xl font-semibold sm:text-2xl">{`UTC ${timezone}`}</p>
      </div>
      <div className="mb-5">
        <p className="text-xs font-semibold text-darkGray sm:text-base sm:font-medium">
          ISP
        </p>
        <p className="text-veryDarkGray text-xl font-semibold sm:text-2xl">
          {isp}
        </p>
      </div>
    </div>
  );
};

export default RenderData;
