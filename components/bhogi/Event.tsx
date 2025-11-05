"use client";

const events = [
  {
    title: "Bhogi Fire Lightening",
    date: "January 14, 2026 • 4:00 AM",
    description:
      "Early morning Bhogi fire lighting ceremony symbolizing warmth, positivity, and new beginnings.",
  },
  {
    title: "Photoshoot Session",
    date: "January 14, 2026 • 6:00 AM",
    description:
      "Capture the festive vibes with traditional attire, rangoli backgrounds, and group photos.",
  },
  {
    title: "DJ Celebration",
    date: "January 14, 2026 • 7:00 AM",
    description:
      "Enjoy energetic beats and dance with friends to kickstart the festive morning.",
  },
];

export default function EventsSection() {
  return (
    <section className="bg-gray-950 text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Events</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{event.date}</p>
              <p className="text-gray-300">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
