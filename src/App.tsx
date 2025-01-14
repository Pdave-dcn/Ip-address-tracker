import IpInput from "./components/IpInput";
import MapComponent from "./components/MapComponent";
function App() {
  return (
    <>
      <div className="font-rubik">
        <div className="relative">
          <div className="-mt-20 sm:mt-0">
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
          <div className="absolute inset-0 flex justify-center items-center z-[100]">
            <IpInput />
          </div>
        </div>
        <div className="">
          <MapComponent />
        </div>
      </div>
    </>
  );
}

export default App;
