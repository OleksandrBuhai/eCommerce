import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reduxStore/store";
import { sliderData } from "../../assets/data/dataStore";
import { nextSlide, prevSlide, dotSlide } from "../../reduxStore/sliderSlice/sliderSlice";

export const Slider: React.FC = () => {
  const sliderIndex = useSelector((state: RootState) => state.sliderReducer.value);
  const dispatch = useDispatch();

  const nextSlideHandler = () => dispatch(nextSlide({ id: sliderIndex + 1 }));
  const prevSlideHandler = () => dispatch(prevSlide({ id: sliderIndex - 1 }));

  return (
    <div className="relative">
      <div>
        {sliderData?.map((el) => (
          <div key={el.id} className={`opacity-${parseInt(el.id) === sliderIndex ? "100" : "0"} duration-700 ease-in-out scale-${parseInt(el.id) === sliderIndex ? "100" : "95"}`}>
            {parseInt(el.id) === sliderIndex && (
              <div>
                <img className={`sm:h-[30rem] md:h-[40rem] lg:h-[50rem] xl:h-[60rem] w-full`} src={el.img} alt="shoes" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-12 left-[45%]">
        {sliderData.map((dot, index) => (
          <div className="mr-4" key={dot.id}>
            <div
              className={
                index === sliderIndex
                  ? "bg-red-300 rounded-full p-2 cursor-pointer"
                  : "bg-white rounded-full p-2 cursor-pointer"
              }
              onClick={() => dispatch(dotSlide({ id: index }))}
            ></div>
          </div>
        ))}
      </div>
      <div>
        <button className="absolute top-[50%] right-4" onClick={nextSlideHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
        <button className="absolute top-[50%] left-4" onClick={prevSlideHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};
