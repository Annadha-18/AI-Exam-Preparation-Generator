import {
  Upload,
  Brain,
  FileQuestion,
  CircleCheckBig,
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <Upload size={40} />,
      title: "Upload Notes",
      description:
        "Upload your PDF, DOCX, or TXT study material.",
    },
    {
      icon: <Brain size={40} />,
      title: "AI Analyzes Content",
      description:
        "The AI reads and understands your notes.",
    },
    {
      icon: <FileQuestion size={40} />,
      title: "Generate Questions",
      description:
        "Generate MCQs, short-answer, and long-answer questions.",
    },
    {
      icon: <CircleCheckBig size={40} />,
      title: "Practice & Improve",
      description:
        "Take quizzes and monitor your performance.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          How It Works
        </h2>

        <p className="text-center text-gray-500 mb-16">
          Prepare for your exams in four simple steps.
        </p>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (

            <div
              key={index}
              className="text-center"
            >

              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto text-blue-600 mb-6">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;