import mkemalSign from '../../images/mkemalSign.png';
import completed from '../../images/completed.png';
import { useEffect, useState } from 'react';
import desktopPhoneImage from '../../images/desktopPhoneImage.png';
import mobilePhoneImage from '../../images/mobilePhoneImage.png';

export function SignAndStamp() {
  const [showAnimation, setShowAnimation] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimation(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []); //

  return (
    <div className="flex flex-col sm:flex-row w-full pt-[56px] bg-white md:h-[613px]">
      <div className="w-full self-center justify-center flex mt-6">
        <div className="h-full relative">
          <img
            src={desktopPhoneImage}
            className="animate-slideIn hidden md:block h-[560px] w-[610px]"
          />
          <img
            src={mobilePhoneImage}
            className="animate-slideIn md:hidden block -mx-[5px] h-[352px] w-[384px]"
          />
          <img
            className={`absolute ${
              showAnimation ? 'animate-growUpFade' : 'hidden'
            } scale-75 sm:scale-100 animate-growUpFade sm:h-[26%] lg:h-[26%] top-[60%] right-[44%] sm:right-[65%] p-2`}
            src={mkemalSign}
          />
          <img
            className={`absolute  ${
              showAnimation ? 'animate-growUpFade' : 'hidden'
            } scale-75 sm:scale-100 lg:h-36 top-1/3 left-[58%]  sm:left-[65%] p-2`}
            src={completed}
            alt="Completed"
          />
        </div>
      </div>
      <div className="flex w-full self-center justify-center sm:text-end order-first sm:order-last animate-fadeIn px-6">
        <div className="flex max-w-[556px] w-full flex-col justify-center md:items-end items-center">
          <h2 className="text-[#0381ff] text-[16px] font-extrabold leading-5 font-customFont">
            Sign & Stamp
          </h2>
          <h2 className="font-bold pt-4 text-[32px] leading-10 font-customFont">
            One-Tap Focus{' '}
          </h2>
          <span className="pt-[22px] leading-7 font-customFont text-center md:text-end">
            Draw, scan or import your signature and stamp with a simple touch.
            Sign and stamp any document with just a single tap!
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
