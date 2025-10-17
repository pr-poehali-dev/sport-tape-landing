import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-card">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-muted/5 to-accent/5"></div>
        
        <div className="container relative mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in order-2 lg:order-1">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Спортивные{" "}
                <span className="text-accent">
                  Тейпы
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground">
                Профессиональная поддержка для мышц и суставов. Максимальная эффективность при тренировках и восстановлении.
              </p>

              <div className="flex flex-col gap-4 pt-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={() => window.open('https://www.wildberries.ru', '_blank')}
                >
                  <Icon name="ShoppingCart" size={24} className="mr-2" />
                  Купить на Wildberries
                </Button>
                
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={() => window.open('https://www.ozon.ru', '_blank')}
                >
                  <Icon name="Package" size={24} className="mr-2" />
                  Купить на Ozon
                </Button>
                
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-background shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={() => window.open('https://market.yandex.ru', '_blank')}
                >
                  <Icon name="Store" size={24} className="mr-2" />
                  Купить на Яндекс Маркете
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in order-1 lg:order-2">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl"></div>
              <img
                src="https://cdn.poehali.dev/files/801001df-2fa8-4def-8702-90c1c2f25cb5.jpeg"
                alt="Кинезио тейп LEGIONER с упаковкой"
                className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://cdn.poehali.dev/files/bf728622-0091-43f7-b667-49b2c580815b.jpeg"
                alt="Кинезио тейп бежевый с упаковкой"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
              <img
                src="https://cdn.poehali.dev/files/9e52412d-029d-479b-b4a6-3be22d4f7506.jpeg"
                alt="Цветные кинезио тейпы - синий, бежевый, коричневый, розовый"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Разнообразие цветов для любого стиля
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Выбирайте из широкой палитры цветов: бежевый, синий, коричневый, розовый и другие. Каждый тейп сочетает стиль и функциональность.
              </p>
              <div className="flex gap-3 pt-2">
                <div className="w-12 h-12 rounded-full bg-[#d4a574] border-2 border-border shadow-md"></div>
                <div className="w-12 h-12 rounded-full bg-[#4a90e2] border-2 border-border shadow-md"></div>
                <div className="w-12 h-12 rounded-full bg-[#a67c52] border-2 border-border shadow-md"></div>
                <div className="w-12 h-12 rounded-full bg-[#e91e63] border-2 border-border shadow-md"></div>
              </div>
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
              className="text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://www.wildberries.ru', '_blank')}
            >
              <Icon name="ShoppingCart" size={28} className="mr-3" />
              Wildberries
            </Button>
            
            <Button
              size="lg"
              className="text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 bg-secondary hover:bg-secondary/90"
              onClick={() => window.open('https://www.ozon.ru', '_blank')}
            >
              <Icon name="Package" size={28} className="mr-3" />
              Ozon
            </Button>
            
            <Button
              size="lg"
              className="text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 bg-accent hover:bg-accent/90 text-background"
              onClick={() => window.open('https://market.yandex.ru', '_blank')}
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
            © 2024 Спортивные Тейпы. Профессиональная поддержка для спортсменов.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;