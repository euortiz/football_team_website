import YouTube from "react-youtube";

const LastGoals = () => (
  <div className=" flex-col w-screen sm:block hidden">
    <div className="flex flex-col sm:flex-row w-full bg-black">
      <div className="flex flex-row sm:w-1/3">
        <YouTube videoId="ruxSf_wKvyA" className="w-full h-full" />
      </div>
      <div className="flex flex-row sm:w-1/3">
        <YouTube videoId="P_thdul6Pkc" className="w-full h-full" />
      </div>
      <div className="flex flex-row sm:w-1/3">
        <YouTube videoId="bYlhX7H7eNk" className="w-full h-full" />
      </div>
    </div>
    <div className="flex flex-col sm:flex-row w-full bg-black">
      <div className="flex flex-row sm:w-1/3">
        <YouTube videoId="eQUp98vcN3M" className="w-full h-full" />
      </div>
      <div className="flex flex-row sm:w-1/3">
        <YouTube videoId="9RtKOWdW20o" className="w-full h-full" />
      </div>
      <div className="flex flex-row sm:w-1/3">
        <YouTube videoId="3z3p8sumvVY" className="w-full h-full" />
      </div>
    </div>
  </div>
);

export default LastGoals;
