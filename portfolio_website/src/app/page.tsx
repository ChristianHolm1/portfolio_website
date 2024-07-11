"use client";

import React from "react";

import About from "../components/About";
import Footer from "../components/Footer";
import History from "../components/History";
import Project from "../components/Project";

function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-between p-24 min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-4xl mx-auto">
          <About />
          <div className="flex flex-col items-center">
            <Project
              name="Energy lable identification"
              description="This is a program made to verify and identify the energy lable of home appliances. 
                        It uses object detection(YOLO) to identify the energy lable, and then displays it in an Angular frontend."
              category="AI/ML and web scraping"
              technologies={[
                { name: "AI", url: "" },
                { name: "YOLO", url: "https://docs.ultralytics.com/" },
                { name: "Python", url: "https://www.python.org/" },
                { name: "Angular", url: "https://angular.dev/" },
              ]}
              images={[
                "/images/image.png",
                "/images/image2.png",
                "/images/image3.png",
                "/images/image4.jpg"
              ]}
              github="https://github.com/ChristianHolm1/hvidevare_scanning"
              link="https://household-appliance-website.web.app/frontpage"
            />
            <Project
              name="Another Project"
              description="This is another project created using React. It showcases additional skills."
              category="Web Development"
              technologies={[
                { name: "React", url: "" },
                { name: "Next.js", url: "https://nextjs.org/" },
                { name: "TypeScript", url: "https://www.typescriptlang.org/" },
              ]}
              images={[
                "/images/image.png",
                "/images/image2.png",
                "/images/image3.png",
                "/images/image4.jpg"
              ]}
              github="https://github.com/username/project-repo"
              link=""
            />
          </div>
          <History />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
