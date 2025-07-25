import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [area, setArea] = useState<number>(0);
  const [workType, setWorkType] = useState<string>('');
  const [tileType, setTileType] = useState<string>('');
  const [calculatedPrice, setCalculatedPrice] = useState<number>(0);

  const workTypes = {
    'floor': { name: 'Укладка пола', price: 800 },
    'wall': { name: 'Облицовка стен', price: 1200 },
    'bathroom': { name: 'Ванная комната под ключ', price: 1500 },
    'kitchen': { name: 'Фартук кухни', price: 1000 }
  };

  const tileTypes = {
    'ceramic': { name: 'Керамическая плитка', multiplier: 1 },
    'porcelain': { name: 'Керамогранит', multiplier: 1.2 },
    'natural': { name: 'Натуральный камень', multiplier: 1.8 },
    'mosaic': { name: 'Мозаика', multiplier: 2.5 }
  };

  const calculatePrice = () => {
    if (area && workType && tileType) {
      const basePrice = workTypes[workType as keyof typeof workTypes].price;
      const multiplier = tileTypes[tileType as keyof typeof tileTypes].multiplier;
      const total = area * basePrice * multiplier;
      setCalculatedPrice(total);
    }
  };

  const portfolioItems = [
    {
      image: '/img/539a33f6-35e6-426d-bf03-f2961a085f40.jpg',
      title: 'Ванная комната премиум',
      description: 'Керамогранит под мрамор, 25 м²'
    },
    {
      image: '/img/e70c6d90-a570-47b9-8e55-4415118b1039.jpg',
      title: 'Кухонный фартук',
      description: 'Метлахская плитка, 8 м²'
    },
    {
      image: '/img/38647a47-db13-4410-a29f-f005a9e758f0.jpg',
      title: 'Терраса',
      description: 'Керамогранит большого формата, 40 м²'
    }
  ];

  const services = [
    {
      icon: 'Square',
      title: 'Укладка плитки',
      description: 'Профессиональная укладка любых типов плитки с гарантией качества'
    },
    {
      icon: 'Hammer',
      title: 'Подготовка поверхности',
      description: 'Выравнивание, грунтовка и подготовка основания под укладку'
    },
    {
      icon: 'Ruler',
      title: 'Замеры и расчеты',
      description: 'Точные замеры помещений и расчет необходимого количества материалов'
    },
    {
      icon: 'Wrench',
      title: 'Сантехнические работы',
      description: 'Установка и подключение сантехники в процессе облицовки'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Отличная работа! Плитка в ванной лежит идеально, швы ровные. Мастер очень аккуратный.'
    },
    {
      name: 'Дмитрий Иванов',
      rating: 5,
      text: 'Делали кухонный фартук. Работа выполнена быстро и качественно. Рекомендую!'
    },
    {
      name: 'Елена Смирнова',
      rating: 5,
      text: 'Облицевали всю ванную комнату. Результат превзошел ожидания. Спасибо за профессионализм!'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat">
            МАСТЕР
            <span className="block bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              ПЛИТОЧНИК
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Профессиональная укладка плитки и облицовочные работы любой сложности. 
            Гарантия качества и точные сроки выполнения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4 text-lg">
              <Icon name="Calculator" className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
              <Icon name="Phone" className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр плиточных работ от подготовки поверхности до финишной отделки
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">Наши работы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры выполненных проектов - от уютных ванных комнат до стильных кухонь
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">Калькулятор стоимости</h2>
            <p className="text-xl text-gray-600">
              Рассчитайте примерную стоимость работ онлайн
            </p>
          </div>
          <Card className="shadow-2xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Расчет стоимости работ</CardTitle>
              <CardDescription className="text-center">
                Заполните параметры для получения предварительной стоимости
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="area">Площадь (м²)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Введите площадь"
                    value={area || ''}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workType">Тип работ</Label>
                  <Select value={workType} onValueChange={setWorkType}>
                    <SelectTrigger className="text-lg">
                      <SelectValue placeholder="Выберите тип работ" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(workTypes).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value.name} - {value.price} ₽/м²
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tileType">Тип плитки</Label>
                <Select value={tileType} onValueChange={setTileType}>
                  <SelectTrigger className="text-lg">
                    <SelectValue placeholder="Выберите тип плитки" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(tileTypes).map(([key, value]) => (
                      <SelectItem key={key} value={key}>
                        {value.name} (коэф. {value.multiplier})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button 
                onClick={calculatePrice} 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg py-6 hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                disabled={!area || !workType || !tileType}
              >
                <Icon name="Calculator" className="mr-2" />
                Рассчитать стоимость
              </Button>
              {calculatedPrice > 0 && (
                <div className="text-center p-6 bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Стоимость работ:</h3>
                  <p className="text-4xl font-bold text-orange-600">
                    {calculatedPrice.toLocaleString()} ₽
                  </p>
                  <p className="text-gray-600 mt-2">
                    * Окончательная стоимость определяется после осмотра объекта
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">
              Что говорят о нашей работе
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-blue-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">Свяжитесь с нами</h2>
            <p className="text-xl text-white opacity-90">
              Готовы обсудить ваш проект? Оставьте заявку!
            </p>
          </div>
          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о вашем проекте..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 text-lg py-3">
                    <Icon name="Send" className="mr-2" />
                    Отправить заявку
                  </Button>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t text-center">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600">
                  <div className="flex items-center">
                    <Icon name="Phone" className="mr-2 text-orange-500" />
                    <span>+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" className="mr-2 text-orange-500" />
                    <span>info@plitochnik.ru</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" className="mr-2 text-orange-500" />
                    <span>Москва и область</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 font-montserrat">МАСТЕР ПЛИТОЧНИК</h3>
          <p className="text-gray-400 mb-4">
            Профессиональные плиточные работы с гарантией качества
          </p>
          <div className="flex justify-center space-x-6">
            <Badge variant="outline" className="text-white border-white">
              Гарантия 2 года
            </Badge>
            <Badge variant="outline" className="text-white border-white">
              Опыт 10+ лет
            </Badge>
            <Badge variant="outline" className="text-white border-white">
              500+ проектов
            </Badge>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2024 Мастер Плиточник. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;