import { Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Patel",
      course: "B.Sc IT Student",
      review:
        "The AI-generated questions helped me prepare better for my semester exams.",
    },
    {
      name: "Priya Shah",
      course: "Computer Engineering",
      review:
        "Uploading notes and getting quizzes instantly saved me a lot of time.",
    },
    {
      name: "Aman Verma",
      course: "BCA Student",
      review:
        "The interface is clean, responsive and very easy to use.",
    },
  ];

  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          What Our Students Say
        </h2>

        <p className="text-center text-gray-500 mb-16">
          Trusted by students preparing for exams.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition duration-300"
            >

              <div className="flex text-yellow-500 mb-5">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.course}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;