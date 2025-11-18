import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "Mail",
      title: "Email",
      content: "info@eduplatform.ru",
      link: "mailto:info@eduplatform.ru",
    },
    {
      icon: "Phone",
      title: "Телефон",
      content: "+7 (800) 123-45-67",
      link: "tel:+78001234567",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      content: "Москва, ул. Примерная, д. 123",
      link: null,
    },
    {
      icon: "Clock",
      title: "Часы работы",
      content: "Пн-Пт: 9:00 - 18:00",
      link: null,
    },
  ];

  const faqs = [
    {
      question: "Как записаться на курс?",
      answer: "Выберите интересующий курс в каталоге, нажмите кнопку 'Записаться на курс' и следуйте инструкциям. После оплаты вы получите доступ к материалам курса.",
    },
    {
      question: "Можно ли получить возврат средств?",
      answer: "Да, мы предоставляем 14-дневную гарантию возврата средств. Если курс вам не подошел, вы можете запросить полный возврат в течение 14 дней с момента покупки.",
    },
    {
      question: "Как долго доступны материалы курса?",
      answer: "После покупки курса вы получаете пожизненный доступ ко всем материалам, включая будущие обновления.",
    },
    {
      question: "Можно ли учиться в своем темпе?",
      answer: "Конечно! Все наши курсы доступны в формате самостоятельного обучения. Вы можете проходить уроки в удобное для вас время.",
    },
    {
      question: "Как получить сертификат?",
      answer: "После успешного завершения курса и сдачи финального проекта вы автоматически получите сертификат о прохождении курса.",
    },
    {
      question: "Есть ли поддержка менторов?",
      answer: "Да, на всех наших курсах предоставляется поддержка опытных менторов через чат и еженедельные вебинары Q&A.",
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
            <Link to="/contact" className="text-sm font-medium text-primary">
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
        <section className="py-12 bg-gradient-to-b from-background to-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h1>
              <p className="text-xl text-muted-foreground">
                Есть вопросы? Мы всегда рады помочь вам в выборе курса или решении любых вопросов
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
                    <CardDescription>
                      Заполните форму, и мы ответим в течение 24 часов
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ваше имя</Label>
                        <Input
                          id="name"
                          placeholder="Введите ваше имя"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Тема</Label>
                        <Input
                          id="subject"
                          placeholder="О чем ваш вопрос?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Сообщение</Label>
                        <Textarea
                          id="message"
                          placeholder="Опишите ваш вопрос подробнее..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Icon name="Send" size={18} className="mr-2" />
                        Отправить сообщение
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Контактная информация</CardTitle>
                      <CardDescription>
                        Вы можете связаться с нами любым удобным способом
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name={item.icon} size={20} className="text-primary" />
                          </div>
                          <div>
                            <p className="font-medium mb-1">{item.title}</p>
                            {item.link ? (
                              <a 
                                href={item.link}
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                {item.content}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{item.content}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Социальные сети</CardTitle>
                      <CardDescription>
                        Следите за нашими обновлениями
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-3">
                        <Button variant="outline" size="icon" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <Icon name="Facebook" size={20} />
                          </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <Icon name="Twitter" size={20} />
                          </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <Icon name="Instagram" size={20} />
                          </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            <Icon name="Linkedin" size={20} />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h2>
                <p className="text-muted-foreground">
                  Ответы на самые популярные вопросы о наших курсах
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full bg-background rounded-lg">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="px-6 text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl mb-4">
                  Готовы начать обучение?
                </CardTitle>
                <CardDescription className="text-lg">
                  Изучите наш каталог курсов и выберите программу для развития ваших навыков
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center pb-8">
                <Link to="/courses">
                  <Button size="lg">
                    Смотреть курсы
                    <Icon name="ArrowRight" size={18} className="ml-2" />
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

export default Contact;
