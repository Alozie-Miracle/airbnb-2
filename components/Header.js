import React from "react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = ({ placeholder }) => {
  const [Input, setInput] = useState("");
  const [numberOfGuest, setnumberOfGuest] = useState(1);
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: Input,
        startDate,
        endDate,
        numberOfGuest,
      },
    });
  };

  const resetInput = () => {
    setInput("");
  };

  const HandleStartDate = (e) => {
    setstartDate(e.target.value);
  };

  const HandleEndDate = (e) => {
    setendDate(e.target.value);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          fill
          alt="logo"
          className="object-contain object-left"
          sizes={10}
        />
      </div>

      {/* center */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder || "Start your Search"}
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholde-gray-400"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer md:mx-2"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline curssor-pointer">Become a host</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
        </svg>
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className=" h-6 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className=" h-6 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {Input && (
        <div className="flex flex-col w-1/2 col-span-3 mx-auto mt-5">
          <div className="flex items-center justify-between border-b mb-4">
            <h2 className="text-2xl flex-grow border-semibold">
              Number of Guest
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 ml-5"
            >
              <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
            </svg>

            <input
              type="number"
              value={numberOfGuest}
              onChange={(e) => setnumberOfGuest(e.target.value)}
              className="w-12 pl-2 text-lg outline-none text-red-400"
              min={1}
            />
          </div>
          <div className="flex items-center justify-between border-b mb-4">
            <h2 className="text-2xl flex-grow border-semibold">Start Date</h2>

            <input
              type="date"
              value={startDate}
              onChange={HandleStartDate}
              className="w-15 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex items-center justify-between border-b mb-4">
            <h2 className="text-2xl flex-grow border-semibold">End Date</h2>

            <input
              type="date"
              value={endDate}
              onChange={HandleEndDate}
              className="w-15 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex items-center">
            <button
              onClick={resetInput}
              className="flex-grow items-center text-gray-500 hover:bg-red-500 hover:text-white h-[40px] rounded-md shadow-sm"
            >
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow text-red-400 hover:bg-red-500 hover:text-white h-[40px] rounded-md shadow-sm"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
