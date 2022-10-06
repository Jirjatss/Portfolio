import React from "react";

function CardEducation(props) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="imgedu" src={props.image} alt={props.school} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.school}</div>
            <p className="text-gray-700 text-base">{props.address}</p>
          </div>
          <div className="px-6 py-4">
            <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2" onClick={() => openInNewTab(props.url)}>
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardEducation;
