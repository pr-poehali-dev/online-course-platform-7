import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Веб-разработка для начинающих',
      category: 'programming',
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
      category: 'data',
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
      title: 'Цифровой маркетинг',
      category: 'business',
      instructor: 'Елена Волкова',
      duration: '6 недель',
      price: '9 990 ₽',
      rating: 4.7,
      students: 2103,
      description: 'Эффективные стратегии продвижения в интернете',
      lessons: 32,
      level: 'Начальный',
    },
    {
      id: 4,
      title: 'UX/UI Дизайн',
      category: 'design',
      instructor: 'Дмитрий Козлов',
      duration: '10 недель',
      price: '15 990 ₽',
      rating: 4.9,
      students: 967,
      description: 'Создавайте удобные и красивые интерфейсы',
      lessons: 52,
      level: 'Средний',
    },
    {
      id: 5,
      title: 'Python для автоматизации',
      category: 'programming',
      instructor: 'Сергей Иванов',
      duration: '5 недель',
      price: '8 990 ₽',
      rating: 4.6,
      students: 1543,
      description: 'Автоматизируйте рутинные задачи с Python',
      lessons: 28,
      level: 'Начальный',
    },
    {
      id: 6,
      title: 'Управление проектами Agile',
      category: 'business',
      instructor: 'Ольга Новикова',
      duration: '4 недели',
      price: '7 990 ₽',
      rating: 4.8,
      students: 1876,
      description: 'Эффективное управление проектами по Agile-методологии',
      lessons: 24,
      level: 'Средний',
    },
    {
      id: 7,
      title: 'Мобильная разработка на React Native',
      category: 'programming',
      instructor: 'Игорь Соколов',
      duration: '10 недель',
      price: '16 990 ₽',
      rating: 4.7,
      students: 743,
      description: 'Создавайте мобильные приложения для iOS и Android',
      lessons: 56,
      level: 'Средний',
    },
    {
      id: 8,
      title: 'Графический дизайн',
      category: 'design',
      instructor: 'Мария Белова',
      duration: '8 недель',
      price: '11 990 ₽',
      rating: 4.8,
      students: 1321,
      description: 'Основы графического дизайна и работы в Adobe Creative Suite',
      lessons: 42,
      level: 'Начальный',
    },
  ];

  const categories = [
    { id: 'all', label: 'Все курсы', icon: 'BookOpen' },
    { id: 'programming', label: 'Программирование', icon: 'Code' },
    { id: 'data', label: 'Анализ данных', icon: 'BarChart' },
    { id: 'business', label: 'Бизнес', icon: 'Briefcase' },
    { id: 'design', label: 'Дизайн', icon: 'Palette' },
  ];

  const filteredCourses = courses
    .filter(course => selectedCategory === 'all' || course.category === selectedCategory)
    .filter(course => 
      searchQuery === '' || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="flex-1">
      <section className="py-12 border-b">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">Каталог курсов</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Найдите курс, который поможет вам достичь ваших целей
          </p>
          
          <div className="relative max-w-2xl">
            <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск курсов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="gap-2"
              >
                <Icon name={category.icon as any} size={16} />
                {category.label}
              </Button>
            ))}
          </div>

          <div className="mb-6 text-sm text-muted-foreground">
            Найдено курсов: {filteredCourses.length}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <Card 
                key={course.id} 
                className="hover-scale cursor-pointer animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.05}s` }}
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
                <CardContent className="flex-1 flex flex-col justify-between">
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

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <Icon name="SearchX" size={64} className="mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">Курсы не найдены</h3>
              <p className="text-muted-foreground">Попробуйте изменить критерии поиска</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
