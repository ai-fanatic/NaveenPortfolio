import React from "react";

const ResumeProfile = ({ marginBottom }) => {
  return (
    <div className={`w-8 h-8 ${marginBottom}`}>
      <a
        href="pages/NaveenChatlapalli_Resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          className="dark:text-white text-dark transition-all duration-300 ease-in-out transform translate-y-0 dark:opacity-50 fill-current dark:hover:opacity-100 hover:-translate-y-1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path d="M19.5,0h-15C3.673,0,3,0.673,3,1.5v21C3,23.327,3.673,24,4.5,24h15c0.827,0,1.5-0.673,1.5-1.5v-21C21,0.673,20.327,0,19.5,0z M12,22.125c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75S12.414,22.125,12,22.125z M19,20H5v-16h14V20z M7,5h10v2H7V5z M7,9h10v2H7V9z"></path>
        </svg>
      </a>
    </div>
  );
};

export default ResumeProfile;
