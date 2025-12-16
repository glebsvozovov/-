import { PhysicsLaw } from "@/data/physicsLaws";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PhysicsModalProps {
  law: PhysicsLaw | null;
  isOpen: boolean;
  onClose: () => void;
}

const colorClasses: Record<string, string> = {
  yellow: "from-yellow to-orange",
  blue: "from-blue to-secondary",
  orange: "from-orange to-primary",
  lime: "from-lime to-accent",
  pink: "from-pink to-purple",
  purple: "from-purple to-blue",
};

export const PhysicsModal = ({ law, isOpen, onClose }: PhysicsModalProps) => {
  if (!law) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-none shadow-2xl rounded-3xl p-0">
        {/* Header with gradient */}
        <div
          className={`bg-gradient-to-br ${colorClasses[law.color]} p-6 rounded-t-3xl`}
        >
          <DialogHeader>
            <div className="flex items-center gap-4">
              <span className="text-5xl">{law.icon}</span>
              <DialogTitle className="text-2xl font-bold text-primary-foreground">
                {law.title}
              </DialogTitle>
            </div>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Что это значит?
            </h4>
            <p className="text-lg text-card-foreground leading-relaxed">
              {law.description}
            </p>
          </div>

          {/* GIF */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-muted">
            <img
              src={law.gifUrl}
              alt={`${law.toyName} демонстрация`}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
              <span className="text-primary-foreground font-semibold text-lg">
                🎮 {law.toyName}
              </span>
            </div>
          </div>

          {/* Toy example */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Как это работает в игрушке?
            </h4>
            <p className="text-base text-card-foreground leading-relaxed bg-muted/50 p-4 rounded-xl border-l-4 border-primary">
              {law.toyExample}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
