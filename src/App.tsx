/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Pizza, 
  Flame, 
  Utensils, 
  Star, 
  Instagram, 
  Facebook, 
  Mail, 
  MapPin,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <div className="bg-pizza-orange p-1.5 rounded-lg">
            <Pizza className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight font-serif">Napoli Pizza Elite</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium hover:text-pizza-orange transition-colors">About</a>
          <a href="#details" className="text-sm font-medium hover:text-pizza-orange transition-colors">Class Details</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-pizza-orange transition-colors">Testimonials</a>
          <a href="#contact" className="text-sm font-medium hover:text-pizza-orange transition-colors">Contact</a>
          <Button className="bg-pizza-orange hover:bg-pizza-orange/90 text-white rounded-md px-6">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" 
        alt="Chef making pizza"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
    
    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
      >
        Master the Art of <br /> Neapolitan Pizza
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto font-light"
      >
        Join our exclusive, once-a-year cooking class in Naples and learn the secrets of authentic homemade pizza from a renowned chef.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button size="lg" className="bg-pizza-orange hover:bg-pizza-orange/90 text-white text-lg px-10 py-7 rounded-md h-auto">
          Book Your Spot
        </Button>
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-pizza-orange" />,
      title: "Dough Perfection",
      description: "Master the art of crafting the perfect dough, from mixing to proofing, ensuring a light and airy crust."
    },
    {
      icon: <Flame className="w-6 h-6 text-pizza-orange" />,
      title: "Traditional Techniques",
      description: "Learn the time-honored techniques of Neapolitan pizza making, including hand-stretching and topping application."
    },
    {
      icon: <Utensils className="w-6 h-6 text-pizza-orange" />,
      title: "Baking Mastery",
      description: "Discover the secrets to achieving a perfectly baked pizza in a wood-fired oven, with a crispy crust and bubbly edges."
    }
  ];

  return (
    <section id="details" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What You'll Learn</h2>
          <div className="w-20 h-1 bg-pizza-orange mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border-none shadow-xl shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-pizza-orange/10 rounded-xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const History = () => (
  <section id="about" className="py-24 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-8">The History of Neapolitan Pizza</h2>
      <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light italic">
        <p>
          Neapolitan pizza, a culinary icon originating from Naples, Italy, boasts a rich history dating back to the 18th century. Initially a simple flatbread topped with lard, salt, and garlic, it evolved with the introduction of tomatoes from the New World.
        </p>
        <p>
          By the late 19th century, the classic Margherita pizza emerged, honoring Queen Margherita of Savoy with its red (tomato), white (mozzarella), and green (basil) toppings, mirroring the Italian flag. Today, Neapolitan pizza is celebrated globally for its simplicity, quality ingredients, and traditional preparation methods, including baking in a wood-fired oven at high temperatures.
        </p>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    {
      name: "Sophia Rossi",
      role: "Class of 2023",
      image: "https://i.pravatar.cc/150?u=sophia",
      text: "This class was an absolute dream! Chef Luca's passion is contagious. The pizza we made was the best I've ever tasted."
    },
    {
      name: "Marco Bianchi",
      role: "Class of 2023",
      image: "https://i.pravatar.cc/150?u=marco",
      text: "Took my skills to a whole new level. The techniques were exceptional, and the atmosphere was incredibly welcoming. Highly recommend!"
    },
    {
      name: "Isabella Conti",
      role: "Class of 2023",
      image: "https://i.pravatar.cc/150?u=isabella",
      text: "The highlight of my trip to Naples. Chef Luca is a fantastic teacher. Left with confidence to recreate authentic Neapolitan pizza."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Voices of Our Pizzeria Pros</h2>
          <div className="w-20 h-1 bg-pizza-orange mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="border-none shadow-lg shadow-gray-100 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-pizza-orange/20"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold">{review.name}</h4>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-pizza-orange text-pizza-orange" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-pizza-dark text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Pizza className="w-6 h-6 text-pizza-orange" />
            <span className="text-xl font-bold tracking-tight font-serif">Napoli Pizza Elite</span>
          </div>
          <p className="text-gray-400 font-light leading-relaxed">
            Experience the authentic taste of Naples. Learn from the best, once a year.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400 font-light">
            <li><a href="#about" className="hover:text-pizza-orange transition-colors">About the Class</a></li>
            <li><a href="#details" className="hover:text-pizza-orange transition-colors">What You'll Learn</a></li>
            <li><a href="#testimonials" className="hover:text-pizza-orange transition-colors">Testimonials</a></li>
            <li><a href="#" className="hover:text-pizza-orange transition-colors">Book Your Spot</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6">Connect With Us</h4>
          <div className="flex gap-4 mb-6">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pizza-orange transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pizza-orange transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pizza-orange transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-400 font-light">info@napolipizzaelite.it</p>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500 font-light">
        <p>© 2024 Napoli Pizza Elite. All rights reserved. Privacy Policy | Terms of Service</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <History />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
