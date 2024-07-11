import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function Project({
    name,
    description,
    category,
    technologies,
    images,
    github,
    link,
}) {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="bg-gray-800 shadow-md rounded-lg p-6 mb-6 w-full max-w-3xl">
            <h2 className="text-2xl font-bold mb-2 text-gray-100">{name}</h2>

            <Carousel className="mb-4" interval={null}>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <Image
                            className="d-block w-100 h-64 object-contain rounded cursor-pointer"
                            src={image}
                            width={800}
                            height={450}
                            alt={`${name} screenshot ${index + 1}`}
                            onClick={() => handleImageClick(image)}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

            <p className="text-gray-300 mb-2">{description}</p>
            <p className="text-gray-400 mb-2">
                <strong>Category:</strong> {category}
            </p>
            <div className="flex flex-wrap mb-2">
                {technologies.map((tech, index) =>
                    tech.url ? (
                        <a
                            key={tech.id}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 text-gray-200 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-md hover:underline"
                        >
                            {tech.name}
                        </a>
                    ) : (
                        <span
                            key={index}
                            className="bg-green-600 text-gray-200 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-md"
                        >
                            {tech.name}
                        </span>
                    )
                )}
            </div>
            <div className="flex items-center space-x-4 mt-4">
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                        aria-label="GitHub Repository"
                    >
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                    </a>
                )}
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:underline text-gray-300"
                    >
                        Visit Project
                    </a>
                )}
            </div>

            <Modal show={showModal} onHide={handleCloseModal} centered size="xl">
                <Modal.Body>
                    <Image
                        src={selectedImage}
                        alt="Large view"
                        layout="responsive"
                        width={800}
                        height={450}
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Project;
