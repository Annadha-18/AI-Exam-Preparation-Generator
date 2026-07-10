import { FileQuestion, Users, BookOpen, Trophy } from "lucide-react";

function Statistics() {
  const stats = [
    {
      icon: <FileQuestion size={40} />,
      value: "10K+",
      label: "Questions Generated",
    },
    {
      icon: <Users size={40} />,
      value: "5K+",
      label: "Students",
    },
    {
      icon: <BookOpen size={40} />,
      value: "25K+",
      label: "Quizzes Taken",
    },
    {
      icon: <Trophy size={40} />,
      value: "98%",
      label: "Success Rate",
    },
  ];

  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >

              <div className="text-blue-600 flex justify-center mb-5">
                {stat.icon}
              </div>

              <h3 className="text-4xl font-bold mb-3">
                {stat.value}
              </h3>

              <p className="text-gray-600">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Statistics;