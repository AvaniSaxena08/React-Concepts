import React from "react";
import Navbar from "./Navbar";
function About() {
  return (<div>
    
    <div className="bg-gray-200 min-h-screen mt-[400px] text-gray-800">
    <header className="bg-teal-800 mt-[50px]  w-full text-white py-3 text-center">
        <h1 className="text-4xl font-extrabold">About Us</h1>
       
      </header>
      {/* Header Section 
      <header className="bg-teal-600 mt-10 w-full max-w-[1400px] ml-[50px] text-white py-5  text-center">
        <h1 className="text-4xl font-extrabold">WellNess AI</h1>
        <p className="mt-4 text-lg">Predicting Future Diseases & Offering Personalized Recommendations</p>
      </header>
      */}

      {/* Main Content Section */}
      <section className="px-11 mb-4 py-10 max-w-7xl mx-auto space-y-12">
        {/* Introduction Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-teal-600">What is the WellNessAI?</h2>
          <p className="mt-4 text-lg text-gray-600">
            The AI Predictive Health Model leverages advanced machine learning algorithms to analyze your medical
            history and current symptoms. By examining patterns in health data, it predicts the likelihood of future diseases
            and provides tailored recommendations to reduce health risks.
          </p>
        </div>

        {/* How it Works Section */}
        <div className="space-y-9">
          <h2 className="text-3xl font-semibold text-teal-600 text-center">How Does It Work?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-teal-500">Step 1: Input Medical Data</h3>
              <p className="mt-2 text-gray-600">
                Enter your medical history and current symptoms into the system. This data serves as the foundation for
                making predictions about future health risks.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-teal-500">Step 2: Data Analysis</h3>
              <p className="mt-2 text-gray-600">
                Our AI model processes your data using sophisticated algorithms, identifying correlations and trends
                that help predict potential diseases and health risks.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-teal-500">Step 3: Predictive Modeling</h3>
              <p className="mt-2 text-gray-600">
                The system uses predictive modeling to estimate the likelihood of future diseases, based on historical
                medical trends and the latest research.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-teal-500">Step 4: Personalized Recommendations</h3>
              <p className="mt-2 text-gray-600">
                After analyzing the data, the system offers personalized health recommendations and preventive measures
                to improve your well-being and reduce future risks.
              </p>
            </div>
          </div>
        </div>
          
        {/* Benefits Section */}
        <div className="bg-teal-50 py-16 text-center">
          <h2 className="text-3xl font-semibold text-teal-600">Why Choose This WellNess AI</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI model provides accurate predictions, helping you understand your future health risks. With personalized
            recommendations, it empowers you to take proactive measures and make informed decisions to improve your health.
          </p>
        </div>

        {/* Features Section */}
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-teal-600">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-teal-500">Accurate Predictions</h3>
              <p className="mt-2 text-gray-600">
                The AI model predicts future diseases based on a robust dataset and cutting-edge algorithms, ensuring
                accuracy and reliability.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-teal-500">Personalized Health Advice</h3>
              <p className="mt-2 text-gray-600">
                Receive personalized advice based on your medical history and symptoms, guiding you toward healthier
                lifestyle choices.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-teal-500">Easy to Use</h3>
              <p className="mt-2 text-gray-600">
                The user-friendly interface makes it simple to input data and receive health predictions and recommendations
                in just a few steps.
              </p>
            </div>
          </div>
        </div>

      </section>

     
    </div>
    </div>
  );
}

export default About;