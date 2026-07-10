import Card from "../common/Card";
import {
  FileText,
  Brain,
  BookOpen,
  ChartColumn,
} from "lucide-react";

function Features() {

  const features = [

    {
      icon: <FileText size={50} />,
      title: "Upload Notes",
      description:
        "Upload PDF, DOCX or TXT files for AI analysis."
    },

    {
      icon: <Brain size={50} />,
      title: "AI Question Generator",
      description:
        "Generate MCQs, short questions and long questions instantly."
    },

    {
      icon: <BookOpen size={50} />,
      title: "Mock Quiz",
      description:
        "Practice unlimited quizzes generated from your notes."
    },

    {
      icon: <ChartColumn size={50} />,
      title: "Track Progress",
      description:
        "View quiz scores and monitor your learning progress."
    }

  ];

  return (

    <section className="py-20 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">

          Why Choose ExamAI?

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {

            features.map((feature, index) => (

              <Card
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default Features;