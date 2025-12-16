export const Hero = () => {
  return (
    <header className="relative py-16 px-4 text-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl animate-float opacity-20">🎈</div>
      <div className="absolute top-20 right-20 text-5xl animate-bounce-soft opacity-20">⚙️</div>
      <div className="absolute bottom-10 left-1/4 text-4xl animate-wiggle opacity-20">🔮</div>
      <div className="absolute bottom-20 right-1/3 text-5xl animate-float opacity-20" style={{ animationDelay: "1s" }}>🚀</div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-2xl">🧲</span>
          <span className="text-sm font-semibold text-primary">Интерактивное обучение</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Физика в игрушках
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Узнай, как настоящие законы физики работают в твоих любимых игрушках! 
          От йо-йо до качелей — наука везде вокруг нас 🎮
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">6</div>
            <div className="text-sm text-muted-foreground">законов физики</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">🎯</div>
            <div className="text-sm text-muted-foreground">простые примеры</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">GIF</div>
            <div className="text-sm text-muted-foreground">анимации</div>
          </div>
        </div>
      </div>
    </header>
  );
};
