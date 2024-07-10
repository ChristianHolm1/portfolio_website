"use client";
import React from 'react';
import About from '../components/About';
import Project from '../components/Project';
import Footer from '../components/Footer';
import History from '../components/History';
const Home = () => {
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
                            { name: "Angular", url: "https://angular.dev/" }
                        ]}
                        images={[
                            "https://media.discordapp.net/attachments/652170275546464275/1192153940549181550/image.png?ex=668f6a20&is=668e18a0&hm=8f8780dbf1f0132f3b89d462460f6e88fcf5e86385f0b77c6b516b3d6ebf8c76&=&format=webp&quality=lossless&width=1920&height=866",
                            "https://media.discordapp.net/attachments/652170275546464275/1192153952553279529/image.png?ex=668f6a23&is=668e18a3&hm=40022d51161cf4325011b1e45085455b535cb4462f793bcc3ca40f2cfdc4f82e&=&format=webp&quality=lossless&width=1802&height=897",
                            "https://media.discordapp.net/attachments/652170275546464275/1192157622783197214/image.png?ex=668f6d8e&is=668e1c0e&hm=d0f69f43d0ee80e01f79921b24870dbe1779c0ee06607deedbd5902dbf05eb9c&=&format=webp&quality=lossless&width=756&height=371",
                            "https://media.discordapp.net/attachments/652170275546464275/1198363112080953567/2023-11-01_13-24-40_-_frame_at_0m8s.jpg?ex=668f975e&is=668e45de&hm=b9b5c6313d0ddc867cb72c02a3910089c81ecd7e43c4dbc2d4e260380e51acae&=&format=webp&width=1596&height=897",
                            
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
                            { name: "TypeScript", url: "https://www.typescriptlang.org/" }
                        ]}
                        images={["https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"]}
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
};

export default Home;
