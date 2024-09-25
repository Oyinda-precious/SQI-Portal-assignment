import React from "react";

const Sectionsix = () => {
  return (
    <div>
      <section className="sec6">
        <div className="campustour">
          <div className="campuss">
            <div className="videoo">
              <iframe
                width="371"
                height="209"
                src="https://www.youtube.com/embed/HgC6bjMbqpw"
                title="Campus Tour | SQI College of ICT, Ibadan"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="aboutcampus">
              <strong className="thetour">Take a Tour </strong>
              <p className="campcontent">
                Our campus is a living centre for innovation and creativity for
                sustainability. We love showing students our campus and allowing
                them to see, hear and feel the excitement that comes with being
                part of the Central community which is an atmosphere that is
                open-minded, always exciting, and filled with academic
                excellence.
              </p>
              <div className="applynow">
                <a href="">Apply Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Sectionsix;
