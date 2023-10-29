import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../reduxStore/store";
import { baseURL } from "../../router";
import { Cart } from "../Cart/Cart";
import { NavButton } from "../NavButtons/NavButton";

export const Header: React.FC = () => {
  const totalAmount = useSelector((state: RootState) => state.addReducer.totalAmount);
  const [open, setOpen] = useState<boolean>(false);

  const onClickHandler = () => {
    setOpen(true);
  };



  return (
    <div className="w-screen flex flex-col">
      <Link to={`${baseURL}`}>
        <h1 className="bg-black w-screen text-xl text-white p-4">
          eComerce
        </h1>
      </Link>
      <div className="flex flex-col justify-around p-4 md:flex-row">
        <div>
          {/* img */}
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
         
          <div onClick={onClickHandler} className="flex items-center gap-2 cursor-pointer">
            <p  className="pointer">
              {totalAmount > 0 ? (
                <span>{totalAmount}</span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#000"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              )}
            </p>
            <p>
              Shopping Bag
              {open && <Cart openModal={open} setOpen={setOpen} />}
            </p>
          </div>
        </div>
      </div>
      <NavButton />
    </div>
  );
};
