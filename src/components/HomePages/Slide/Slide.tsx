const Slide: React.FC = () => {
  return (
    <div className="w-full h-full overflow-x-hidden bg-venture bg-no-repeat bg-center bg-cover bg-fixed">
      <div className="w-full h-full  flex flex-col  bg-black bg-opacity-60">
        <div className="md:px-20 md:py-28 py-16 px-5">
          <h3 className="text-[#F27E98]  text-xl font-semibold sm:text-lg">
            At Head$Toe
          </h3>
          <h1 className="text-white text-3xl text-start font-semibold mt-4 sm:text-3xl md:text-4xl md:leading-tight">
            Look Good With Little Effort
          </h1>
          <p className="text-white w-[350px] text-start mt-4 text-lg  md:w-[60%]">
          Our story begins in September 2013, in the vibrant city of Lagos, Nigeria. Yomi, 
          a young man with a keen eye for fashion, noticed something striking. Over time, the 
          demand for new styles and designs in everyday clothing was growing rapidly among Nigeria’s 
          young and middle-class population. But there was a glaring problem—genuine Nigerian-inspired urban 
          clothing, like t-shirts, was hard to find. In fact, over 95% of the affordable yet stylish casual 
          wear in the country came from foreign designers. Driven by his passion for design and his desire to r
          epresent Nigerian culture, Yomi saw an opportunity to fill this gap. And so, Original Head and Toe Clothing 
          was born—a brand dedicated to crafting fashion that truly spoke to Nigeria's unique urban style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
