import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('overview');

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
  ];

  const categories = [
    { id: 'all', label: 'Все курсы', icon: 'BookOpen' },
    { id: 'programming', label: 'Программирование', icon: 'Code' },
    { id: 'data', label: 'Анализ данных', icon: 'BarChart' },
    { id: 'business', label: 'Бизнес', icon: 'Briefcase' },
    { id: 'design', label: 'Дизайн', icon: 'Palette' },
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const userCourses = [
    { id: 1, title: 'Веб-разработка для начинающих', progress: 65 },
    { id: 2, title: 'Python для автоматизации', progress: 30 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
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
                <Button size="lg" className="text-lg">
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти курс
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Узнать больше
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

        <section id="catalog" className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Каталог курсов</h2>
            
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
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
                    <div className="space-y-2 text-sm text-muted-foreground">
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
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{course.price}</span>
                    <Button>Подробнее</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="course-detail" className="py-20 bg-muted/30">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-4">Веб-разработка для начинающих</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Научитесь создавать современные веб-сайты с нуля. Этот курс идеально подходит для начинающих разработчиков.
                </p>
                
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Обзор</TabsTrigger>
                    <TabsTrigger value="program">Программа</TabsTrigger>
                    <TabsTrigger value="reviews">Отзывы</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Что вы узнаете</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {['Основы HTML и CSS', 'JavaScript и DOM-манипуляции', 'Responsive дизайн', 'Git и GitHub', 'Деплой приложений'].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="program" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Программа курса</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="module-1">
                            <AccordionTrigger>Модуль 1: Введение в HTML</AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 text-sm">
                                <li>1.1 Структура HTML документа</li>
                                <li>1.2 Основные теги</li>
                                <li>1.3 Формы и таблицы</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="module-2">
                            <AccordionTrigger>Модуль 2: CSS и стилизация</AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 text-sm">
                                <li>2.1 Селекторы и каскадность</li>
                                <li>2.2 Flexbox и Grid</li>
                                <li>2.3 Адаптивный дизайн</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="module-3">
                            <AccordionTrigger>Модуль 3: JavaScript основы</AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-2 text-sm">
                                <li>3.1 Переменные и типы данных</li>
                                <li>3.2 Функции и события</li>
                                <li>3.3 Работа с DOM</li>
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>Отзывы студентов</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {[
                          { name: 'Иван Петров', rating: 5, text: 'Отличный курс! Все понятно объяснено, много практики.' },
                          { name: 'Мария Сидорова', rating: 5, text: 'Преподаватель настоящий профессионал. Рекомендую!' },
                        ].map((review, i) => (
                          <div key={i} className="border-b pb-4 last:border-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-semibold">{review.name}</span>
                              <div className="flex">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                  <Icon key={i} name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">{review.text}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <Card className="sticky top-20">
                  <CardHeader>
                    <CardTitle className="text-3xl">12 990 ₽</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full" size="lg">
                      Записаться на курс
                    </Button>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} className="text-muted-foreground" />
                        <span>8 недель обучения</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="BookOpen" size={16} className="text-muted-foreground" />
                        <span>45 видео-уроков</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Award" size={16} className="text-muted-foreground" />
                        <span>Сертификат</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={16} className="text-muted-foreground" />
                        <span>1234 студентов</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="profile" className="py-20">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Личный кабинет</h2>
            
            <div className="grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Мои курсы</CardTitle>
                  <CardDescription>Ваш прогресс обучения</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {userCourses.map((course) => (
                    <div key={course.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{course.title}</span>
                        <span className="text-sm text-muted-foreground">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} />
                      <Button variant="outline" size="sm" className="w-full">
                        Продолжить обучение
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Достижения</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: 'Trophy', label: 'Курсов завершено', value: '3' },
                      { icon: 'Award', label: 'Сертификатов', value: '3' },
                      { icon: 'Target', label: 'Часов обучения', value: '47' },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-4 bg-muted/50 rounded-lg">
                        <Icon name={stat.icon as any} size={32} className="mx-auto mb-2 text-primary" />
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-muted/30">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Часто задаваемые вопросы</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>Как начать обучение?</AccordionTrigger>
                <AccordionContent>
                  Выберите интересующий курс из каталога, нажмите "Записаться на курс" и следуйте инструкциям для оплаты. После оплаты вы получите доступ к курсу в личном кабинете.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-2">
                <AccordionTrigger>Есть ли сертификат по окончанию?</AccordionTrigger>
                <AccordionContent>
                  Да, после успешного завершения курса и прохождения итогового теста вы получите электронный сертификат, подтверждающий ваши знания.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-3">
                <AccordionTrigger>Можно ли учиться в своем темпе?</AccordionTrigger>
                <AccordionContent>
                  Абсолютно! Все материалы курса доступны сразу после оплаты, и вы можете учиться в удобном для вас темпе.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-4">
                <AccordionTrigger>Есть ли поддержка от преподавателей?</AccordionTrigger>
                <AccordionContent>
                  Да, на платформе есть возможность задавать вопросы преподавателям. Средний срок ответа — 24 часа.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="faq-5">
                <AccordionTrigger>Можно ли вернуть деньги за курс?</AccordionTrigger>
                <AccordionContent>
                  Да, в течение 14 дней с момента покупки вы можете вернуть деньги, если курс вам не подошел и вы просмотрели менее 30% материалов.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-muted-foreground">
                Есть вопросы? Мы всегда рады помочь!
              </p>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ваше имя
                    </label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="ivan@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Сообщение
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите, чем мы можем вам помочь..."
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
