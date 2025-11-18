import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const featuredCourses = [
    {
      id: 1,
      title: 'Веб-разработка для начинающих',
      category: 'Программирование',
      instructor: 'Анна Смирнова',
      duration: '8 недель',
      price: '12 990 ₽',
      rating: 4.8,
      students: 1234,
      description: 'Научитесь создавать современные веб-сайты с нуля',
      lessons: 45,
      level: 'Начальный',
    },
    {
      id: 2,
      title: 'Data Science и Machine Learning',
      category: 'Анализ данных',
      instructor: 'Михаил Петров',
      duration: '12 недель',
      price: '19 990 ₽',
      rating: 4.9,
      students: 856,
      description: 'Освойте анализ данных и машинное обучение на Python',
      lessons: 68,
      level: 'Продвинутый',
    },
    {
      id: 3,
      title: 'UX/UI Дизайн',
      category: 'Дизайн',
      instructor: 'Дмитрий Козлов',
      duration: '10 недель',
      price: '15 990 ₽',
      rating: 4.9,
      students: 967,
      description: 'Создавайте удобные и красивые интерфейсы',
      lessons: 52,
      level: 'Средний',
    },
  ];

  const benefits = [
    {
      icon: 'BookOpen',
      title: 'Большой выбор курсов',
      description: 'Более 5000 курсов по различным направлениям',
    },
    {
      icon: 'Users',
      title: 'Опытные преподаватели',
      description: 'Эксперты-практики с реальным опытом работы',
    },
    {
      icon: 'Award',
      title: 'Сертификаты',
      description: 'Получите сертификат по завершении обучения',
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Учитесь в удобное для вас время',
    },
  ];

  return (
    <div className="flex-1">
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Учитесь новому каждый день
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Онлайн-курсы от ведущих экспертов. Выбирайте из тысяч курсов и развивайте свои навыки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <Link to="/courses">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти курс
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <a href="#about">Узнать больше</a>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="animate-scale-in">
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Курсов</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl font-bold text-primary">100K+</div>
                <div className="text-sm text-muted-foreground">Студентов</div>
              </div>
              <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Экспертов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Популярные курсы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <Card 
                key={course.id} 
                className="hover-scale cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="BookOpen" size={48} className="text-primary" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="User" size={14} />
                      {course.instructor}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={14} />
                      {course.duration} · {course.lessons} уроков
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={14} />
                      {course.students.toLocaleString()} студентов
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold">{course.price}</span>
                    <Button asChild>
                      <Link to={`/courses/${course.id}`}>Подробнее</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link to="/courses">Смотреть все курсы</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={benefit.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Начните учиться сегодня</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйтесь к тысячам студентов, которые уже развивают свои навыки
            </p>
            <Button size="lg" className="text-lg" asChild>
              <Link to="/profile">
                Начать обучение
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
