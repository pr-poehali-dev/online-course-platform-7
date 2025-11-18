import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contacts = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@eduplatform.ru',
      description: 'Ответим в течение 24 часов',
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      description: 'Пн-Пт с 9:00 до 18:00',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'г. Москва, ул. Примерная, д. 1',
      description: 'Офис на 5 этаже',
    },
  ];

  const faqItems = [
    {
      question: 'Как записаться на курс?',
      answer: 'Выберите интересующий курс в каталоге, нажмите кнопку "Записаться на курс" и следуйте инструкциям. После оплаты вы получите доступ к материалам.',
    },
    {
      question: 'Можно ли вернуть деньги за курс?',
      answer: 'Да, в течение 14 дней с момента покупки вы можете запросить полный возврат средств без объяснения причин.',
    },
    {
      question: 'Как долго доступны материалы курса?',
      answer: 'После покупки курса доступ к материалам остается у вас навсегда. Вы можете проходить курс в удобном темпе и возвращаться к материалам в любое время.',
    },
    {
      question: 'Получу ли я сертификат?',
      answer: 'Да, после успешного завершения курса и прохождения всех тестов вы получите сертификат о прохождении обучения.',
    },
    {
      question: 'Есть ли поддержка преподавателей?',
      answer: 'Да, у каждого курса есть чат с преподавателем и другими студентами, где вы можете задавать вопросы и получать помощь.',
    },
    {
      question: 'Можно ли оплатить курс в рассрочку?',
      answer: 'Да, мы предлагаем рассрочку на 3, 6 или 12 месяцев для курсов стоимостью от 10 000 рублей.',
    },
  ];

  return (
    <div className="flex-1">
      <section className="py-12 border-b bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Свяжитесь с нами</h1>
            <p className="text-xl text-muted-foreground">
              Есть вопросы? Мы всегда рады помочь!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={contact.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{contact.title}</CardTitle>
                  <CardDescription>{contact.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{contact.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Напишите нам</h2>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input
                        id="name"
                        placeholder="Иван Иванов"
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
                        placeholder="ivan@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Тема</Label>
                      <Input
                        id="subject"
                        placeholder="Вопрос о курсе"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        placeholder="Расскажите подробнее..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6" id="faq">Часто задаваемые вопросы</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Card className="mt-8 bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageCircle" size={24} />
                    Не нашли ответ?
                  </CardTitle>
                  <CardDescription>
                    Напишите нам, и мы обязательно вам поможем
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    <Icon name="Mail" size={16} className="mr-2" />
                    Задать вопрос
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Мы в социальных сетях</h2>
            <p className="text-muted-foreground mb-8">
              Подписывайтесь на нас и будьте в курсе новых курсов и акций
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Facebook" size={20} />
                Facebook
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Twitter" size={20} />
                Twitter
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Instagram" size={20} />
                Instagram
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Youtube" size={20} />
                YouTube
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
