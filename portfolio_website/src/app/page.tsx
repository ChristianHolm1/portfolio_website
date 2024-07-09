import React from 'react';
import About from '../components/About';
import Project from '../components/Project';
import Footer from '../components/Footer';
const Home = () => {
    return (
      <div>
        <main className="flex flex-col items-center justify-between p-24 min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-4xl mx-auto">
                <About />
                <div className="flex flex-col items-center">
                    <Project
                        name="Portfolio Website"
                        description="This is a portfolio website created using React. It showcases my projects and skills."
                        category="Web Development"
                        technologies={[
                            { name: "React", url: "https://reactjs.org/" },
                            { name: "Next.js", url: "https://nextjs.org/" },
                            { name: "TypeScript", url: "https://www.typescriptlang.org/" }
                        ]}
                        image="https://via.placeholder.com/400"
                        github="https://github.com/username/project-repo"
                        link=""
                    />
                    <Project
                        name="Another Project"
                        description="This is another project created using React. It showcases additional skills."
                        category="Web Development"
                        technologies={[
                            { name: "React", url: "" },
                            { name: "Next.js", url: "https://nextjs.org/" },
                            { name: "TypeScript", url: "https://www.typescriptlang.org/" }
                        ]}
                        image="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
                        github="https://github.com/username/project-repo"
                        link=""
                    />
                </div>
            </div>
            
        </main>
      <Footer />
      </div>
    );
};

export default Home;
