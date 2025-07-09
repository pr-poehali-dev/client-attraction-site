import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Разработка
            <span className="text-blue-400"> будущего</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Создаем высокотехнологичные IT-решения и маркетинговые стратегии для
            амбициозных проектов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              Начать проект
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg"
            >
              Портфолио
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              О нас
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Команда экспертов в области IT-разработки и digital-маркетинга с
              опытом работы более 5 лет
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Code"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-2xl">Разработка</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  Создаем современные веб-приложения, мобильные решения и
                  корпоративные системы
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="TrendingUp"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-2xl">Маркетинг</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  Разрабатываем эффективные стратегии продвижения и аналитики
                  для роста бизнеса
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Shield"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-2xl">Поддержка</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600">
                  Обеспечиваем техническую поддержку и развитие проектов на всех
                  этапах
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Портфолио
            </h2>
            <p className="text-xl text-slate-600">
              Наши последние проекты и успешные кейсы
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-t-lg flex items-center justify-center">
                <Icon name="Smartphone" size={64} className="text-white" />
              </div>
              <CardHeader>
                <CardTitle>Мобильное приложение</CardTitle>
                <CardDescription>E-commerce платформа</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Разработка iOS/Android приложения для интернет-магазина с
                  интеграцией платежных систем
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 rounded-t-lg flex items-center justify-center">
                <Icon name="Globe" size={64} className="text-white" />
              </div>
              <CardHeader>
                <CardTitle>Корпоративный сайт</CardTitle>
                <CardDescription>Финтех стартап</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Создание сайта с административной панелью и системой
                  управления клиентами
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 rounded-t-lg flex items-center justify-center">
                <Icon name="BarChart3" size={64} className="text-white" />
              </div>
              <CardHeader>
                <CardTitle>Аналитическая система</CardTitle>
                <CardDescription>B2B решение</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Платформа для анализа данных и генерации отчетов с
                  интерактивными дашбордами
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Команда
            </h2>
            <p className="text-xl text-slate-600">
              Профессионалы, которые воплощают ваши идеи в реальность
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Алексей Петров</CardTitle>
                <CardDescription className="text-lg">
                  Lead Developer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Fullstack разработчик с 7-летним опытом. Специализируется на
                  React, Node.js и облачных технологиях
                </p>
                <div className="flex justify-center space-x-4">
                  <Icon
                    name="Github"
                    size={20}
                    className="text-slate-400 hover:text-slate-600 cursor-pointer"
                  />
                  <Icon
                    name="Linkedin"
                    size={20}
                    className="text-slate-400 hover:text-slate-600 cursor-pointer"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Мария Иванова</CardTitle>
                <CardDescription className="text-lg">
                  Marketing Director
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Digital-маркетолог с опытом работы в крупных агентствах.
                  Эксперт по SEO, контенту и аналитике
                </p>
                <div className="flex justify-center space-x-4">
                  <Icon
                    name="Github"
                    size={20}
                    className="text-slate-400 hover:text-slate-600 cursor-pointer"
                  />
                  <Icon
                    name="Linkedin"
                    size={20}
                    className="text-slate-400 hover:text-slate-600 cursor-pointer"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Дмитрий Сидоров</CardTitle>
                <CardDescription className="text-lg">
                  UX/UI Designer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Дизайнер интерфейсов с художественным образованием. Создает
                  современные и функциональные решения
                </p>
                <div className="flex justify-center space-x-4">
                  <Icon
                    name="Github"
                    size={20}
                    className="text-slate-400 hover:text-slate-600 cursor-pointer"
                  />
                  <Icon
                    name="Linkedin"
                    size={20}
                    className="text-slate-400 hover:text-slate-600 cursor-pointer"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Процесс работы
            </h2>
            <p className="text-xl text-slate-600">
              Как мы создаем успешные проекты
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Анализ</h3>
              <p className="text-slate-600">
                Изучаем ваш бизнес, целевую аудиторию и конкурентов
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Планирование
              </h3>
              <p className="text-slate-600">
                Создаем техническое задание и выбираем оптимальные решения
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Разработка
              </h3>
              <p className="text-slate-600">
                Реализуем проект с постоянным контролем качества
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Запуск</h3>
              <p className="text-slate-600">
                Тестируем, запускаем и обеспечиваем поддержку
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-slate-600">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Сколько времени занимает разработка проекта?
                </AccordionTrigger>
                <AccordionContent>
                  Время разработки зависит от сложности проекта. Простой сайт —
                  2-4 недели, сложное веб-приложение — 2-6 месяцев. Мы всегда
                  обсуждаем сроки на этапе планирования.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Какие технологии вы используете?
                </AccordionTrigger>
                <AccordionContent>
                  Мы работаем с современным стеком: React, Vue.js, Node.js,
                  Python, PostgreSQL, MongoDB. Выбираем технологии исходя из
                  требований проекта.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Предоставляете ли вы техническую поддержку?
                </AccordionTrigger>
                <AccordionContent>
                  Да, мы предоставляем техническую поддержку и гарантию на все
                  проекты. Также предлагаем пакеты дальнейшего сопровождения и
                  развития.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Как формируется стоимость проекта?
                </AccordionTrigger>
                <AccordionContent>
                  Стоимость рассчитывается индивидуально на основе технических
                  требований, сложности дизайна, количества функций и сроков.
                  Предоставляем детальную смету.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Связаться с нами
            </h2>
            <p className="text-xl text-slate-300">
              Готовы обсудить ваш проект? Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} className="text-blue-400" />
                  <span className="text-lg">hello@techcompany.ru</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-blue-400" />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} className="text-blue-400" />
                  <span className="text-lg">Москва, ул. Тверская, 15</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Мы в соцсетях</h4>
                <div className="flex space-x-4">
                  <Icon
                    name="Github"
                    size={24}
                    className="text-slate-400 hover:text-white cursor-pointer transition-colors"
                  />
                  <Icon
                    name="Linkedin"
                    size={24}
                    className="text-slate-400 hover:text-white cursor-pointer transition-colors"
                  />
                  <Icon
                    name="Twitter"
                    size={24}
                    className="text-slate-400 hover:text-white cursor-pointer transition-colors"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8">Отправить сообщение</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Ваше имя"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
                <Input
                  placeholder="Тема сообщения"
                  className="bg-slate-800 border-slate-700 text-white"
                />
                <Textarea
                  placeholder="Расскажите о вашем проекте..."
                  className="bg-slate-800 border-slate-700 text-white min-h-[120px]"
                />
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 w-full"
                >
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 TechCompany. Все права защищены.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
