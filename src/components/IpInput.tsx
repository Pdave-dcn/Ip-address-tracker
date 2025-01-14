const IpInput = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-2xl font-medium mb-5">
        IP Address Tracker
      </h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder=""
          className="w-52 h-8 outline-none p-6 rounded-l-xl"
        />
        <button
          type="button"
          aria-label="Submit button"
          className="p-6 h-8 bg-veryDarkGray flex rounded-r-xl"
        >
          <img
            src="images/icon-arrow.svg"
            alt="Arrow icon"
            className="self-center"
          />
        </button>
      </div>
    </div>
  );
};

export default IpInput;
