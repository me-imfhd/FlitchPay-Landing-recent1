"use client";

import React, { useState } from "react";

const CodeTabs = ({
  pyFileName,
  jsFileName,
  goFileName,
  pyCode,
}: {
  pyFileName?: string;
  jsFileName?: string;
  goFileName?: string;
  pyCode?: React.ReactNode;
}) => {
  const [activeTab, setActiveTab] = useState("python");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const getCode = () => {
    switch (activeTab) {
      case "javascript":
        return "";
      case "python":
        return pyCode || "";
      case "go":
        return "";
    }
  };

  return (
    <>
      <div className="flex space-x-2 rounded-t-xl border-b border-b-[#30363D] bg-[#161B23] md:px-2 md:pr-24 md:pt-2">
        {pyFileName ? (
          <button
            className={`flex items-center gap-7 rounded px-4 py-2 pr-10 text-[14px] ${
              activeTab === "python"
                ? "border border-[#30363D] border-b-black  bg-[#0D1117] text-white"
                : "border border-transparent bg-transparent text-[#7D8590] "
            }`}
            onClick={() => handleTabClick("python")}
          >
            <PySvg /> {pyFileName}
          </button>
        ) : null}

        {jsFileName ? (
          <button
            className={`flex  items-center gap-2 rounded px-4  py-2 text-[14px] ${
              activeTab === "javascript"
                ? "border border-[#30363D] border-b-black  bg-[#0D1117] text-white"
                : "border border-transparent bg-transparent text-[#7D8590]"
            }`}
            onClick={() => handleTabClick("javascript")}
          >
            <JsSvg />
            {jsFileName}
          </button>
        ) : null}

        {goFileName ? (
          <button
            className={`flex items-center  gap-2 rounded   px-4 py-2 text-[14px] ${
              activeTab === "go"
                ? "border border-[#30363D] border-b-black  bg-[#0D1117] text-white"
                : "border border-transparent bg-transparent text-[#7D8590]"
            }`}
            onClick={() => handleTabClick("go")}
          >
            <GoSvg />
            {goFileName}
          </button>
        ) : null}
      </div>

      <div className="bg-[#0D1117] md:p-4 md:pb-2">{getCode()}</div>
    </>
  );
};

function PySvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
    >
      <path
        d="M10.5009 0.119023L11.1009 0.252357L11.5876 0.42569L11.9809 0.62569L12.2809 0.839023L12.5076 1.06569L12.6743 1.29236L12.7809 1.51236L12.8476 1.71236L12.8743 1.88569L12.8876 2.01902L12.8809 2.10569V5.66569L12.8476 6.08569L12.7609 6.45236L12.6209 6.75902L12.4476 7.01236L12.2476 7.21902L12.0276 7.38569L11.7943 7.51236L11.5609 7.60569L11.3409 7.67236L11.1409 7.71902L10.9676 7.74569L10.8276 7.75902H6.8476L6.3876 7.79236L5.99427 7.88569L5.66094 8.03236L5.3876 8.21236L5.1676 8.42569L4.9876 8.65902L4.85427 8.89902L4.75427 9.14569L4.6876 9.37902L4.64094 9.59236L4.61427 9.77236L4.60094 9.91236V11.9524H3.11427L2.97427 11.9324L2.7876 11.8857L2.57427 11.8057L2.34094 11.6857L2.10094 11.5124L1.86094 11.2724L1.6276 10.9657L1.41427 10.5724L1.2276 10.0857L1.0876 9.49902L0.994271 8.79902L0.960938 7.97902L1.00094 7.16569L1.1076 6.47236L1.2676 5.89236L1.48094 5.41902L1.72094 5.03902L1.9876 4.74569L2.2676 4.52569L2.5476 4.36569L2.81427 4.25902L3.05427 4.19236L3.2676 4.15902L3.4276 4.15236H3.53427L3.57427 4.15902H9.01427V3.60569H5.12094L5.11427 1.77236L5.10094 1.52569L5.13427 1.29902L5.2076 1.09236L5.32094 0.90569L5.4876 0.732357L5.69427 0.579023L5.9476 0.44569L6.24094 0.32569L6.58094 0.22569L6.9676 0.14569L7.39427 0.0790234L7.8676 0.0390234L8.38094 0.0123568L8.94094 -0.000976562L9.78761 0.0323568L10.5009 0.119023ZM6.30094 1.43902L6.1476 1.65902L6.09427 1.93236L6.1476 2.20569L6.30094 2.43236L6.52094 2.57902L6.79427 2.63902L7.06761 2.57902L7.2876 2.43236L7.44094 2.20569L7.49427 1.93236L7.44094 1.65902L7.2876 1.43902L7.06761 1.29236L6.79427 1.23236L6.52094 1.29236L6.30094 1.43902ZM15.0276 4.07236L15.2143 4.11236L15.4276 4.19236L15.6609 4.31236L15.9009 4.49236L16.1409 4.72569L16.3743 5.03902L16.5876 5.43236L16.7743 5.91902L16.9143 6.50569L17.0076 7.19902L17.0409 8.01902L17.0009 8.83902L16.8943 9.53236L16.7343 10.1057L16.5209 10.579L16.2809 10.959L16.0143 11.259L15.7343 11.479L15.4543 11.639L15.1876 11.7457L14.9476 11.8057L14.7343 11.839L14.5743 11.8524L14.4676 11.8457H8.9876V12.3924H12.8809L12.8876 14.2324L12.9009 14.4724L12.8676 14.699L12.7943 14.9057L12.6809 15.099L12.5143 15.2657L12.3076 15.4257L12.0543 15.559L11.7609 15.6724L11.4209 15.7724L11.0343 15.859L10.6076 15.919L10.1343 15.9657L9.62094 15.9924L9.06094 15.999L8.21427 15.9724L7.50094 15.879L6.90094 15.7457L6.41427 15.579L6.02094 15.379L5.72094 15.159L5.49427 14.9324L5.3276 14.7057L5.22094 14.4857L5.15427 14.2857L5.1276 14.119L5.11427 13.9857L5.12094 13.899V10.339L5.15427 9.91236L5.24094 9.55236L5.38094 9.24569L5.55427 8.99236L5.75427 8.77902L5.97427 8.61902L6.2076 8.48569L6.44094 8.39236L6.66094 8.32569L6.86094 8.28569L7.03427 8.25902L7.17427 8.24569L7.26094 8.23902H11.1543L11.6143 8.20569L12.0076 8.11236L12.3409 7.97236L12.6143 7.78569L12.8343 7.57236L13.0143 7.33902L13.1476 7.09902L13.2476 6.85902L13.3143 6.62569L13.3609 6.41236L13.3876 6.22569L13.4009 6.08569V4.04569H14.7943L14.8876 4.05236L15.0276 4.07236ZM10.7143 13.5724L10.5609 13.7924L10.5076 14.0657L10.5609 14.339L10.7143 14.559L10.9343 14.7124L11.2076 14.7657L11.4809 14.7124L11.7009 14.559L11.8543 14.339L11.9076 14.0657L11.8543 13.7924L11.7009 13.5724L11.4809 13.419L11.2076 13.3657L10.9343 13.419L10.7143 13.5724Z"
        fill="white"
      />
    </svg>
  );
}

function GoSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="6"
      viewBox="0 0 17 6"
      fill="none"
    >
      <path
        d="M1.5472 1.81974C1.51587 1.81974 1.50854 1.80441 1.52387 1.78041L1.68787 1.57041C1.7032 1.54707 1.74187 1.53174 1.7732 1.53174H4.55454C4.5852 1.53174 4.5932 1.55507 4.57787 1.57841L4.4452 1.78041C4.42987 1.80441 4.39054 1.82707 4.3672 1.82707L1.5472 1.81974ZM0.371202 2.53641C0.339869 2.53641 0.331869 2.52107 0.347869 2.49774L0.511202 2.28707C0.526535 2.26374 0.565869 2.24841 0.597202 2.24841H4.1492C4.18054 2.24841 4.19587 2.27174 4.18787 2.29507L4.12587 2.48174C4.11787 2.51307 4.0872 2.52841 4.05587 2.52841L0.371202 2.53641ZM2.25654 3.25307C2.2252 3.25307 2.2172 3.22974 2.2332 3.20641L2.34187 3.01174C2.3572 2.98841 2.38854 2.96507 2.41987 2.96507H3.97787C4.0092 2.96507 4.02454 2.98841 4.02454 3.01974L4.0092 3.20641C4.0092 3.23774 3.97787 3.26107 3.95454 3.26107L2.25654 3.25307ZM10.3425 1.67974C9.85187 1.80441 9.51654 1.89774 9.03387 2.02241C8.91654 2.05307 8.9092 2.06107 8.8072 1.94441C8.6912 1.81174 8.6052 1.72641 8.44187 1.64841C7.95054 1.40707 7.4752 1.47707 7.03187 1.76507C6.50187 2.10774 6.2292 2.61441 6.2372 3.24507C6.24453 3.86841 6.6732 4.38241 7.28854 4.46841C7.81854 4.53841 8.26187 4.35174 8.6132 3.95507C8.6832 3.86841 8.7452 3.77507 8.8232 3.66574H7.31987C7.15654 3.66574 7.1172 3.56441 7.17187 3.43241C7.2732 3.19107 7.45987 2.78574 7.5692 2.58307C7.5859 2.54553 7.61324 2.5137 7.64784 2.49154C7.68244 2.46939 7.72278 2.45786 7.76387 2.45841H10.5992C10.5839 2.66907 10.5839 2.87907 10.5525 3.08974C10.4718 3.64436 10.2521 4.16954 9.91387 4.61641C9.3532 5.35641 8.62054 5.81641 7.69387 5.94041C6.93054 6.04174 6.2212 5.89374 5.59854 5.42707C5.02187 4.99041 4.69454 4.41374 4.6092 3.69707C4.50787 2.84774 4.7572 2.08441 5.2712 1.41441C5.82454 0.690407 6.55654 0.230407 7.45254 0.0677403C8.18454 -0.065593 8.88587 0.0210735 9.51654 0.448407C9.92987 0.72174 10.2252 1.09507 10.4205 1.54707C10.4672 1.61707 10.4359 1.65641 10.3425 1.68041M12.9212 5.98774C12.2119 5.97174 11.5652 5.76907 11.0199 5.30174C10.5662 4.9194 10.2672 4.38505 10.1785 3.79841C10.0385 2.91841 10.2799 2.13907 10.8099 1.44574C11.3785 0.69774 12.0639 0.308407 12.9912 0.14574C13.7859 0.00574011 14.5339 0.0824066 15.2112 0.542407C15.8265 0.962407 16.2085 1.53174 16.3099 2.27907C16.4419 3.33107 16.1385 4.18774 15.4139 4.92041C14.8999 5.44241 14.2685 5.76907 13.5439 5.91707C13.3339 5.95707 13.1239 5.96374 12.9212 5.98774ZM14.7745 2.84107C14.7672 2.73907 14.7672 2.66107 14.7519 2.58307C14.6119 1.81174 13.9025 1.37641 13.1625 1.54707C12.4379 1.71041 11.9705 2.17041 11.7992 2.90241C11.6592 3.51041 11.9552 4.12574 12.5159 4.37574C12.9445 4.56241 13.3725 4.53841 13.7859 4.32907C14.4012 4.00907 14.7359 3.51041 14.7752 2.84041L14.7745 2.84107Z"
        fill="#7D8590"
      />
    </svg>
  );
}

function JsSvg() {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.339844 -0.000976562H16.3398V15.999H0.339844V-0.000976562ZM15.0292 12.183C14.9125 11.453 14.4372 10.8397 13.0272 10.2677C12.5365 10.0377 11.9912 9.87769 11.8292 9.50769C11.7685 9.28769 11.7592 9.16769 11.7985 9.03769C11.8985 8.60702 12.4085 8.47769 12.8085 8.59769C13.0685 8.67769 13.3085 8.87769 13.4592 9.19769C14.1485 8.74702 14.1485 8.74702 14.6292 8.44769C14.4492 8.16769 14.3598 8.04702 14.2385 7.92769C13.8185 7.45769 13.2592 7.21769 12.3492 7.23836L11.8792 7.29769C11.4285 7.40769 10.9992 7.64769 10.7392 7.96769C9.97918 8.82836 10.1985 10.3284 11.1185 10.9484C12.0285 11.6284 13.3592 11.7777 13.5292 12.4184C13.6892 13.1984 12.9492 13.4484 12.2185 13.3584C11.6778 13.2384 11.3785 12.9677 11.0485 12.4677L9.82851 13.1684C9.96851 13.4884 10.1285 13.6277 10.3685 13.9077C11.5285 15.0784 14.4285 15.0184 14.9492 13.2384C14.9685 13.1784 15.1092 12.7684 14.9985 12.1384L15.0292 12.183ZM9.04051 7.35302H7.54184C7.54184 8.64502 7.53584 9.92902 7.53584 11.223C7.53584 12.0444 7.57784 12.7984 7.44384 13.0304C7.22384 13.4897 6.65718 13.431 6.39984 13.3504C6.13584 13.2197 6.00184 13.0397 5.84651 12.7804C5.80451 12.7104 5.77318 12.6497 5.76184 12.6497L4.54518 13.3997C4.74851 13.8197 5.04518 14.181 5.42784 14.411C5.99784 14.751 6.76384 14.861 7.56584 14.681C8.08784 14.5304 8.53784 14.2204 8.77318 13.7404C9.11318 13.1204 9.04118 12.3604 9.03784 11.5097C9.04584 10.1404 9.03784 8.77036 9.03784 7.39036L9.04051 7.35302Z"
        fill="#7D8590"
      />
    </svg>
  );
}

export default CodeTabs;
