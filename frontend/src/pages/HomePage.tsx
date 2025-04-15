import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="bg-background flex justify-center items-center min-w-screen min-h-screen">
      <div className="w-[clamp(340px,75vw,627px)] h-[clamp(520px,70vw,550px)] space-y-4">
        <section className="w-full h-[75%] ">
          <div className="w-full h-[clamp(250px,40vw,280px)]">
            <div className="relative size-[clamp(52px,9vw,72px)] mx-auto mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <rect width="512" height="512" fill="transparent" />
                <rect x="64" y="96" width="256" height="32" fill="#888" />
                <rect x="64" y="160" width="256" height="32" fill="#888" />
                <rect x="64" y="224" width="160" height="32" fill="#888" />
                <g transform="scale(0.6) translate(220, 210)">
                  <path
                    d="M405.3 138.7c12.5-12.5 32.8-12.5 45.3 0l22.6 22.6c12.5 12.5 12.5 32.8 0 45.3L233.4 446.6 160 464l17.4-73.4L405.3 138.7z"
                    fill="#888"
                  />
                </g>
              </svg>
            </div>
            <div className="w-full h-[clamp(200px,30vw,250px)] text-center pt-10 md:pt-2">
              <h1 className="font-body font-semibold text-[clamp(30px,5vw,40px)] text-primary">
                Sentence Construction
              </h1>
              <p className="font-body font-light text-[clamp(17px,3vw,20px)] text-neutral5">
                {" "}
                Select the correct words to complete the sentence by arranging
                the provided options in the right order.
              </p>
            </div>
          </div>
          <div className="flex justify-around h-[110px]">
            <div className="text-center space-y-4 font-body font-medium w-[clamp(120px,25vw,180px)]">
              <h3 className=" text-[clamp(15px,1.8vw,20px)] truncate text-neutral8 ">
                Time Per Question
              </h3>
              <p className="text-[clamp(14px,2vw,18px)] text-neutral5">
                30 sec
              </p>
            </div>
            <div className="w-px my-2 bg-gray-300 h-[45%]" />
            <div className="text-center space-y-4 font-body font-medium w-[clamp(120px,25vw,180px)]">
              <h3 className=" text-[clamp(15px,1.8vw,20px)] text-neutral8 ">
                Total Questions
              </h3>
              <p className=" text-[clamp(14px,2vw,18px)] text-neutral5">10</p>
            </div>
            <div className="w-px my-2 bg-gray-300 h-[45%]" />
            <div className="text-center space-y-4 font-body font-medium w-[clamp(120px,25vw,180px)]">
              <h3 className=" text-[clamp(15px,1.8vw,20px)] text-neutral8 ">
                Coins
              </h3>
              <p className="text-[clamp(14px,2vw,18px)] text-neutral5">20 🟡</p>
            </div>
          </div>
        </section>
        <section className="flex justify-center space-x-10 h-[20%] items-start md:items-center">
          <div className="border border-secondary rounded-[8px] w-30 h-10.5 flex justify-center items-center btn z-1 cursor-pointer transition-transform duration-100 ease-out  hover:scale-105">
            <button>
              <p className="font-body font-medium text-[16px] text-secondary hover:text-white">
                Back
              </p>
            </button>
          </div>
          <Link to={"/questions"}>
            <div className="bg-secondary rounded-[8px] w-30 h-10.5 flex justify-center items-center cursor-pointer transition-transform duration-100 ease-out hover:scale-105">
              <button>
                <p className="font-body font-medium text-[16px] text-white ">
                  Start
                </p>
              </button>
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
