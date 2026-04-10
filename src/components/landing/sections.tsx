import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Уже доступно</Badge>,
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