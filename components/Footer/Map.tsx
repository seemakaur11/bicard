import React from "react";

const Map = () => {
  return (
    <div>
      <div className="m-0 w-full p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.064653070334!2d73.83981487423755!3d18.525980269010823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f84eb3ad5%3A0xc453c73fdf42345!2sBICARD%20Embedded%20Systems%20Course%20Training%20Institute!5e0!3m2!1sen!2sin!4v1714054581871!5m2!1sen!2sin"
          width="100%"
          height="250"
          id="map-frame"
          title="mc colony"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
