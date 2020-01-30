export default [
  {
    href: '/blog',
    title: 'Блог',
    items: [
      {
        title: 'Научные статьи',
        href: '/category/[slug]',
        as: '/category/nauchnye-stati',
      },
      {
        title: 'Планирование',
        href: '/category/[slug]',
        as: '/category/planirovanie-trenirovok',
      },
      {
        title: 'Упражнения',
        href: '/category/[slug]',
        as: '/category/upragneniya',
      },
      {
        title: 'Техника',
        href: '/category/[slug]',
        as: '/category/tehnika',
      },
      {
        title: 'Тренинг',
        href: '/category/[slug]',
        as: '/category/trenirovki',
      },
      {
        title: 'Восстановление',
        href: '/category/[slug]',
        as: '/category/vosstanovlenie',
      },
      {
        title: 'Личности',
        href: '/category/[slug]',
        as: '/category/lichnosti',
      },
    ]
  },
  {
    href: '/trainings',
    title: 'Тренировки',
    items: [
      {
        title: 'Классическое двоеборье',
        href: '/trainings/[slug]',
        as: '/trainings/dv',
      },
      {
        title: 'Длинный цикл',
        href: '/trainings/[slug]',
        as: '/trainings/dc',
      },
    ],
  },
  {
    href: '/page/[slug]',
    as: '/page/normativy-po-girevomu-sportu',
    title: 'Нормативы',
  },
  {
    href: '/page/[slug]',
    as: '/page/kontakty',
    title: 'Контакты',
  },
];
