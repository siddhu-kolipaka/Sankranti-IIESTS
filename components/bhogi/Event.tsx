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
        <h2 className="text-6xl md:text-7xl mb-12 great-vibes-regular">
          Events
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 border border-[#7e7567] rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-400 mb-3 text-[#c2beb8]">
                {event.date}
              </p>
              <p className="text-gray-300">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
