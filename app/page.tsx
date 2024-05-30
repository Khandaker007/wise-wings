import { ContentSection, GetInTouch, HeroSection } from "@/components/pages/Home";

const HomePage = () => {
  return(
    <>
      <HeroSection/>
      <ContentSection headingText="Why Wise Wings?" detailsText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim sapiente neque recusandae blanditiis accusantium rem libero."/>
      <ContentSection headingText="Collaborate with us" detailsText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae enim sapiente neque recusandae blanditiis accusantium rem libero." reverse/>
      <GetInTouch/>
    </>
  );
};

export default HomePage;
