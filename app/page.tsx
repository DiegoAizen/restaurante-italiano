import { 
  MapPin, 
  Phone, 
  Clock, 
  Utensils, 
  Wine, 
  ChefHat, 
  Menu as MenuIcon,
  X,
  Facebook,
  Instagram,
  Mail
} from 'lucide-react';

// Componente 1: Hero Section
const Hero_section = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-dark/90 to-dark/70">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920")'
        }}
      />
      <div className="relative z-10 text-center text-light px-4 max-w-6xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          Trattoria <span className="text-primary">Bella Vista</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-serif italic">
          Auténtica cocina italiana desde 1985
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
            <Utensils className="w-5 h-5" />
            Ver Menú
          </button>
          <button className="bg-transparent border-2 border-secondary hover:bg-secondary/20 text-secondary hover:text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Reservar Mesa
          </button>
        </div>
      </div>
    </section>
  );
};

// Componente 2: Features Section
const Features_section = () => {
  const features = [
    {
      icon: <ChefHat className="w-12 h-12" />,
      title: "Chef Italiano",
      description: "Nuestro chef, Giovanni Rossi, trae 30 años de experiencia desde Nápoles"
    },
    {
      icon: <Wine className="w-12 h-12" />,
      title: "Vinos Selectos",
      description: "Carta de vinos cuidadosamente seleccionada de las mejores regiones de Italia"
    },
    {
      icon: <Utensils className="w-12 h-12" />,
      title: "Ingredientes Frescos",
      description: "Usamos solo ingredientes frescos y de la más alta calidad"
    }
  ];

  return (
    <section className="py-20 px-4 bg-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-dark mb-4">
            La <span className="text-primary">Autenticidad</span> Italiana
          </h2>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            Descubre el verdadero sabor de Italia en cada plato, preparado con pasión y tradición
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-light/20"
            >
              <div className="text-primary mb-6 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-dark mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-dark/60 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <span className="font-serif text-2xl font-bold text-light">
                Trattoria <span className="text-primary">Bella Vista</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-light hover:text-primary transition-colors">Inicio</a>
              <a href="#" className="text-light hover:text-primary transition-colors">Menú</a>
              <a href="#" className="text-light hover:text-primary transition-colors">Reservas</a>
              <a href="#" className="text-light hover:text-primary transition-colors">Contacto</a>
            </div>
            
            <button className="md:hidden text-light">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero_section />
        <Features_section />
        
        {/* Info Section */}
        <section className="py-16 px-4 bg-dark text-light">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">Ubicación</h3>
                <p className="text-light/70">Calle Italia 123, Centro Histórico</p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">Horarios</h3>
                <p className="text-light/70">Lun-Dom: 12:00 - 23:00</p>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">Reservas</h3>
                <p className="text-light/70">+34 912 345 678</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark/95 text-light py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                Trattoria <span className="text-primary">Bella Vista</span>
              </h3>
              <p className="text-light/70 mb-4">
                Más de 35 años sirviendo auténtica cocina italiana con amor y tradición.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-light hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-light hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-light hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-xl font-bold mb-4">Horarios</h4>
              <div className="space-y-2 text-light/70">
                <p>Lunes - Viernes: 12:00 - 23:00</p>
                <p>Sábados: 12:00 - 00:00</p>
                <p>Domingos: 12:00 - 22:00</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif text-xl font-bold mb-4">Contacto</h4>
              <div className="space-y-2 text-light/70">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Calle Italia 123, Centro Histórico
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +34 912 345 678
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@trattoriabellavista.com
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-light/20 mt-8 pt-8 text-center text-light/50">
            <p>&copy; {new Date().getFullYear()} Trattoria Bella Vista. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}