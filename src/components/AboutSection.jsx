import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I’m Antriksh Kashyap, a Computer Science graduate passionate about designing and developing scalable, high-performance software solutions. My technical foundation in Java, Python, and JavaScript, combined with hands-on experience in React, Node.js, and SQL, enables me to build applications that are both efficient and user-friendly. I enjoy transforming ideas into functional systems that solve real-world problems and enhance user experiences.
            </p>

            <p className="text-muted-foreground">
              I’m deeply driven by curiosity and a desire to keep learning. Whether it’s optimizing backend logic, building responsive front-end interfaces, or exploring new technologies like cloud platforms and machine learning, I aim to deliver clean, maintainable code that creates meaningful impact. My goal is to grow as a Software Developer who builds intelligent, reliable, and future-ready digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Science & Analytics</h4>
                  <p className="text-muted-foreground">
                    Transforming raw data into actionable insights through Python, Pandas, and Scikit-learn. Skilled in model training, feature engineering, and real-world deployment.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning & AI</h4>
                  <p className="text-muted-foreground">
                    Developing ML models and automation pipelines that turn complex datasets into intelligent solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
