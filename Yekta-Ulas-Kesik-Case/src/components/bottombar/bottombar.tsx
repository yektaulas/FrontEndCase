import '../bottombar/circle-animations.css';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DocScanner from '../SvgComponents/docScanner';
import SignStampIcon from '../SvgComponents/signStamp';
import BatchScanningIcon from '../SvgComponents/batchScanning';
import AdvancedFiltersIcon from '../SvgComponents/advancedFilters';
import ExportShareIcon from '../SvgComponents/exportShare';

export function BottomBar() {
  const circleDocumentScannerRef = useRef<SVGCircleElement>(null);
  const circleSignAndStampScannerRef = useRef<SVGCircleElement>(null);
  const circleBatchScanningRef = useRef<SVGCircleElement>(null);
  const circleAdvancedFiltersRef = useRef<SVGCircleElement>(null);
  const circleExportAndShareRef = useRef<SVGCircleElement>(null);

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-full bg-white z-50 relative">
      <div className="flex overflow-x-auto space-x-0.5 scroll-smooth h-[124px]">
        <Link
          to="/document_scanner"
          className={`flex flex-row p-4 group text-white rounded duration-300 border-e border-color-customBlue min-w-[301px] w-full justify-center items-center
                ${
                  currentPath == '/document_scanner'
                    ? 'bg-customBlue'
                    : 'bg-white'
                }`}
        >
          <div className="flex flex-row font-semibold group text-black justify-center items-center">
            <DocScanner
              circleDocumentScannerRef={circleDocumentScannerRef}
              currentPath={currentPath}
            />
            <span className="self-center ml-4">Document Scanner</span>
          </div>
        </Link>
        <Link
          to="/sign_stamp"
          className={`flex flex-row p-4 group  text-white  rounded w-full duration-300  border-e border-color-customBlue min-w-[301px] h-[124px] justify-center items-center
                  ${
                    currentPath == '/sign_stamp' ? 'bg-customBlue' : 'bg-white'
                  }`}
        >
          <div className="flex flex-row font-semibold group text-black justify-center items-center relative">
            <div className="flex flex-row relative justify-center items-center">
              <SignStampIcon
                circleSignAndStampScannerRef={circleSignAndStampScannerRef}
                currentPath={currentPath}
              />
            </div>

            <span className="self-center ml-4">Sign & Stamp</span>
          </div>
        </Link>
        <Link
          to="/batch_scanner"
          className={`flex flex-row p-4 group text-white  rounded w-full  duration-300  border-e border-color-customBlue min-w-[301px] h-[124px] justify-center items-center
                ${
                  currentPath == '/batch_scanner' ? 'bg-customBlue' : 'bg-white'
                } `}
        >
          <div className="flex flex-row font-semibold group text-black justify-center items-center self-center relative">
            <div className="flex flex-row relative justify-center items-center">
              <BatchScanningIcon
                circleBatchScanningRef={circleBatchScanningRef}
                currentPath={currentPath}
              />
            </div>

            <span className="self-center ml-4">Batch Scanning</span>
          </div>
        </Link>
        <Link
          to="/advanced_filters"
          className={`flex flex-row p-4 group text-white  rounded w-full duration-300  border-e border-color-customBlue min-w-[301px] h-[124px] justify-center items-center
               ${
                 currentPath == '/advanced_filters'
                   ? 'bg-customBlue'
                   : 'bg-white'
               }`}
        >
          <div className="flex flex-row font-semibold group text-black justify-center items-center self-center relative z-50">
            <div className="flex flex-row relative justify-center items-center">
              <AdvancedFiltersIcon
                circleAdvancedFiltersRef={circleAdvancedFiltersRef}
                currentPath={currentPath}
              />
            </div>
            <span className="self-center ml-4">Advanved Filters</span>
          </div>
        </Link>
        <Link
          to="/export_share"
          className={`flex flex-row p-4 group text-white rounded w-full  duration-300 min-w-[301px] h-[124px] justify-center items-center
                 ${
                   currentPath == '/export_share' ? 'bg-customBlue' : 'bg-white'
                 }`}
        >
          <div className="flex flex-row font-semibold group text-black justify-center items-center self-center relative">
            <div className="flex flex-row relative justify-center items-center">
              <ExportShareIcon
                circleExportAndShareRef={circleExportAndShareRef}
                currentPath={currentPath}
              />
            </div>
            <span className="self-center ml-4">Export & Share</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
