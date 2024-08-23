import pdfformat from '../../images/pdf.png';
import txtformat from '../../images/txtformat.png';
import jpgformat from '../../images/jpgformat.png';
import { useEffect, useState } from 'react';

export function ExportShare() {
  const phoneBackground = {
    backgroundImage: `url('../../src/images/lastphone.png')`,
    backgroundSize: 'cover',
  };
  const [showFirstAnimation, setShowFirstAnimation] = useState<boolean>(false);
  const [showSecondAnimation, setShowSecondAnimation] =
    useState<boolean>(false);
  const [showThirdAnimation, setShowThirdAnimation] = useState<boolean>(false);
  const [showFourthAnimation, setShowFourthAnimation] =
    useState<boolean>(false);
  const [showFifthAnimation, setShowFifthAnimation] = useState<boolean>(false);

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      setShowFirstAnimation(true);

      const secondTimeout = setTimeout(() => {
        setShowSecondAnimation(true);

        const thirdTimeout = setTimeout(() => {
          setShowThirdAnimation(true);

          const fourthTimeout = setTimeout(() => {
            setShowFourthAnimation(true);

            const fifthTimeout = setTimeout(() => {
              setShowFifthAnimation(true);
            }, 300);

            return () => clearTimeout(fifthTimeout);
          }, 300);

          return () => clearTimeout(fourthTimeout);
        }, 300);

        return () => clearTimeout(thirdTimeout);
      }, 300);

      return () => clearTimeout(secondTimeout);
    }, 300);

    return () => clearTimeout(firstTimeout);
  }, []);
  return (
    <div className="flex flex-col sm:flex-row w-full pt-[56px] bg-white md:h-[613px]">
      <div className="self-center justify-center flex  z-0  md-0 md:p-0 relative w-[237px] md:w-full pt-4">
        <div
          style={phoneBackground}
          className={`h-full relative ${
            showFirstAnimation ? 'animate-slideIn' : 'hidden'
          }`}
        >
          <div className="w-[244px] h-[300px] md:w-90 md:h-100"></div>
          <svg
            className={`absolute  right-[100%] w-9 top-[85%] rounded-md ${
              showSecondAnimation ? 'animate-slideLeftTop' : 'hidden'
            }`}
            width="24"
            height="34"
            viewBox="0 0 24 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.6726 12.8728L18.2278 17.1694L23.9735 0.303725L5.88565 2.25367L9.54382 6.67462C-8.17057 20.059 5.26762 33.8106 5.26762 33.8106C3.83964 23.925 6.98642 19.2328 14.6726 12.8728Z"
              fill="#3880F7"
            />
          </svg>
          <img
            className={`absolute left-[30%] top-[58%] z-50 w-32 ${
              showFourthAnimation ? 'animate-slideIn' : 'hidden'
            }`}
            src={jpgformat}
          />
          <img
            className={`absolute left-[68%] top-[61%] z-50 w-36 ${
              showFifthAnimation ? 'animate-slideRightTop' : 'hidden'
            }`}
            src={txtformat}
          />
          <img
            className={`absolute right-[70%] top-[61%] z-50 w-36 ${
              showThirdAnimation ? 'animate-slideLeftTop' : 'hidden'
            }`}
            src={pdfformat}
          />
        </div>
      </div>
      <div className="flex w-full self-center justify-center sm:text-end order-first sm:order-last animate-fadeIn px-6 text-center">
        <div className="flex max-w-[556px] w-full flex-col justify-center md:items-end items-center">
          <h2 className="text-[#0381ff] text-[16px] font-extrabold leading-5 font-customFont">
            Export & Share
          </h2>
          <h2 className="font-bold pt-4 text-[32px] leading-10">
            All-Round Conversion
          </h2>
          <span className="pt-[22px] leading-7">
            Export your scans as PDF,JPG,ZIP,TXT and Word.
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
