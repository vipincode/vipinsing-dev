import { Box } from '@/components/box';
import Profile from '@/components/profile';
import { H2, H3, Text } from '@/components/typography';

const AboutMe = () => {
  return (
    <div className="space-y-4 md:grid md:grid-cols-12 md:gap-6 md:space-y-0">
      <div className="md:col-span-5 lg:col-span-4">
        <Profile />
      </div>
      <div className="md:col-span-7 lg:col-span-8">
        <Box className="min-h-[76vh]">
          <H2>About me 👋</H2>
          <article className="space-y-3">
            <Text variant="md">
              I am a passionate front-end developer with a keen eye for design and a strong foundation in modern web
              technologies. With expertise in HTML, CSS, and SCSS, I craft visually appealing and responsive interfaces.
              My proficiency in Tailwind CSS and Shadcn UI allows me to create sleek and efficient designs, while my
              experience with Modern UI Frameworks and Storybook ensures consistency and quality across projects.
            </Text>
            <Text>
              I am well-versed in JavaScript, React, and Next.js, which I use to build dynamic, high-performance web
              applications. Additionally, I leverage Redux Toolkit for state management and GitHub for version control,
              ensuring smooth development workflows.
            </Text>
            <Text>
              Beyond coding, I have a strong background in design, utilizing tools like Adobe Photoshop, Adobe
              Illustrator, and Figma to bring creative ideas to life. My goal is to bridge the gap between design and
              development, creating seamless user experiences that are both functional and beautiful.
            </Text>
          </article>
          <div className="mt-6">
            <H2>Work Experience</H2>
            <div className="space-y-3">
              <article>
                <div>
                  <H3>Byldd | Front-End Developer</H3>
                  <span className="text-sm font-medium italic">2022 - Present</span>
                </div>
                <Text>
                  At Byldd, I have been instrumental in building and maintaining high-quality web applications. My role
                  involves working closely with cross-functional teams to develop responsive and user-friendly
                  interfaces using React and Next.js. I also focus on state management using Redux Toolkit, ensuring
                  optimal performance and a seamless user experience. My contributions have helped deliver innovative
                  solutions that align with business goals and user needs.
                </Text>
              </article>
              <article>
                <div>
                  <H3>Diptimate Consultant | HTML/CSS Developer</H3>
                  <span className="text-sm font-medium italic">2020 - 2021</span>
                </div>
                <Text>
                  At Diptimate Consultant, I specialized in crafting responsive websites and web applications. My work
                  focused on writing clean, maintainable code using HTML and CSS, while also collaborating with
                  designers to bring their visions to life. I played a key role in enhancing the visual appeal and
                  usability of client projects, contributing to increased user engagement and satisfaction.
                </Text>
              </article>
              <article>
                <div>
                  <H3>Ebslon Infotech | HTML/CSS Developer</H3>
                  <span className="text-sm font-medium italic">2019 - 2020</span>
                </div>
                <Text>
                  During my time at Ebslon Infotech, I was responsible for developing and optimizing web interfaces. My
                  expertise in HTML and CSS allowed me to create pixel-perfect designs that met client specifications. I
                  also worked on improving the performance and accessibility of web pages, ensuring that they were both
                  visually appealing and user-friendly.
                </Text>
              </article>
              <article>
                <div>
                  <H3>Sunsoft Infotech | HTML/CSS Developer</H3>
                  <span className="text-sm font-medium italic">2016 - 2019</span>
                </div>
                <Text>
                  At Sunsoft Infotech, I began my career as an HTML/CSS Developer. I contributed to various projects by
                  converting design mockups into fully functional and responsive web pages. My work involved
                  collaborating with back-end developers to integrate front-end components, ensuring a seamless user
                  experience. This role laid the foundation for my skills in web development and design.
                </Text>
              </article>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default AboutMe;
