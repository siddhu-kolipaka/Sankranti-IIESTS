"use client";

const events = [
  {
    title: "Bhogi Fire Lightening",
    date: "January 10, 2026 • 5:00 AM",
    description:
      "Early morning Bhogi fire lighting ceremony symbolizing warmth, positivity, and new beginnings.",
  },
  {
    title: "Photoshoot Session",
    date: "January 10, 2026 • 7:00 AM",
    description:
      "Capture the festive vibes with traditional attire, rangoli backgrounds, and group photos.",
  },
  {
    title: "DJ Celebration",
    date: "January 10, 2026 • 8:00 AM",
    description:
      "Enjoy energetic beats and dance with friends to kickstart the festive morning.",
  },
];

export default function EventsSection() {
  return (
    <section className="text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-6xl lg:text-7xl mb-12 castoro-titling-regular font-black">
          Events
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 border border-[#7e7567] rounded-2xl py-5 px-8 lg:p-8 shadow-md hover:shadow-lg transition 
                         flex flex-col justify-center min-h-[280px]"
            >
              <h3 className="text-3xl lg:text-3xl font-semibold mb-2">
                {event.title}
              </h3>
              <p className="text-sm lg:text-base mb-4 text-[#c2beb8]">
                {event.date}
              </p>
              <p className="text-gray-300 text-base lg:text-lg">
                {event.description}
              </p>{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
