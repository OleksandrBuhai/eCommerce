import { useState } from "react";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxStore/store";
import { Link } from "react-router-dom";
import { NavButton } from "../NavButtons/NavButton";
import { logout } from "../../reduxStore/authSlice/authSlice";

export const Header: React.FC = () => {
  const totalAmount = useSelector((state: RootState) => state.addReducer.totalAmount);
  const [open, setOpen] = useState<boolean>(false);

  const onClickHandler = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  return (
    <div className="w-screen flex flex-col">
      <Link to={"/"}>
        <h1 className="bg-black w-screen text-xl text-white p-4">
          eComerce
        </h1>
      </Link>
      <div className="flex flex-col justify-around p-4 md:flex-row">
        <div>
          {/* img */}
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <p className="cursor-pointer" onClick={() => { dispatch(logout()) }}>
            Log out
          </p>
          <div className="flex items-center gap-2">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </p>
            <p>Wish List</p>
          </div>
          <div className="flex items-center gap-2">
            <p onClick={onClickHandler} className="pointer">
              {totalAmount > 0 ? (
                <span>{totalAmount}</span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#000"
                  className="w-6 h-6 cursor-pointer"
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
