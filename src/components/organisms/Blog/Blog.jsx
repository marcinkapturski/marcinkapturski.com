import React, { useEffect, useState } from "react";
import Heading from "components/atoms/Heading/Heading";
import Image from "components/atoms/Image/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogAnimationSettings } from "../../../utils/BlogAnimationSettings";
import { createGlobalStyle } from "styled-components";

import AOS from "aos";
AOS.init();

const GlobalStyles = createGlobalStyle`
  body.hide {
    overflow-y: hidden; /* Hide vertical scrollbar */
    overflow-x: hidden; /* Hide horizontal scrollbar */
  }
`;

const CustomSlide = ({ index, ...props }) => {
  return <div {...props}></div>;
};

const Blog = ({ posts }) => {
  const [isSliderInitialized, setIsSliderInitialized] = useState(false);

  useEffect(() => {
    setIsSliderInitialized(true);
  }, []);

  return (
    <section id="blog" className="pb-0">
      <div className="container">
        <GlobalStyles />
        <div className="spacer-double"></div>
        <div className="spacer-double"></div>
        <Heading text="From Blog" />
        <div
          className="col-md-8 text-center m-auto"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <blockquote className="q-big">
            This blog is a collection of solutions for challenges I had the
            pleasure to face. The thorough illustration of my concepts and
            capabilities.
          </blockquote>
          <div className="spacer-single"></div>
        </div>
        <div className="row" data-aos="fade-up" data-aos-once="true">
          {isSliderInitialized ? (
            <Slider {...blogAnimationSettings}>
              {posts.map((post) => (
                <CustomSlide key={post.id}>
                  <div className="bloglist item">
                    <div className="post-content">
                      <div className="post-image">
                        <div className="de_modal">
                          <a href={`#/post/${post.slug}`}>
                            <Image
                              src={post.coverImage.url}
                              className="grayscale"
                              alt={post.title}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="post-text">
                        <h4 className="de_modal">
                          <a href={`#/post/${post.slug}`}>{post.title}</a>
                        </h4>
                        <p>{post.introduction}</p>
                      </div>
                    </div>
                  </div>
                </CustomSlide>
              ))}
            </Slider>
          ) : null}
        </div>
      </div>
      <div className="spacer-double"></div>
    </section>
  );
};

export default Blog;
