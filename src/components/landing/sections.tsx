import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: (
      <div className="flex flex-col gap-6">
        <img
          src="https://cdn.poehali.dev/projects/fbaa6255-1daf-4e0c-97f4-5bcd0040c1ea/bucket/83895e45-c4e1-4ed1-bdfd-f8f79c1f3012.jpg"
          alt="Макс логотип"
          className="h-16 md:h-20 w-auto object-contain"
        />
        <Badge variant="outline" className="text-white border-white w-fit">Уже доступно</Badge>
      </div>
    ),
    title: "МАКС — общайся свободно.",
    showButton: true,
    buttonText: 'Скачать приложение'
  },
  {
    id: 'about',
    title: 'Почему Макс?',
    content: 'Макс — это пространство для живого общения. Без лишнего шума, только ты и твои люди.'
  },
  {
    id: 'features',
    title: 'Всё для общения',
    content: 'Чаты, голосовые сообщения, группы и личные беседы — всё в одном месте, быстро и удобно.'
  },
  {
    id: 'testimonials',
    title: 'Тысячи уже общаются',
    content: 'Пользователи Макс находят новых друзей, поддерживают связь с близкими и создают сообщества по интересам.'
  },
  {
    id: 'join',
    title: 'Присоединяйся к Макс',
    content: 'Зарегистрируйся бесплатно и начни общаться прямо сейчас. Это просто.',
    showButton: true,
    buttonText: 'Начать общение'
  },
]