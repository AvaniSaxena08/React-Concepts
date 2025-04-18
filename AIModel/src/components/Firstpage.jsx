
import Navbar from "./Navbar";
import About from "./About";
import ContactUs from "./Contactus";

function Firstpage() {
  return (
    <div className="bg-gray-200">
      <Navbar />
      
      <div className="mt-10 flex items-center gap-5 px-10">
        <img 
          src="src/assets/img8AI.png" 
          className="w-[600px] h-[550px] ml-4" 
        />
        <div className="w-[700px] mt-[100px] ml-20">
          <p className="text-7xl text-teal-900 font-semibold">
           AI
           <br/>
          </p>
          <p className="text-7xl text-teal-900 font-semibold">
            In HealthCare
            <br/>
          </p>
       
          <p className="text-2xl w-[700px] mt-2 text-gray-600 font-medium">
            AI has the potential to help save lives by transforming healthcare and medicine through the creation of more personalized, accessible, and effective solutions. This is particularly true in more resource-challenged communities where there is often a shortage of healthcare workers. In collaboration with healthcare providers, researchers, and industry partners, we’ve published research, created open-source tools, and built AI systems that have the potential to positively impact health outcomes for people globally.
          </p>
       
        </div>
      </div>
          


      <header className="bg-teal-600 mt-20 w-full max-w-[1400px] ml-[50px] text-white py-5  text-center">
        <h1 className="text-4xl font-extrabold">WellNess AI</h1>
        <p className="mt-4 text-lg">Predicting Future Diseases & Offering Personalized Recommendations</p>
      </header>


      <div className="mt-[80px] flex justify-center gap-14">

      <div className="h-[200px] w-[400px]"> 
         <img src="src/assets/img2AI.webp" className="w-[400px] h-[400px] mb-4" />
          A health recommendation model utilizes AI and data analytics to provide personalized health suggestions. It analyzes user data, medical history, and lifestyle factors to recommend diet, exercise, for improved well-being.</div>

       <div className="h-[200px] w-[400px]">
        <img src="src/assets/img5AI.webp" className="w-[400px] mb-4 h-[400px]" />
       A smart home for healthcare integrates IoT, AI, and wearable devices to monitor health, assist the elderly, manage medications, and provide emergency alerts for improved patient care and well-being.
      </div> 
      <div className="h-[200px] w-[400px]">
        <img src="src/assets/img4AI.webp" className="w-[400px] mb-4 h-[400px]" />
        A healthy diet and lifestyle include balanced nutrition, regular exercise, hydration, sufficient sleep, stress management, and avoiding smoking, and excessive alcohol for overall longevity.</div>
      </div>

      <About />
      <ContactUs />
       {/* Footer Section */}
       <footer className="bg-teal-800 text-white py-8 text-center">
        <p>© 2025 AI Predictive Health Model | All Rights Reserved</p>
      </footer>
      
    </div>
  );
}

export default Firstpage;
