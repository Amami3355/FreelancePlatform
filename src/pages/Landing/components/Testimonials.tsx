import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    role: "Développeuse freelance",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "FreelanceFlow a complètement transformé ma façon de gérer mon activité. Je gagne un temps précieux sur l'administratif.",
  },
  {
    name: "Thomas M.",
    role: "Designer indépendant",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "Une interface intuitive et des fonctionnalités qui répondent parfaitement à mes besoins. Je recommande !",
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" className="bg-indigo-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ce qu'en pensent nos utilisateurs
          </h2>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-xl shadow-md overflow-hidden p-6"
              >
                <div className="flex items-center space-x-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />

                  <div>
                    <div className="text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-indigo-600">{testimonial.role}</div>
                  </div>
                </div>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-gray-500">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
