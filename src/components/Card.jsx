import React from 'react';

function Card(props) {


  function getRandomNumber(min, max) {
    // Generate a random number between min (inclusive) and max (exclusive)
    const randomNum = Math.random() * (max - min) + min;
    // Round the number to one decimal place
    const roundedNum = Math.round(randomNum * 10) / 10;
    return roundedNum;
  }

  if(props.loading){
    return(
      <div className="loader bg-transparent mx-auto my-auto top-1/2 translate-y-[-50%]">
      <div class="banter-loader w-2/3 ">
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
        </div></div>

    )
  }

  return (
    <div className="card mx-auto my-auto top-1/2 translate-y-[-50%]">
      <div className="body">
        <span className="username ">
          <span className="text-lg">Tronald J. Dump</span> <br />{' '}
          <span className="font-thin">@TronaldDump</span>{' '}
        </span>

        
          <>
            <p className="text py-5">{props.quote}</p>

            <div className="footer">
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z"
                    ></path>
                  </svg>
                  {getRandomNumber(1, 5)}M
                </div>
                <div>
                  <svg
                    fill="none"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="-2.5 0 32 32"
                  >
                    <path d="M0 10.284l0.505 0.36c0.089 0.064 0.92 0.621 2.604 0.621 0.27 0 0.55-0.015 0.836-0.044 3.752 4.346 6.411 7.472 7.060 8.299-1.227 2.735-1.42 5.808-0.537 8.686l0.256 0.834 7.63-7.631 8.309 8.309 0.742-0.742-8.309-8.309 7.631-7.631-0.834-0.255c-2.829-0.868-5.986-0.672-8.686 0.537-0.825-0.648-3.942-3.3-8.28-7.044 0.11-0.669 0.23-2.183-0.575-3.441l-0.352-0.549-8.001 8.001z"></path>
                  </svg>
                  {getRandomNumber(2, 8)}k
                </div>
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.1"
                      d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z"
                      fill="#323232"
                    ></path>
                    <path
                      opacity="0.1"
                      d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
                      fill="#323232"
                    ></path>
                    <path
                      opacity="0.1"
                      d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z"
                      fill="#323232"
                    ></path>
                    <path
                      d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z"
                      stroke-width="2"
                    ></path>
                    <path
                      d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z"
                      stroke-width="2"
                    ></path>
                    <path
                      d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z"
                      stroke-width="2"
                    ></path>
                    <path
                      d="M8.7207 10.6397L15.0001 7.5"
                      stroke-width="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8.70605 13.353L15 16.5"
                      stroke-width="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  {getRandomNumber(2, 5)}k
                </div>
              </div>
            </div>
          </>
        
      </div>
    </div>
  );
}

export default Card;
