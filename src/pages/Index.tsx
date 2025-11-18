import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedColor, setSelectedColor] = useState("beige");

  const colors = [
    {
      id: "beige",
      name: "Бежевый",
      color: "#d4a574",
      image: "https://cdn.poehali.dev/files/20764d4d-1cc7-4b1c-ac3d-de037e1fd0ba.jpg"
    },
    {
      id: "blue",
      name: "Синий",
      color: "#4a90e2",
      image: "https://cdn.poehali.dev/files/c3b7e45b-d47c-48bb-85c2-d23e46636862.jpg"
    },
    {
      id: "beige-perforated",
      name: "Бежевый с перфорацией",
      color: "url('https://cdn.poehali.dev/files/5f9f506c-6ac9-4b55-8234-3dbf746d8ed3.jpg')",
      image: "https://cdn.poehali.dev/files/39ce65b7-fa4c-4923-baa2-dcd4261223fa.jpg"
    },
    {
      id: "pink",
      name: "Розовый",
      color: "#e91e63",
      image: "https://cdn.poehali.dev/files/7e2c08cd-2e98-4a2f-9194-fb168168b1cc.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/df6ab86a-7ed4-44c5-9351-61f8675fca15.jpg" 
              alt="Legioner Sports Logo" 
              className="w-12 h-12 rounded-lg"
            />
            <div>
              <h2 className="text-xl font-bold text-accent">LEGIONER SPORTS</h2>
              <p className="text-xs text-muted-foreground">Кинезио тейпы</p>
            </div>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-background to-card">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-muted/5 to-accent/5"></div>
        
        <div className="container relative mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in order-2 lg:order-1">
              <div className="flex flex-col items-center gap-6 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/df6ab86a-7ed4-44c5-9351-61f8675fca15.jpg" 
                  alt="Legioner Sports" 
                  className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-2xl border-4 border-accent/20"
                />
                <div className="text-center">
                  <div className="text-3xl md:text-4xl text-accent font-bold tracking-wide">LEGIONER SPORTS</div>
                  <div className="text-base text-muted-foreground mt-2">Профессиональное качество</div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-center">
                Кинезио{" "}
                <span className="text-accent">
                  Тейпы
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground text-center">
                Профессиональная поддержка для мышц и суставов. Максимальная эффективность при тренировках и восстановлении.
              </p>

              <div className="flex flex-col gap-4 pt-4 items-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-[#cb11ab] hover:bg-[#cb11ab]/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={() => window.open('https://www.wildberries.ru/seller/670383', '_blank')}
                >
                  <Icon name="ShoppingCart" size={24} className="mr-2" />
                  Купить на Wildberries
                </Button>
                
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-[#005bff] hover:bg-[#005bff]/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={() => window.open('https://www.ozon.ru/seller/vm-1024153/?miniapp=seller_1024153', '_blank')}
                >
                  <Icon name="Package" size={24} className="mr-2" />
                  Купить на Ozon
                </Button>
                
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-[#fc0] hover:bg-[#fc0]/90 text-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={() => window.open('https://market.yandex.ru/cc/7ycaNi', '_blank')}
                >
                  <Icon name="Store" size={24} className="mr-2" />
                  Купить на Яндекс Маркете
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in order-1 lg:order-2">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl"></div>
              <img
                src={colors.find(c => c.id === selectedColor)?.image}
                alt="Кинезио тейп LEGIONER"
                className="relative rounded-3xl shadow-2xl w-full transition-all duration-500"
              />
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-border">
                <p className="text-sm text-muted-foreground mb-3 text-center">Выберите цвет:</p>
                <div className="flex gap-3">
                  {colors.map((colorOption) => (
                    <button
                      key={colorOption.id}
                      onClick={() => setSelectedColor(colorOption.id)}
                      className={`w-14 h-14 rounded-full border-4 transition-all duration-300 hover:scale-110 ${
                        selectedColor === colorOption.id
                          ? 'border-accent shadow-lg scale-110'
                          : 'border-border hover:border-accent/50'
                      }`}
                      style={{
                        background: colorOption.color,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      title={colorOption.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Выберите свой цвет
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Доступны 4 цвета, включая бежевый с перфорацией для лучшей вентиляции
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {colors.map((colorOption) => (
                <button
                  key={colorOption.id}
                  onClick={() => setSelectedColor(colorOption.id)}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                    selectedColor === colorOption.id
                      ? 'border-accent bg-accent/10 shadow-xl'
                      : 'border-border hover:border-accent/50 bg-card'
                  }`}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div
                      className="w-20 h-20 rounded-full shadow-lg border-4 border-background"
                      style={{
                        background: colorOption.color,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <span className="text-sm font-semibold text-center">{colorOption.name}</span>
                    {selectedColor === colorOption.id && (
                      <Icon name="Check" size={20} className="text-accent absolute top-2 right-2" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-slide-up">
            Преимущества наших тейпов
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "Мгновенная поддержка",
                description: "Обеспечивают стабильность суставов и мышц во время тренировок"
              },
              {
                icon: "Shield",
                title: "Защита от травм",
                description: "Снижают риск растяжений и перегрузок при интенсивных нагрузках"
              },
              {
                icon: "Heart",
                title: "Улучшение кровотока",
                description: "Стимулируют циркуляцию крови для быстрого восстановления"
              },
              {
                icon: "Droplet",
                title: "Водостойкие",
                description: "Сохраняют свойства даже при контакте с водой и потом"
              },
              {
                icon: "Wind",
                title: "Дышащий материал",
                description: "Комфортное использование до 5 дней без дискомфорта"
              },
              {
                icon: "Star",
                title: "Профессиональное качество",
                description: "Используются спортсменами и физиотерапевтами по всему миру"
              }
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/20 border border-primary/30 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon name={feature.icon} size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Отзывы наших клиентов
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Алексей М.",
                rating: 5,
                text: "Использую эти тейпы уже 3 месяца. Отличная поддержка для коленей при беге. Держатся действительно несколько дней, даже после душа!",
                sport: "Бег"
              },
              {
                name: "Марина К.",
                rating: 5,
                text: "Заказала розовые тейпы для фитнеса. Качество на высоте, клеятся легко, не вызывают раздражения. Рекомендую!",
                sport: "Фитнес"
              },
              {
                name: "Дмитрий П.",
                rating: 4,
                text: "Тренер посоветовал эти тейпы для восстановления после травмы плеча. Реально помогают! Буду заказывать ещё.",
                sport: "Тяжёлая атлетика"
              },
              {
                name: "Елена С.",
                rating: 5,
                text: "Занимаюсь йогой, использую для поддержки спины. Очень довольна качеством и ценой. Доставка быстрая!",
                sport: "Йога"
              },
              {
                name: "Игорь В.",
                rating: 5,
                text: "Заказал на Озоне синие тейпы. Пришли быстро, упаковка качественная. Использую для футбола - голеностоп держат отлично!",
                sport: "Футбол"
              },
              {
                name: "Анна Т.",
                rating: 5,
                text: "Лучшие тейпы, что я пробовала! Водостойкие, дышащие, не отклеиваются. Беру уже третий раз для танцев.",
                sport: "Танцы"
              }
            ].map((review, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.sport}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {review.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Как правильно клеить тейпы
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  step: "1",
                  title: "Подготовьте кожу",
                  description: "Очистите и высушите область нанесения. Удалите волосы при необходимости. Кожа должна быть чистой от кремов и масел.",
                  icon: "Sparkles",
                  image: "https://cdn.poehali.dev/projects/b003744a-44ad-477a-ae14-1a08eb1308f3/files/6c5a36e3-4ec4-45fe-917b-7bed6392aef3.jpg"
                },
                {
                  step: "2",
                  title: "Отмерьте тейп",
                  description: "Отрежьте нужную длину тейпа. Закруглите углы ножницами - это продлит срок носки и предотвратит отклеивание.",
                  icon: "Ruler",
                  image: "https://cdn.poehali.dev/projects/b003744a-44ad-477a-ae14-1a08eb1308f3/files/3d678b5d-a839-4d82-b241-292aad41e427.jpg"
                },
                {
                  step: "3",
                  title: "Наклейте без натяжения",
                  description: "Зафиксируйте начало тейпа без натяжения. Наклеивайте по направлению роста мышц с нужным натяжением (обычно 25-50%).",
                  icon: "Hand",
                  image: "https://cdn.poehali.dev/projects/b003744a-44ad-477a-ae14-1a08eb1308f3/files/be1bff8a-ea3e-47e4-9bbc-e373a9286ed7.jpg"
                },
                {
                  step: "4",
                  title: "Активируйте клей",
                  description: "Разгладьте тейп рукой несколько раз - тепло активирует клей. Избегайте воды в течение 1 часа после наклеивания.",
                  icon: "Flame",
                  image: "https://cdn.poehali.dev/projects/b003744a-44ad-477a-ae14-1a08eb1308f3/files/5a6307e0-05c2-4a8e-8826-b1ce2b8e95f7.jpg"
                }
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent/20 border-2 border-accent rounded-2xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-accent">{item.step}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name={item.icon} size={24} className="text-accent" />
                        <h3 className="text-xl font-bold">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <Card className="mt-8 p-6 bg-primary/5 border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <Icon name="Info" size={32} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold mb-2">Важно знать</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Тейп держится 3-5 дней при правильном нанесении</li>
                    <li>• Можно принимать душ, купаться в бассейне и заниматься спортом</li>
                    <li>• Для снятия: намочите тейп, аккуратно снимайте по направлению роста волос</li>
                    <li>• При раздражении кожи немедленно снимите тейп</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/10 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            Готовы улучшить свои тренировки?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90 animate-slide-up">
            Выберите удобный маркетплейс и закажите профессиональные спортивные тейпы прямо сейчас
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <Button
              size="lg"
              className="text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 bg-[#cb11ab] hover:bg-[#cb11ab]/90"
              onClick={() => window.open('https://www.wildberries.ru/seller/670383', '_blank')}
            >
              <Icon name="ShoppingCart" size={28} className="mr-3" />
              Wildberries
            </Button>
            
            <Button
              size="lg"
              className="text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 bg-[#005bff] hover:bg-[#005bff]/90"
              onClick={() => window.open('https://www.ozon.ru/seller/vm-1024153/?miniapp=seller_1024153', '_blank')}
            >
              <Icon name="Package" size={28} className="mr-3" />
              Ozon
            </Button>
            
            <Button
              size="lg"
              className="text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 bg-[#fc0] hover:bg-[#fc0]/90 text-black"
              onClick={() => window.open('https://market.yandex.ru/cc/7ycaNi', '_blank')}
            >
              <Icon name="Store" size={28} className="mr-3" />
              Яндекс Маркет
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-lg">
            © 2025 Спортивные Тейпы. Профессиональная поддержка для спортсменов.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;