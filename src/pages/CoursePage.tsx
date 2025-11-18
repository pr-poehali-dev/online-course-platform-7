import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { Link, useParams } from "react-router-dom";

const CoursePage = () => {
  const { id } = useParams();

  const course = {
    id: 1,
    title: "Веб-разработка с нуля",
    description: "Создавайте современные сайты и приложения. От основ HTML до React.",
    fullDescription: "Комплексный курс веб-разработки, который проведет вас от основ HTML и CSS до создания современных React-приложений. Вы изучите все необходимые технологии и инструменты для работы фронтенд-разработчиком.",
    duration: "12 недель",
    level: "Начинающий",
    category: "Программирование",
    students: 2450,
    rating: 4.8,
    reviews: 342,
    price: "29 990 ₽",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    instructor: {
      name: "Алексей Иванов",
      role: "Senior Frontend Developer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    curriculum: [
      {
        module: "Модуль 1: Основы HTML и CSS",
        lessons: [
          "Введение в веб-разработку",
          "Структура HTML документа",
          "Основы CSS и стилизация",
          "Flexbox и Grid",
          "Адаптивный дизайн",
        ],
      },
      {
        module: "Модуль 2: JavaScript основы",
        lessons: [
          "Синтаксис JavaScript",
          "Переменные и типы данных",
          "Функции и области видимости",
          "Работа с DOM",
          "События и обработчики",
        ],
      },
      {
        module: "Модуль 3: React и современные технологии",
        lessons: [
          "Введение в React",
          "Компоненты и props",
          "State и хуки",
          "Работа с API",
          "Создание полноценного приложения",
        ],
      },
    ],
    features: [
      "72 видеоурока",
      "15+ практических проектов",
      "Поддержка менторов 24/7",
      "Сертификат по окончании",
      "Доступ к материалам навсегда",
      "Закрытое комьюнити студентов",
    ],
  };

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
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <Badge variant="secondary">{course.level}</Badge>
                      <Badge variant="outline">{course.category}</Badge>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{course.title}</h1>
                    <p className="text-xl text-muted-foreground mb-6">{course.fullDescription}</p>
                  </div>

                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex items-center gap-6 flex-wrap">
                    <div className="flex items-center gap-2">
                      <Icon name="Star" size={20} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{course.rating}</span>
                      <span className="text-muted-foreground">({course.reviews} отзывов)</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Users" size={20} />
                      <span>{course.students.toLocaleString()} студентов</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={20} />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 py-6 border-y">
                    <img 
                      src={course.instructor.avatar} 
                      alt={course.instructor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{course.instructor.name}</p>
                      <p className="text-sm text-muted-foreground">{course.instructor.role}</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-1">
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle className="text-3xl">{course.price}</CardTitle>
                      <CardDescription>Единоразовая оплата</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button className="w-full" size="lg">
                        Записаться на курс
                      </Button>
                      <Button className="w-full" variant="outline" size="lg">
                        Пробный урок
                      </Button>
                      
                      <div className="pt-4 border-t space-y-3">
                        <p className="font-semibold">Что входит в курс:</p>
                        <ul className="space-y-2">
                          {course.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Программа курса</h2>
              <Accordion type="single" collapsible className="w-full">
                {course.curriculum.map((module, index) => (
                  <AccordionItem key={index} value={`module-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold">
                      {module.module}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pt-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-center gap-3 text-muted-foreground">
                            <Icon name="PlayCircle" size={18} className="text-primary" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl mb-4">
                  Готовы начать обучение?
                </CardTitle>
                <CardDescription className="text-lg">
                  Присоединяйтесь к {course.students.toLocaleString()} студентам, которые уже учатся на этом курсе
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center pb-8">
                <Button size="lg" className="w-full sm:w-auto">
                  Записаться на курс
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Задать вопрос
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

export default CoursePage;
