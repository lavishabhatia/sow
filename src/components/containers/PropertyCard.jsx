import React from "react";

const PropertyCard = ({ image, title, description }) => {
  return (
    <article
      className="max-w-sm bg-white shadow-lg overflow-hidden"
      itemScope
      itemType="https://schema.org/RealEstateAgent"
    >
      <img
        src={image}
        alt={title}
        className="h-[292px] w-[391px] object-cover"
        loading="lazy"
      />
      <div className="px-[24px] pt-[33px]">
        <p
          className="text-foreground text-[16px] font-normal leading-6"
          itemProp="description"
        >
          {description}
        </p>
      </div>
      <div className="mt-[34px] flex items-center justify-start bg-secondary">
        <div
          className="text-[22px] px-[24px] my-[24px] font-normal leading-[100%] text-foreground"
          itemProp="name"
        >
          {title}
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
