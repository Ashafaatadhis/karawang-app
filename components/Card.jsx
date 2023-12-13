import React from "react";

const Card = ({ image, title, content, id }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <div className="aspect-w-16 aspect-h-9 h-52">
        <img className="object-cover w-full h-full" src={image} alt={title} />
      </div>
      <div className="px-6 py-4">
        <a href={`/artikel/${id}`} className="font-bold text-xl mb-2">
          {title}
        </a>
        <div
          className="mt-5 text-justify"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
