import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              <Image
                className="has-shadow"
                src={require("/Users/jamescoholan/Desktop/Production Code/SavTheProducer/src/assets/images/Sav The Producer.png")}
                alt="Hero"
                width={896}
                height={504}
              />
              {/* <Image
                className="has-shadow"
                src={require("/Users/jamescoholan/Desktop/Production Code/SavTheProducer/src/assets/images/Savtheproducer2.png")}
                alt="Hero"
                width={896}
                height={504}
              />
              <Image
                className="has-shadow"
                src={require("/Users/jamescoholan/Desktop/Production Code/SavTheProducer/src/assets/images/Savtheproducer3.png")}
                alt="Hero"
                width={896}
                height={504}
              /> */}
              {/* Sav <span className="text-color-primary">The Producer</span> */}
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Producing the Best Music For You
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://open.spotify.com/artist/7lQsPgl572B3J9tARp1N66?si=NtYWdb4ARW6dT15Da0M_jw"
                  >
                    Music
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://jamescoholan.medium.com/"
                  >
                    Instagram
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("/Users/jamescoholan/Desktop/Production Code/SavTheProducer/src/assets/images/SavTheProducer.png")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
