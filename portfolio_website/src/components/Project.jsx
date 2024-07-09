import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = ({ name, description, category, technologies, image, github, link }) => {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6 w-full max-w-3xl">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{name}</h2>
            <img className="w-full h-64 object-cover mb-4 rounded pointer-events-none" src={image} alt={name} />
            <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
            <p className="text-gray-500 dark:text-gray-400 mb-2"><strong>Category:</strong> {category}</p>
            <div className="flex flex-wrap mb-2">
                {technologies.map((tech, index) => (
                    tech.url ? (
                        <a
                            key={index}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-200 dark:bg-green-600 text-gray-800 dark:text-gray-200 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-md hover:underline"
                        >
                            {tech.name}
                        </a>
                    ) : (
                        <span className="bg-gray-200 dark:bg-green-600 text-gray-800 dark:text-gray-200 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-md" key={index}>{tech.name}</span>
                    )
                ))}
            </div>
            <div className="flex items-center space-x-4 mt-4">
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                        <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
                    </a>
                )}
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Visit Project
                    </a>
                )}
            </div>
        </div>
    );
};

export default Project;
