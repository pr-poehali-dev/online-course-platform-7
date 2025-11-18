import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = {
    name: "Мария Петрова",
    email: "maria@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    joined: "Январь 2024",
    coursesCompleted: 3,
    coursesInProgress: 2,
  };

  const myCourses = [
    {
      id: 1,
      title: "Веб-разработка с нуля",
      progress: 65,
      lastAccessed: "2 дня назад",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      title: "UI/UX дизайн",
      progress: 42,
      lastAccessed: "5 дней назад",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    },
  ];

  const completedCourses = [
    {
      id: 3,
      title: "Основы HTML и CSS",
      completedDate: "15 февраля 2024",
      certificate: true,
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
    },
    {
      id: 4,
      title: "JavaScript для начинающих",
      completedDate: "28 января 2024",
      certificate: true,
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a",
    },
  ];

  const achievements = [
    {
      title: "Первый курс",
      description: "Завершите ваш первый курс",
      unlocked: true,
      icon: "Award",
    },
    {
      title: "Марафонец",
      description: "Учитесь 7 дней подряд",
      unlocked: true,
      icon: "Zap",
    },
    {
      title: "Эксперт",
      description: "Завершите 5 курсов",
      unlocked: false,
      icon: "Star",
    },
    {
      title: "Наставник",
      description: "Помогите 10 студентам",
      unlocked: false,
      icon: "Users",
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
                <Icon name="User" size={18} className="mr-2" />
                Профиль
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="md:col-span-1">
                <CardHeader className="text-center">
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <CardTitle>{user.name}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                  <p className="text-xs text-muted-foreground pt-2">
                    На платформе с {user.joined}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-around text-center py-4 border-y">
                    <div>
                      <p className="text-2xl font-bold">{user.coursesCompleted}</p>
                      <p className="text-xs text-muted-foreground">Завершено</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{user.coursesInProgress}</p>
                      <p className="text-xs text-muted-foreground">В процессе</p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Icon name="Settings" size={18} className="mr-2" />
                    Настройки
                  </Button>
                </CardContent>
              </Card>

              <div className="md:col-span-2">
                <Tabs defaultValue="courses" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="courses">Мои курсы</TabsTrigger>
                    <TabsTrigger value="completed">Завершенные</TabsTrigger>
                    <TabsTrigger value="achievements">Достижения</TabsTrigger>
                  </TabsList>

                  <TabsContent value="courses" className="space-y-4 mt-6">
                    {myCourses.map((course) => (
                      <Card key={course.id}>
                        <div className="flex flex-col sm:flex-row gap-4 p-6">
                          <div className="w-full sm:w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={course.image} 
                              alt={course.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 space-y-3">
                            <div>
                              <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                Последний раз: {course.lastAccessed}
                              </p>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Прогресс</span>
                                <span className="font-medium">{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} />
                            </div>
                            <Link to={`/course/${course.id}`}>
                              <Button size="sm">
                                Продолжить обучение
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="completed" className="space-y-4 mt-6">
                    {completedCourses.map((course) => (
                      <Card key={course.id}>
                        <div className="flex flex-col sm:flex-row gap-4 p-6">
                          <div className="w-full sm:w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={course.image} 
                              alt={course.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-semibold text-lg">{course.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                  Завершен: {course.completedDate}
                                </p>
                              </div>
                              <Badge variant="secondary" className="flex items-center gap-1">
                                <Icon name="Check" size={14} />
                                Пройден
                              </Badge>
                            </div>
                            <Button size="sm" variant="outline">
                              <Icon name="Download" size={16} className="mr-2" />
                              Скачать сертификат
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="achievements" className="mt-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {achievements.map((achievement, index) => (
                        <Card key={index} className={achievement.unlocked ? "" : "opacity-50"}>
                          <CardHeader>
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                                achievement.unlocked ? "bg-primary/10" : "bg-muted"
                              }`}>
                                <Icon 
                                  name={achievement.icon} 
                                  size={24} 
                                  className={achievement.unlocked ? "text-primary" : "text-muted-foreground"}
                                />
                              </div>
                              <div className="flex-1">
                                <CardTitle className="text-base">{achievement.title}</CardTitle>
                                <CardDescription className="text-sm">
                                  {achievement.description}
                                </CardDescription>
                              </div>
                              {achievement.unlocked && (
                                <Icon name="Check" size={20} className="text-green-500" />
                              )}
                            </div>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">
                  Продолжайте обучение!
                </CardTitle>
                <CardDescription>
                  Изучите новые курсы и расширьте свои навыки
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center pb-8">
                <Link to="/courses">
                  <Button size="lg">
                    Открыть каталог курсов
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
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

export default Profile;
