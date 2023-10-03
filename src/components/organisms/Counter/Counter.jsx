import React from "react";
import { Parallax } from "react-parallax";
import background from "../../../assets/background.jpg";
import CountUp from "react-countup";
import AOS from "aos";
AOS.init();

const Counter = () => {
  return (
    <section id="resume" className="pb-0">
      <div className="section bg-top bg-bottom py-0">
        <Parallax className="py-5" bgImage={background} strength={300}>
          <div className="py-5 position-relative">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="de_count text-center">
                    <h3
                      className="timer"
                      data-aos="fade"
                      data-aos-delay="0"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                      data-aos-once="true"
                    >
                      <CountUp
                        start={0}
                        end={19}
                        duration={10}
                        useEasing={true}
                        separator=","
                      />
                    </h3>
                    <span>
                      <b>years of profesional experience</b>
                    </span>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="de_count text-center">
                    <h3
                      className="timer"
                      data-aos="fade"
                      data-aos-delay="200"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                      data-aos-once="true"
                    >
                      <CountUp
                        start={0}
                        end={26}
                        duration={10}
                        useEasing={true}
                        separator=","
                      />
                    </h3>
                    <span>
                      <b>projects completed</b>
                    </span>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="de_count text-center">
                    <h3
                      className="timer"
                      data-aos="fade"
                      data-aos-delay="400"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                      data-aos-once="true"
                    >
                      <CountUp
                        start={0}
                        end={12}
                        duration={10}
                        useEasing={true}
                        separator=","
                      />
                    </h3>
                    <span>
                      <b>worldwide Clients Engagement</b>
                    </span>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="de_count text-center">
                    <h3
                      className="timer"
                      data-aos="fade"
                      data-aos-delay="600"
                      data-aos-duration="1000"
                      data-aos-easing="ease"
                      data-aos-once="true"
                    >
                      <CountUp
                        start={0}
                        end={640}
                        duration={7}
                        useEasing={true}
                        separator=","
                      />
                    </h3>
                    <span>
                      <b>automation tests from this year</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default Counter;