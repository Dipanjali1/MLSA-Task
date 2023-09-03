/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/cat.jpg";

const imageAltText = "Sleeping cat background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "WebStickies",
    description:
      "A versatile Chrome extension that allows you to create and save virtual sticky notes directly on webpages.",
    url: "https://github.com/Dipanjali1/WebStickies",
  },
  {
    title: "SortMate",
    description:
      "A web-based sorting visualizer project built using HTML, CSS, and JavaScript. This project allows you to visualize various sorting algorithms in action, helping you understand how they work and compare their performance.",
    url: "https://github.com/Dipanjali1/Sorting-Visualizer",
  },
  {
    title: "Image2MarkUP",
    description:
      "A software to automate the conversion of hand-Drawn flowcharts",
    url: "https://github.com/Dipanjali1/Image2MarkUP",
  },
  {
    title: "Credit Card Fraud Detection System",
    description:
      "A system to detect the fraudulent trnsctions",
    url: "https://github.com/Dipanjali1/CreditCardFraudDetection",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
