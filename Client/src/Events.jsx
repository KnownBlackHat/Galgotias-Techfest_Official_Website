import React from 'react';
import './Events.css';

const events = [
  { title: 'Tech Exhibition', description: 'Dive into robotics, drones, machine learning, and deep tech projects.', image: "./src/assets/events/tech-exhibit.webp" },
  { title: 'Guest Lectures', description: 'Learn from Anupam Mittal, Narayan Murthy, Dr. Subramaniam Swamy, and UNESCO figures.', image: "./src/assets/events/guests.jpg"  },
  { title: 'International Summit', description: 'Engage with global tech leaders like Sam Altman.', image: "./src/assets/events/summit.jpg"  },
  { title: 'Robotic Wars', description: 'Experience thrilling robotic battles.', image: "./src/assets/events/robo.jpg"  },
  { title: 'Esports Event', description: 'Compete or spectate in top gaming competitions.', image: "./src/assets/events/esports.jpg"  },
  { title: 'EDM Night', description: 'Celebrate tech and innovation with a night of music and fun.', image: "./src/assets/events/edm.jpg"  },
];

const Events = () => {
  return (
    <section className="events-bg min-h-screen flex justify-center items-center px-5">
      <div className="tech-frame-alt p-8 w-full max-w-7xl">
        <h2 className="section-title text-center">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <div 
                    className="card-image"
                    style={{
                        backgroundImage: `url(${event.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    ></div>
                  <div className="card-title">{event.title}</div>
                </div>
                {/* Back Side */}
                <div className="flip-card-back">
                  <p className="card-description">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;