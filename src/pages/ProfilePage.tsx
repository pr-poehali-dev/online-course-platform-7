import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

export const ProfilePage = () => {
  const user = {
    name: 'Иван Петров',
    email: 'ivan.petrov@example.com',
    registeredDate: 'Январь 2024',
    completedCourses: 3,
    inProgressCourses: 2,
    certificates: 3,
  };

  const activeCourses = [
    {
      id: 1,
      title: 'Веб-разработка для начинающих',
      progress: 65,
      nextLesson: 'Основы React',
      instructor: 'Анна Смирнова',
      totalLessons: 45,
      completedLessons: 29,
    },
    {
      id: 2,
      title: 'Python для автоматизации',
      progress: 30,
      nextLesson: 'Работа с файлами',
      instructor: 'Сергей Иванов',
      totalLessons: 28,
      completedLessons: 8,
    },
  ];

  const completedCourses = [
    {
      id: 3,
      title: 'Основы HTML и CSS',
      completedDate: 'Октябрь 2024',
      certificate: true,
      rating: 5,
    },
    {
      id: 4,
      title: 'JavaScript для начинающих',
      completedDate: 'Сентябрь 2024',
      certificate: true,
      rating: 5,
    },
    {
      id: 5,
      title: 'Основы Git',
      completedDate: 'Август 2024',
      certificate: true,
      rating: 4,
    },
  ];

  const achievements = [
    { icon: 'Trophy', title: 'Первый курс', description: 'Завершите ваш первый курс', earned: true },
    { icon: 'Target', title: 'Мастер', description: 'Завершите 5 курсов', earned: false },
    { icon: 'Zap', title: 'Быстрый старт', description: 'Завершите курс за 1 неделю', earned: true },
    { icon: 'Star', title: 'Перфекционист', description: 'Получите 100% на всех тестах', earned: false },
  ];

  return (
    <div className="flex-1 py-8">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarFallback className="text-3xl">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center pt-4 border-t">
                  <div>
                    <div className="text-2xl font-bold text-primary">{user.completedCourses}</div>
                    <div className="text-xs text-muted-foreground">Завершено</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{user.inProgressCourses}</div>
                    <div className="text-xs text-muted-foreground">В процессе</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{user.certificates}</div>
                    <div className="text-xs text-muted-foreground">Сертификаты</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="User" size={16} className="mr-2" />
                    Редактировать профиль
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Настройки
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="LogOut" size={16} className="mr-2" />
                    Выйти
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Достижения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg border text-center ${
                        achievement.earned 
                          ? 'bg-primary/5 border-primary' 
                          : 'bg-muted/50 border-muted opacity-50'
                      }`}
                    >
                      <Icon 
                        name={achievement.icon as any} 
                        size={24} 
                        className={achievement.earned ? 'text-primary mx-auto mb-2' : 'text-muted-foreground mx-auto mb-2'} 
                      />
                      <div className="text-xs font-semibold">{achievement.title}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="active" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="active">Активные курсы</TabsTrigger>
                <TabsTrigger value="completed">Завершенные</TabsTrigger>
                <TabsTrigger value="certificates">Сертификаты</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="mt-6 space-y-4">
                {activeCourses.map((course) => (
                  <Card key={course.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="mb-2">{course.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <Icon name="User" size={14} />
                            {course.instructor}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary">{course.progress}%</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-muted-foreground">
                            {course.completedLessons} из {course.totalLessons} уроков
                          </span>
                        </div>
                        <Progress value={course.progress} />
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="PlayCircle" size={16} />
                          <span>Далее: {course.nextLesson}</span>
                        </div>
                        <Button asChild>
                          <Link to={`/courses/${course.id}`}>Продолжить</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="border-dashed">
                  <CardHeader className="text-center">
                    <Icon name="Plus" size={48} className="mx-auto mb-4 text-muted-foreground" />
                    <CardTitle>Найти новый курс</CardTitle>
                    <CardDescription>
                      Выберите из тысяч курсов и начните учиться сегодня
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button asChild>
                      <Link to="/courses">Каталог курсов</Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="completed" className="mt-6 space-y-4">
                {completedCourses.map((course) => (
                  <Card key={course.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="mb-2">{course.title}</CardTitle>
                          <CardDescription>
                            Завершен: {course.completedDate}
                          </CardDescription>
                        </div>
                        {course.certificate && (
                          <Badge variant="secondary" className="gap-1">
                            <Icon name="Award" size={14} />
                            Сертификат
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={16}
                              className={
                                i < course.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-muted-foreground'
                              }
                            />
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Повторить
                          </Button>
                          {course.certificate && (
                            <Button size="sm">
                              <Icon name="Download" size={14} className="mr-2" />
                              Сертификат
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="certificates" className="mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {completedCourses
                    .filter(course => course.certificate)
                    .map((course) => (
                      <Card key={course.id} className="hover-scale cursor-pointer">
                        <CardHeader>
                          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex flex-col items-center justify-center p-6 text-center">
                            <Icon name="Award" size={48} className="text-primary mb-3" />
                            <div className="text-sm font-semibold">Сертификат о прохождении курса</div>
                            <div className="text-xs text-muted-foreground mt-1">{course.completedDate}</div>
                          </div>
                          <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1">
                              <Icon name="Download" size={14} className="mr-2" />
                              Скачать
                            </Button>
                            <Button size="sm" variant="outline">
                              <Icon name="Share2" size={14} />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
