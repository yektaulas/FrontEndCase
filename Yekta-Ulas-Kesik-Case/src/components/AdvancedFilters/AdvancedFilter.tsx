import advancedfiltersphone from '../../images/advancedfiltersphone.png';
import leftBar from '../../images/Left Bar.png';
import rightBar from '../../images/Right Bar.png';
import page1 from '../../images/page1.png';
import { useEffect, useState } from 'react';

export function AdvancedFilters() {
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []); //

  const phoneBackground = {
    backgroundImage: `url('../../src/images/advancedfiltersphone.png')`,
    backgroundSize: 'cover',
  };

  return (
    <div className="flex flex-col sm:flex-row w-full pt-[56px] bg-white md:h-[613px]">
      <div className="w-full self-center justify-center flex  z-0  md-0  p-4 md:p-0 relative">
        <div
          style={phoneBackground}
          className="relative md:w-[375px] md:h-[483px] w-[244px] h-[300px] animate-slideIn"
        >
                    <img
            className={`${
              showAnimation ? 'animate-growUpFade' : 'hidden'
            } absolute left-[96%] top-[25%] z-50 h-[70%]`}
            src={rightBar}
          />
          <img
            className={`${
              showAnimation ? 'animate-growUpFade' : 'hidden'
            } absolute right-[96%] top-[25%] z-50 h-[70%]`}
            src={leftBar}
          />
        </div>
      </div>

      <div className="flex w-full self-center justify-center sm:text-end order-first sm:order-last animate-fadeIn">
        <div className="flex max-w-[556px] w-full flex-col justify-center md:items-end items-center">
          <h2 className="text-[#0381ff] text-[16px] font-extrabold leading-5 font-customFont">
            Advanced Filters
          </h2>
          <h2 className="font-bold pt-4 text-[32px] leading-10 font-customFont">
            Unique Filters
          </h2>
          <span className="pt-[22px] leading-7 font-customFont text-center md:text-end">
            Apply advanced filters and enhance quality with various custom made
            filters. Manually edit brightness and contrast by your own choice on
            the custom filters.
          </span>
          <div className="flex justify-end mt-6">
            <button className="ring-2 ring-gray-200 px-4 py-[10px]  hover:bg-[#c7d5e3]  hover:ring-2 hover:scale-105 duration-300  hover:ring-gray-400 hover:ring-inset">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
