import { PhysicsLaw } from "@/data/physicsLaws";

interface PhysicsCardProps {
  law: PhysicsLaw;
  onClick: () => void;
  index: number;
}

const colorClasses: Record<string, string> = {
  yellow: "from-yellow to-orange",
  blue: "from-blue to-secondary",
  orange: "from-orange to-primary",
  lime: "from-lime to-accent",
  pink: "from-pink to-purple",
  purple: "from-purple to-blue",
};

export const PhysicsCard = ({ law, onClick, index }: PhysicsCardProps) => {
  return (
    <div
      onClick={onClick}
      className="physics-card group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient accent bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorClasses[law.color]} rounded-t-2xl`}
      />
      
      {/* Icon */}
      <div className="relative z-10 mb-4">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[law.color]} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
        >
          {law.icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="relative z-10 text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {law.title}
      </h3>
      
      {/* Toy hint */}
      <p className="relative z-10 text-sm text-muted-foreground">
        Пример: {law.toyName}
      </p>
      
      {/* Click indicator */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-primary font-semibold">Узнать больше →</span>
      </div>
    </div>
  );
};
