import { useState } from "react";
import { physicsLaws, PhysicsLaw } from "@/data/physicsLaws";
import { PhysicsCard } from "@/components/PhysicsCard";
import { PhysicsModal } from "@/components/PhysicsModal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Hero } from "@/components/Hero";

const Index = () => {
  const [selectedLaw, setSelectedLaw] = useState<PhysicsLaw | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (law: PhysicsLaw) => {
    setSelectedLaw(law);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLaw(null);
  };

  return (
    <div className="min-h-screen gradient-hero">
      <Hero />

      {/* Cards Grid */}
      <main className="container mx-auto px-4 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Выбери закон физики
          </h2>
          <p className="text-muted-foreground">
            Нажми на карточку, чтобы узнать больше
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {physicsLaws.map((law, index) => (
            <div
              key={law.id}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PhysicsCard
                law={law}
                onClick={() => handleCardClick(law)}
                index={index}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          🧪 Учись играя • Физика — это весело!
        </p>
      </footer>

      {/* Modal */}
      <PhysicsModal
        law={selectedLaw}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Theme Toggle */}
      <ThemeToggle />
    </div>
  );
};

export default Index;
