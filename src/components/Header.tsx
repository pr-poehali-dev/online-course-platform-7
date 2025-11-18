import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Icon name="GraduationCap" size={28} className="text-primary" />
            <span>EduPlatform</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link 
              to="/courses" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/courses') ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              Каталог
            </Link>
            <Link 
              to="/profile" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/profile') ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              Личный кабинет
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              Контакты
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex">
            Войти
          </Button>
          <Button asChild className="hidden md:flex">
            <Link to="/profile">Начать обучение</Link>
          </Button>
          
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 animate-fade-in">
          <nav className="flex flex-col gap-4">
            <Link to="/courses" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Каталог
            </Link>
            <Link to="/profile" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Личный кабинет
            </Link>
            <Link to="/contact" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Контакты
            </Link>
            <div className="border-t pt-4 flex flex-col gap-2">
              <Button variant="ghost" className="w-full justify-start">
                Войти
              </Button>
              <Button asChild className="w-full">
                <Link to="/profile">Начать обучение</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};