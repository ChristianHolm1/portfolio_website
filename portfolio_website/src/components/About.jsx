import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center rounded-lg p-6 mb-6 w-full mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">Christian Holm</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start">
                <div className="flex-1 md:mr-6 mb-6 md:mb-0">
                    <p className="text-gray-700 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quasi tempora possimus, natus error, eveniet laborum consequuntur dignissimos consectetur suscipit, ea iure neque sed. Doloribus quis qui eaque rem sint?
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <img
                        className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full pointer-events-none"
                        src="https://media.discordapp.net/attachments/652170275546464275/840125072931946496/weebsmile.png?ex=668ede32&is=668d8cb2&hm=91e6d5b6c29cee54a0d5e401f97711d67995617c3b8f50cb47904ac9266de0a6&=&format=webp&quality=lossless&width=492&height=481"
                        alt="Profile Picture"
                    />
                </div>
            </div>
        </div>
    );
};

export default About
