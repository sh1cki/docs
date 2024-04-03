---
layout: home

hero:
  name: "Rust App"
  text: "Документация"
  tagline: Подробно рассказываем про функционал сервиса, даём полезные советы
  actions:
    - theme: brand
      text: Обучение
      link: /ru/getting-started/
    - theme: alt
      text: Публичное API
      link: /en/api/

features:
  - icon: 🛠️
    title: Информация об игроке
    details: Где играет, с кем играет, как давно играет, что делает?
  - icon: 🛠️
    title: Проверка на читы / макросы
    details: Следите за жалобами на игрока и вызывайте его на проверку не заходя в игру
  - icon:  🛠️
    title: Управляйте модераторами
    details: Следите за статистикой, подсчитывайте ЗП, отслеживайте действия
---

## Команда разработчиков

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Владимир Хуган',
    title: 'Founder',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Ольга Куцкова',
    title: 'Founder',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Xacku',
    title: 'Founder',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
];


const shuffled = members
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
</script>

<VPTeamMembers size="small" :members="shuffled" />