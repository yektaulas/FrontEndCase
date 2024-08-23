import { RefObject } from "react";

export default function DocScanner({circleDocumentScannerRef, currentPath}: {circleDocumentScannerRef: RefObject<SVGCircleElement>, currentPath:string} ) {
    return (
        <svg
              className="duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 56"
              width="56"
              height="56"
            >
              <circle
                cx="28"
                cy="28"
                r="27.5"
                fill="black"
                stroke="text-gray-400"
                strokeWidth="2"
                className="initial-circle"
              ></circle>
              <circle
                ref={circleDocumentScannerRef}
                cx="28"
                cy="28"
                r="27.5"
                fill="white"
                stroke="#3498db"
                strokeWidth="2"
                style={{
                  strokeDashoffset:
                    currentPath === '/document_scanner' ? 0 : 180,
                }}
                className={`hover-circle ${
                  currentPath === '/document_scanner'
                    ? 'animate-drawCircleSpinnerIn'
                    : ''
                }`}
              ></circle>
              <path d="M22.6461 38.4933H33.3537C35.5133 38.4933 36.6283 37.3582 36.6283 35.1886V26.1986H29.0948C27.8392 26.1986 27.2365 25.596 27.2365 24.3404V16.7265H22.6461C20.4966 16.7265 19.3716 17.8616 19.3716 20.0413V35.1886C19.3716 37.3582 20.4966 38.4933 22.6461 38.4933ZM29.2856 24.7321H36.5278C36.4676 24.2701 36.1361 23.8382 35.6138 23.3058L30.1194 17.7411C29.6171 17.2288 29.1651 16.8873 28.7031 16.827V24.1495C28.7131 24.5413 28.9039 24.7321 29.2856 24.7321ZM24.1026 30.6484C23.6707 30.6484 23.3593 30.337 23.3593 29.9353C23.3593 29.5335 23.6707 29.2221 24.1026 29.2221H31.9274C32.3392 29.2221 32.6606 29.5335 32.6606 29.9353C32.6606 30.337 32.3392 30.6484 31.9274 30.6484H24.1026ZM24.1026 34.4152C23.6707 34.4152 23.3593 34.1038 23.3593 33.702C23.3593 33.3002 23.6707 32.9888 24.1026 32.9888H31.9274C32.3392 32.9888 32.6606 33.3002 32.6606 33.702C32.6606 34.1038 32.3392 34.4152 31.9274 34.4152H24.1026Z" />
            </svg>
    );
}