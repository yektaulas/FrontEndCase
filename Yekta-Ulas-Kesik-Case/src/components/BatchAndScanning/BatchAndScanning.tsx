import blackPhone from '../../images/blackScreenPhone.png';
import page1 from '../../images/page1.png';
import { useEffect, useState } from 'react';

export function BatchAndScanning() {
  const [showFirstAnimation, setShowFirstAnimation] = useState<boolean>(false);
  const [showSecondAnimation, setShowSecondAnimation] =
    useState<boolean>(false);
  const [showThirdAnimation, setShowThirdAnimation] = useState<boolean>(false);

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setShowFirstAnimation(true);
      const secondTimeout = setTimeout(() => {
        setShowSecondAnimation(true);
        const thirdTimeout = setTimeout(() => {
          setShowThirdAnimation(true);
        }, 250);
        return () => clearTimeout(thirdTimeout);
      }, 250);
      return () => clearTimeout(secondTimeout);
    }, 500);
    return () => clearTimeout(firstTimeout);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row w-full pt-[56px] bg-white md:h-[613px]">
      <div className="md:w-full self-center justify-center flex  z-0  md-0 relative p-4 md:p-0 md:h-auto w-[293px]">
        <img className="relative animate-slideIn " src={blackPhone} />
        <img
          className={`absolute top-[27%] p-8 sm:p-0 z-30  ${
            showThirdAnimation ? 'animate-slideIn' : 'hidden'
          }   scale-[105%] mt-1`}
          src={page1}
        />
        <img
          className={`absolute top-[23%] p-8 sm:p-0 z-20 ${
            showSecondAnimation ? 'animate-slideIn' : 'hidden'
          }   scale-[104%] mt-2`}
          src={page1}
        />
        <img
          className={`absolute top-[20%] p-8 sm:p-0 z-10   ${
            showFirstAnimation ? 'animate-slideIn' : 'hidden'
          } scale-[103%] mt-3 `}
          src={page1}
        />
      </div>
      <div className="flex w-full self-center justify-center sm:text-end order-first sm:order-last animate-fadeIn px-6 text-center">
        <div className="flex max-w-[556px] w-full flex-col justify-center md:items-end items-center">
          <h2 className="text-[#0381ff] text-[16px] font-extrabold leading-5 font-customFont">
            Batch Scanning
          </h2>
          <h2 className="font-bold pt-4 text-[32px] leading-10">
            Multi Page Scan
          </h2>
          <span className="pt-[22px] leading-7">
            Scan multiple pages or documents in multiple-scanning mode. Batch
            all scans as a single document.
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
