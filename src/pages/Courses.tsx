import { useState } from "react";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Веб-разработка с нуля",
      description: "Создавайте современные сайты и приложения. От основ HTML до React.",
      duration: "12 недель",
      level: "Начинающий",
      category: "Программирование",
      students: 2450,
      rating: 4.8,
      price: "29 990 ₽",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 2,
      title: "Python для анализа данных",
      description: "Освойте Python, pandas и машинное обучение для работы с данными.",
      duration: "10 недель",
      level: "Средний",
      category: "Программирование",
      students: 1890,
      rating: 4.9,
      price: "34 990 ₽",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      id: 3,
      title: "UI/UX дизайн",
      description: "Создавайте удобные интерфейсы и изучите принципы пользовательского опыта.",
      duration: "8 недель",
      level: "Начинающий",
      category: "Дизайн",
      students: 1650,
      rating: 4.7,
      price: "24 990 ₽",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    },
    {
      id: 4,
      title: "Digital-маркетинг",
      description: "Освойте современные инструменты цифрового маркетинга и продвижения.",
      duration: "6 недель",
      level: "Начинающий",
      category: "Маркетинг",
      students: 2100,
      rating: 4.6,
      price: "19 990 ₽",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
      id: 5,
      title: "Fullstack JavaScript",
      description: "Станьте универсальным разработчиком: Node.js, React, MongoDB.",
      duration: "16 недель",
      level: "Продвинутый",
      category: "Программирование",
      students: 1230,
      rating: 4.9,
      price: "44 990 ₽",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    },
    {
      id: 6,
      title: "Графический дизайн",
      description: "Изучите Adobe Photoshop, Illustrator и создавайте профессиональные работы.",
      duration: "10 недель",
      level: "Средний",
      category: "Дизайн",
      students: 1780,
      rating: 4.7,
      price: "27 990 ₽",
      image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Каталог курсов</h1>
            <p className="text-xl text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Найдите идеальный курс для вашего профессионального роста
            </p>

            <div className="max-w-4xl mx-auto space-y-4">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск курсов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Категория" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все категории</SelectItem>
                    <SelectItem value="Программирование">Программирование</SelectItem>
                    <SelectItem value="Дизайн">Дизайн</SelectItem>
                    <SelectItem value="Маркетинг">Маркетинг</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Уровень" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все уровни</SelectItem>
                    <SelectItem value="Начинающий">Начинающий</SelectItem>
                    <SelectItem value="Средний">Средний</SelectItem>
                    <SelectItem value="Продвинутый">Продвинутый</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Найдено курсов: <span className="font-semibold text-foreground">{filteredCourses.length}</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <Badge variant="secondary">{course.level}</Badge>
                      <Badge variant="outline">{course.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1 ml-auto">
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
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{course.rating}</span>
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

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Курсы не найдены</h3>
                <p className="text-muted-foreground mb-4">
                  Попробуйте изменить параметры поиска или фильтры
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedLevel("all");
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;