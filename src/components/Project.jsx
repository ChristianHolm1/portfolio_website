import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";

import "bootstrap/dist/css/bootstrap.min.css";
import { codingProjectsData } from "../data/codingProjectsData";

function Project() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="flex flex-wrap justify-center">
      {codingProjectsData.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg p-4 md:p-6 mb-6 w-full max-w-6xl"
        >
          <h2 className="text-2xl font-bold mb-2 text-gray-100">
            {project.name}
          </h2>

          <Carousel className="mb-4" interval={null}>
            {project.images.map((image, imgIndex) => (
              <Carousel.Item key={`${project.name}-image-${imgIndex}`}>
                <Image
                  className="d-block w-100 rounded cursor-pointer"
                  src={image}
                  width={800}
                  height={450}
                  alt={`${project.name} screenshot ${imgIndex + 1}`}
                  onClick={() => handleImageClick(image)}
                />
              </Carousel.Item>
            ))}
          </Carousel>

          <p className="text-gray-300 mb-2">{project.description}</p>
          <p className="text-gray-400 mb-2">
            <strong>Category:</strong> {project.category}
          </p>
          <div className="flex flex-wrap mb-2">
            {project.technologies.map((tech, techIndex) =>
              tech.url ? (
                <a
                  key={`${project.name}-tech-${techIndex}`}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-gray-200 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-md hover:underline"
                >
                  {tech.name}
                </a>
              ) : (
                <span
                  key={`${project.name}-tech-${techIndex}`}
                  className="bg-green-600 text-gray-200 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-md"
                >
                  {tech.name}
                </span>
              ),
            )}
          </div>
          <div className="flex items-center space-x-4 mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                aria-label="GitHub Repository"
              >
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-300"
              >
                Visit Project
              </a>
            )}
          </div>

          <Modal show={showModal} onHide={handleCloseModal} centered size="xl">
            <Modal.Header closeButton />
            <Modal.Body>
              <Image
                src={selectedImage}
                alt="Large view"
                layout="responsive"
                width={1200}
                height={675}
              />
            </Modal.Body>
          </Modal>
        </div>
      ))}
    </div>
  );
}

export default Project;
