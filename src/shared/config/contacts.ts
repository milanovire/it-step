export const CONTACTS = {
  admission: {
    label: 'Поступление',
    phone: '+375 (33) 333-53-54',
    href: 'tel:+375333335354',
  },
  academic: {
    label: 'Учебный отдел',
    phone: '+375 (33) 333-53-50',
    href: 'tel:+375333335350',
  },
  payment: {
    label: 'По вопросам оплаты',
    phones: [
      { phone: '+375 (33) 333-53-50', href: 'tel:+375333335350' },
      { phone: '+375 (33) 333-53-54', href: 'tel:+375333335354' },
    ],
  },
  address: {
    label: 'Адрес',
    text: 'г. Витебск, пр-т Московский, 31А',
    href: 'https://yandex.ru/maps/?text=Витебск+Московский+31А',
  },
  email: 'vitebsk@itstep.by',
} as const

export const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://www.instagram.com/itstep.vitebsk', icon: 'instagram' },
  { name: 'VK', href: 'https://vk.com/itstepvitebsk', icon: 'vk' },
  { name: 'Telegram', href: 'https://t.me/+HzsTlVJE6Tg4NGE6', icon: 'telegram' },
  { name: 'YouTube', href: '#', icon: 'youtube' },
] as const
