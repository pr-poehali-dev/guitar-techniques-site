import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Technique {
  id: string;
  title: string;
  description: string;
  difficulty: 'Начинающий' | 'Средний' | 'Продвинутый';
  icon: string;
  color: string;
}

interface Lesson {
  id: string;
  title: string;
  technique: string;
  duration: string;
  steps: string[];
  tips: string[];
  videoUrl: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const techniques: Technique[] = [
    {
      id: '1',
      title: 'Легато',
      description: 'Плавный переход между нотами без повторного удара по струне. Включает hammer-on и pull-off.',
      difficulty: 'Средний',
      icon: 'Waves',
      color: 'from-orange-500 to-pink-500'
    },
    {
      id: '2',
      title: 'Бенд',
      description: 'Техника изменения высоты звука путем натяжения струны. Придает выразительность соло.',
      difficulty: 'Средний',
      icon: 'TrendingUp',
      color: 'from-purple-500 to-blue-500'
    },
    {
      id: '3',
      title: 'Вибрато',
      description: 'Периодическое изменение высоты тона для создания более живого и эмоционального звучания.',
      difficulty: 'Начинающий',
      icon: 'Activity',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: '4',
      title: 'Слайд',
      description: 'Плавное скольжение пальца по струне от одного лада к другому без прерывания звука.',
      difficulty: 'Начинающий',
      icon: 'MoveRight',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: '5',
      title: 'Пальминг',
      description: 'Глушение струн ребром ладони для получения приглушенного звука в рок и метал музыке.',
      difficulty: 'Средний',
      icon: 'Hand',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: '6',
      title: 'Тэппинг',
      description: 'Извлечение звука постукиванием пальцами правой руки по ладам грифа.',
      difficulty: 'Продвинутый',
      icon: 'Zap',
      color: 'from-purple-600 to-indigo-600'
    }
  ];

  const lessons: Lesson[] = [
    {
      id: '1',
      title: 'Освоение легато за 5 шагов',
      technique: 'Легато',
      duration: '15 мин',
      videoUrl: 'https://www.youtube.com/embed/kqsW9c0kwGM',
      steps: [
        'Разогрейте пальцы легкими упражнениями на хроматической гамме',
        'Практикуйте hammer-on: поставьте палец на 5-й лад, затем резко опустите другой палец на 7-й лад без удара медиатором',
        'Практикуйте pull-off: зажмите одновременно 5-й и 7-й лады, затем сорвите палец с 7-го лада',
        'Объедините hammer-on и pull-off в комбинации 5-7-5',
        'Играйте легато на простых мелодиях, постепенно увеличивая скорость'
      ],
      tips: [
        'Держите пальцы изогнутыми и близко к грифу',
        'Используйте силу пальцев, а не всей руки',
        'Начинайте медленно и увеличивайте темп только когда движения станут чистыми'
      ]
    },
    {
      id: '2',
      title: 'Техника бенда для начинающих',
      technique: 'Бенд',
      duration: '12 мин',
      videoUrl: 'https://www.youtube.com/embed/Mm2eYfj0SgA',
      steps: [
        'Выберите 3-ю струну, 7-й лад для первого бенда',
        'Зажмите струну указательным пальцем, добавьте средний и безымянный для поддержки',
        'Толкайте струну вверх вращением запястья, а не только пальцев',
        'Послушайте, как звук повышается на полтона (до следующей ноты)',
        'Попрактикуйте бенд на целый тон (два лада вверх)'
      ],
      tips: [
        'Используйте 3 пальца для лучшего контроля',
        'Начинайте с более толстых струн',
        'Настройте гитару в стандартный строй для точности'
      ]
    },
    {
      id: '3',
      title: 'Выразительное вибрато',
      technique: 'Вибрато',
      duration: '10 мин',
      videoUrl: 'https://www.youtube.com/embed/Xj5Q2ghBeUs',
      steps: [
        'Зажмите любую ноту на грифе безымянным пальцем',
        'Раскачивайте струну вверх-вниз или из стороны в сторону',
        'Контролируйте скорость и амплитуду колебаний',
        'Практикуйте медленное вибрато для блюза',
        'Практикуйте быстрое вибрато для рока'
      ],
      tips: [
        'Движение должно идти от запястья, а не от пальца',
        'Слушайте записи любимых гитаристов и копируйте их вибрато',
        'Экспериментируйте с шириной и скоростью'
      ]
    },
    {
      id: '4',
      title: 'Слайд-техника: плавные переходы',
      technique: 'Слайд',
      duration: '11 мин',
      videoUrl: 'https://www.youtube.com/embed/zE7rZGY8uGE',
      steps: [
        'Зажмите струну на любом ладу средним пальцем',
        'Ударьте по струне медиатором и сразу начните скользить пальцем вверх или вниз',
        'Поддерживайте постоянное давление на струну во время скольжения',
        'Практикуйте слайды на интервалах: 5-7, 7-10, 3-8 лады',
        'Комбинируйте слайды с другими нотами в простых мелодиях'
      ],
      tips: [
        'Не ослабляйте давление во время скольжения',
        'Используйте боковую часть подушечки пальца',
        'Начинайте с коротких слайдов на 2-3 лада'
      ]
    },
    {
      id: '5',
      title: 'Пальм-мьютинг в рок-музыке',
      technique: 'Пальминг',
      duration: '14 мин',
      videoUrl: 'https://www.youtube.com/embed/P8p-ffgR0d8',
      steps: [
        'Положите ребро ладони правой руки на струны у бриджа',
        'Найдите точку, где звук становится глухим, но не полностью заглушенным',
        'Играйте простой риф пауэр-аккордов с пальмингом',
        'Чередуйте пальминг и открытые ноты для создания динамики',
        'Практикуйте ритм-партии с постоянным пальмингом'
      ],
      tips: [
        'Не давите слишком сильно — струны должны звучать приглушенно',
        'Держите запястье расслабленным',
        'Используйте пальминг для всех струн равномерно'
      ]
    },
    {
      id: '6',
      title: 'Тэппинг: техника двух рук',
      technique: 'Тэппинг',
      duration: '18 мин',
      videoUrl: 'https://www.youtube.com/embed/JzqumbhfxRo',
      steps: [
        'Используйте указательный или средний палец правой руки для "удара" по ладу',
        'Начните с простой последовательности: тэп на 12-м ладу, pull-off на 5-м, 0 (открытая)',
        'Левая рука делает hammer-on на 5-й лад после открытой струны',
        'Создайте цикл: тэп-12, pull-off-5, pull-off-0, hammer-on-5',
        'Увеличивайте скорость, сохраняя чистоту каждой ноты'
      ],
      tips: [
        'Тэпайте подушечкой пальца, а не ногтем',
        'Pull-off правой рукой должен быть резким, чтобы нота зазвучала',
        'Начинайте очень медленно, фокусируясь на чистоте звука'
      ]
    }
  ];



  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Начинающий': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Средний': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'Продвинутый': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Music" className="text-primary" size={32} />
          </div>
          <nav className="hidden md:flex gap-6">
            <Button 
              variant={activeTab === 'home' ? 'default' : 'ghost'} 
              onClick={() => setActiveTab('home')}
              className="transition-all"
            >
              Главная
            </Button>
            <Button 
              variant={activeTab === 'techniques' ? 'default' : 'ghost'} 
              onClick={() => setActiveTab('techniques')}
            >
              Техники
            </Button>
            <Button 
              variant={activeTab === 'lessons' ? 'default' : 'ghost'} 
              onClick={() => setActiveTab('lessons')}
            >
              Уроки
            </Button>
          </nav>
          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="animate-fade-in">
            <section className="py-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-3xl animate-pulse" />
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Освой гитару по-новому
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Интерактивные уроки и пошаговые разборы техник от профессионалов
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-orange-600 hover:scale-105 transition-transform"
                    onClick={() => setActiveTab('lessons')}
                  >
                    <Icon name="PlayCircle" className="mr-2" size={24} />
                    Начать обучение
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-lg px-8 py-6 border-2 hover:scale-105 transition-transform"
                    onClick={() => setActiveTab('techniques')}
                  >
                    <Icon name="BookOpen" className="mr-2" size={24} />
                    Каталог техник
                  </Button>
                </div>
              </div>
            </section>

            <section className="py-16">
              <h3 className="text-3xl font-bold mb-8 text-center">Популярные техники</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techniques.slice(0, 3).map((technique) => (
                  <Card 
                    key={technique.id} 
                    className="group hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 overflow-hidden"
                  >
                    <div className={`h-2 bg-gradient-to-r ${technique.color}`} />
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${technique.color}`}>
                          <Icon name={technique.icon} className="text-white" size={24} />
                        </div>
                        <Badge className={getDifficultyColor(technique.difficulty)} variant="outline">
                          {technique.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{technique.title}</CardTitle>
                      <CardDescription className="text-base">{technique.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setActiveTab('techniques')}
                  className="hover:scale-105 transition-transform"
                >
                  Смотреть все техники
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'techniques' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Каталог техник игры на гитаре
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techniques.map((technique) => (
                <Card 
                  key={technique.id} 
                  className="group hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${technique.color}`} />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${technique.color}`}>
                        <Icon name={technique.icon} className="text-white" size={24} />
                      </div>
                      <Badge className={getDifficultyColor(technique.difficulty)} variant="outline">
                        {technique.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{technique.title}</CardTitle>
                    <CardDescription className="text-base">{technique.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-gradient-to-r from-primary to-orange-600 hover:opacity-90">
                      <Icon name="PlayCircle" className="mr-2" size={20} />
                      Изучить технику
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'lessons' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Интерактивные уроки
            </h2>
            <div className="space-y-6">
              {lessons.map((lesson) => (
                <Card key={lesson.id} className="border-2 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{lesson.title}</CardTitle>
                        <div className="flex gap-2 flex-wrap">
                          <Badge className="bg-primary/20 text-primary border-primary/30" variant="outline">
                            {lesson.technique}
                          </Badge>
                          <Badge className="bg-secondary/20 text-secondary border-secondary/30" variant="outline">
                            <Icon name="Clock" className="mr-1" size={14} />
                            {lesson.duration}
                          </Badge>
                        </div>
                      </div>
                      <Icon name="BookOpen" className="text-primary" size={32} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="relative rounded-xl overflow-hidden border-2 border-primary/30" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src={lesson.videoUrl}
                          title={lesson.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="steps">
                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                          <div className="flex items-center gap-2">
                            <Icon name="ListOrdered" size={20} />
                            Пошаговая инструкция
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ol className="space-y-3 mt-4">
                            {lesson.steps.map((step, index) => (
                              <li key={index} className="flex gap-3">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center font-bold text-white">
                                  {index + 1}
                                </span>
                                <span className="flex-1 pt-1">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="tips">
                        <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                          <div className="flex items-center gap-2">
                            <Icon name="Lightbulb" size={20} />
                            Полезные советы
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 mt-4">
                            {lesson.tips.map((tip, index) => (
                              <li key={index} className="flex gap-3">
                                <Icon name="CheckCircle2" className="text-green-500 flex-shrink-0" size={20} />
                                <span className="flex-1">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}


      </main>

      <footer className="border-t border-border/40 mt-20 py-8 bg-muted/10">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Music" className="text-primary" size={24} />
          </div>
          <p>© 2024 Гитарные техники. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;