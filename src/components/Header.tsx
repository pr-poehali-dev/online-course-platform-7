import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2 font-bold text-xl">
            <Icon name="GraduationCap" size={28} className="text-primary" />
            <span>EduPlatform</span>
          </a>
          
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="text-sm font-medium transition-colors hover:text-primary">
              Каталог
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              О платформе
            </a>
            <a href="#faq" className="text-sm font-medium transition-colors hover:text-primary">
              FAQ
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Контакты
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex">
            Войти
          </Button>
          <Button className="hidden md:flex">
            Личный кабинет
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
            <a href="#catalog" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Каталог
            </a>
            <a href="#about" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              О платформе
            </a>
            <a href="#faq" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>
            <a href="#contact" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Контакты
            </a>
            <Button variant="ghost" className="w-full justify-start">
              Войти
            </Button>
            <Button className="w-full">
              Личный кабинет
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
