import desktopPhoneImage from '../../images/desktopPhoneImage.png';
import mobilePhoneImage from '../../images/mobilePhoneImage.png';

export function DocumentScanner() {
  return (
    <div className="flex flex-col sm:flex-row w-full pt-[56px] bg-white md:h-[613px]">
      <div className="w-full self-center justify-center flex h-[374px] md:h-auto">
        <img
          src={desktopPhoneImage}
          className="animate-slideIn hidden md:block h-[560px] w-[610px]"
        />
        <img
          src={mobilePhoneImage}
          className="animate-slideIn md:hidden block -mx-[5px] h-[352px] w-[384px]"
        />
      </div>
      <div className="flex w-full bg-white self-center justify-center sm:text-end order-first sm:order-last animate-fadeIn px-6 text-center">
        <div className="flex max-w-[556px] w-full flex-col justify-center md:items-end items-center">
          <h2 className="text-[#0381ff] text-[16px] font-extrabold leading-5 font-customFont">
            DOCUMENT SCANNER
          </h2>
          <h2 className="font-bold pt-4 text-[32px] leading-10">
            Scan with Ease
          </h2>
          <span className="pt-[22px] leading-7">
            Scan any document instantly with your mobile device by just a few
            steps. Save as PDF,JPG,ZIP,TXT and Word format.
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
