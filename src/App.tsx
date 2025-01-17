import { useState, useEffect } from "react";
import IpInput from "./components/IpInput";
import MapComponent from "./components/MapComponent";
import RenderData from "./components/RenderData";

function App() {
  const [tempIpAddress, setTempIpAddress] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [ipCoordinates, setIpCoordinates] = useState<[number, number]>([
    51.505, -0.09,
  ]);

  // Fetch user's IP address location on initial load
  useEffect(() => {
    const fetchUserIpLocation = async () => {
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_somyEdSGFlPOBua9ddWEndDB0ZEaC`
        );

        if (response.status >= 400) {
          throw new Error("Failed to fetch user's IP location.");
        }

        const json = await response.json();
        setIpCoordinates([json.location.lat, json.location.lng]);
      } catch (error) {
        console.error("Error fetching user's IP location:", error);
      }
    };

    fetchUserIpLocation();
  }, []);

  return (
    <>
      <div className="font-rubik">
        <div className="relative">
          <div className="-mt-14 sm:mt-0">
            <img
              src="images/pattern-bg-mobile.png"
              alt="Background image"
              className="bg-cover w-full sm:hidden"
            />
            <img
              src="images/pattern-bg-desktop.png"
              alt="Background image"
              className="hidden bg-cover w-full sm:block"
            />
          </div>
          <div className="absolute inset-0 -top-10 flex justify-center items-center z-[100]">
            <IpInput
              tempIpAddress={tempIpAddress}
              setTempIpAddress={setTempIpAddress}
              setIpAddress={setIpAddress}
            />
          </div>
          {ipAddress && (
            <div className="absolute top-52 left-1/2 transform -translate-x-1/2 z-[100] bg-white p-4 rounded-lg shadow-lg sm:top-32 lg:top-36 xl:top-52">
              <RenderData
                ipAddress={ipAddress}
                setIpCoordinates={setIpCoordinates}
              />
            </div>
          )}
        </div>
        <div className="relative -z-10">
          <MapComponent ipCoordinates={ipCoordinates} />
        </div>
      </div>
    </>
  );
}

export default App;
