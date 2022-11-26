const StrategicPlace = () => {
  return (
    <div className="main-location mx-auto container mt-6 lg:mt-12 w-full text-center md:text-left max-width-[100rem]">
      <div className="md:grid md:grid-cols-5 lg:mb-40">
        <div className="content-left relative pt-20 px-11 col-span-3 ">
          <h2 className="text-lg lg:text-4xl font-semibold text-gray-600 ">
            The
            <span className="text-maximumBlue text-2xl lg:tracking-tight font-extrabold lg:text-6xl mx-1 lg:mx-4">
              strategic
            </span>
            homestay in <br className="mb-2" />
            <div className="w-full h-50 overflow-hidden">
              <div className="main-content-text mt-1 title-font font-extrabold text-4xl md:text-5xl lg:text-8xl text-transparent text-zinc-800">
                Port Dickson
              </div>
            </div>
          </h2>
          <p className="text-gray-500 tracking-wide font-semibold text-[0.9rem] mt-2">
            - 4 minutes to the beach
            <br />
            - 3 minutes to the hospital <br />
            - 2 minutes to the McDonald&apos;s <br />
          </p>
          <div className="absolute -bottom-10 md:bottom-10 right-10 text-gray-400 text-xs float-right">
            based on Google map
          </div>
        </div>
        <div className="col-span-2 overflow-hidden">
          <div className="content-right flex justify-center py-10">
            <iframe
              className="border-0 mt-6 aspect-video lg:overflow-hidden mx-6 lg:rounded-lg lg:w-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1993.048515417508!2d101.85464963425447!3d2.474808281170744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdf77fbf9bcc17%3A0x573234c80a0083d7!2sCozy%20%26%20Sweet%20Homestay!5e0!3m2!1sen!2smy!4v1640871664571!5m2!1sen!2smy"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicPlace;
