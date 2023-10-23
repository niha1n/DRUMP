import React from 'react';

function About() {
  return (
    <div className="home-wrapper   p-10 ">
      <div className="wrapper md:flex">
        <div className="trump md:w-1/2 ">
          <img
            className="mx-auto md:h-screen"
            src="https://www.seekpng.com/png/full/24-249195_donald-trump-cartoon-donald-trump-cartoon-png.png"
            alt=""
          />
        </div>
        <div className="about md:w-1/2 my-auto p-10 text-lg text-white leading-8 tracking-wider ">
          <h1 className="text-6xl my-10">
            About{' '}
            <span className="drump">
              D<span className="text-[#006300]">r</span>UMP
            </span>
          </h1>
          DRUMP is your gateway to the unpredictable and often amusing world of
          former President Donald Trump's quotes. This quirky website harnesses
          the{' '}
          <a
            href="https://www.tronalddump.io/"
            className="underline font-semibold"
          >
            TronaldDump API
          </a>{' '}
          to deliver random Trump quotes in a familiar tweet format, complete
          with the signature character limit. Whether you're seeking a chuckle,
          a dash of controversy, or just a snippet of Trump's distinctive
          rhetoric, DRUMP has got you covered. It's your one-stop destination to
          explore the witty, the head-scratching, and the unforgettable words of
          the 45th President of the United States. Dive into the world of
          Trump's tweets, one quote at a time, and experience the essence of his
          unique communication style.
        </div>
      </div>
    </div>
  );
}

export default About;
