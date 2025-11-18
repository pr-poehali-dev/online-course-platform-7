import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Веб-разработка с нуля",
      description: "Создавайте современные сайты и приложения. От основ HTML до React.",
      duration: "12 недель",
      level: "Начинающий",
      students: 2450,
      price: "29 990 ₽",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      title: "Python для анализа данных",
      description: "Освойте Python, pandas и машинное обучение для работы с данными.",
      duration: "10 недель",
      level: "Средний",
      students: 1890,
      price: "34 990 ₽",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      id: 3,
      title: "UI/UX дизайн",
      description: "Создавайте удобные интерфейсы и изучите принципы пользовательского опыта.",
      duration: "8 недель",
      level: "Начинающий",
      students: 1650,
      price: "24 990 ₽",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    },
  ];

  const benefits = [
    {
      icon: "Video",
      title: "Видеоуроки HD",
      description: "Качественные материалы от практикующих экспертов",
    },
    {
      icon: "Award",
      title: "Сертификаты",
      description: "Подтвердите свои навыки официальным документом",
    },
    {
      icon: "Users",
      title: "Поддержка 24/7",
      description: "Менторы и сообщество всегда готовы помочь",
    },
    {
      icon: "Clock",
      title: "Гибкий график",
      description: "Учитесь в удобном темпе в любое время",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="GraduationCap" size={20} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">EduPlatform</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/courses" className="text-sm font-medium hover:text-primary transition-colors">
              Каталог курсов
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              О платформе
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/profile">
              <Button variant="ghost" size="sm">
                Войти
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="sm">
                Начать учиться
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mb-4">
                Более 50 000 студентов доверяют нам
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Освойте новую профессию онлайн
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Практические курсы от экспертов индустрии. Учитесь в своем темпе и получайте навыки, которые востребованы на рынке.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/courses">
                  <Button size="lg" className="w-full sm:w-auto">
                    Смотреть курсы
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Как это работает
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные курсы</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Выберите направление и начните обучение уже сегодня
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{course.level}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {course.duration}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Icon name="Users" size={16} />
                        <span>{course.students.toLocaleString()} студентов</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">{course.price}</span>
                      <Link to={`/course/${course.id}`}>
                        <Button>
                          Подробнее
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/courses">
                <Button variant="outline" size="lg">
                  Все курсы
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Мы создали все условия для эффективного онлайн-обучения
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon name={benefit.icon} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl md:text-4xl mb-4">
                  Начните учиться прямо сейчас
                </CardTitle>
                <CardDescription className="text-lg">
                  Получите доступ к первому уроку бесплатно и убедитесь в качестве наших курсов
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
                <Link to="/courses">
                  <Button size="lg" className="w-full sm:w-auto">
                    Попробовать бесплатно
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Связаться с нами
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Icon name="GraduationCap" size={20} className="text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">EduPlatform</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Современная платформа для онлайн-обучения с сертификацией
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Курсы</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/courses" className="hover:text-foreground transition-colors">Каталог</Link></li>
                <li><Link to="/courses?filter=popular" className="hover:text-foreground transition-colors">Популярные</Link></li>
                <li><Link to="/courses?filter=new" className="hover:text-foreground transition-colors">Новинки</Link></li>
                <li><Link to="/courses?filter=free" className="hover:text-foreground transition-colors">Бесплатные</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">О платформе</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">О нас</Link></li>
                <li><Link to="/teachers" className="hover:text-foreground transition-colors">Преподаватели</Link></li>
                <li><Link to="/reviews" className="hover:text-foreground transition-colors">Отзывы</Link></li>
                <li><Link to="/blog" className="hover:text-foreground transition-colors">Блог</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:info@eduplatform.ru" className="hover:text-foreground transition-colors">
                    info@eduplatform.ru
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+78001234567" className="hover:text-foreground transition-colors">
                    +7 (800) 123-45-67
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 EduPlatform. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
