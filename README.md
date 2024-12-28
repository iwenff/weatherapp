# Weather App

## Описание
**Weather App** — это простое веб-приложение, которое позволяет пользователям узнавать текущую погоду в любом городе мира. Приложение создано с использованием **Next.js**, **Tailwind CSS**, и данных из **Open-Meteo API**. Оно предназначено для практики работы с API, TypeScript и современных технологий фронтенд-разработки.

## Функциональность
- Поиск погоды по названию города.
- Отображение текущей температуры и погодных условий.
- Минималистичный и адаптивный дизайн, выполненный с помощью Tailwind CSS.
- Обработка ошибок при вводе некорректных данных.

## Технологии
- **Next.js** — для серверного рендеринга и маршрутизации.
- **TypeScript** — для строгой типизации и повышения читаемости кода.
- **Tailwind CSS** — для быстрого создания адаптивного дизайна.
- **Open-Meteo API** — для получения данных о погоде.

## Установка и запуск
Чтобы запустить проект локально, выполните следующие шаги:

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/iwenff/weatherapp.git
   Перейдите в директорию проекта:
    cd weatherapp
2. Установите зависимости:
    npm install
Создайте файл .env.local и добавьте туда ключи API, если требуется.
Запустите сервер разработки:
npm run dev
Откройте http://localhost:3000 в браузере.

Скриншоты
<img width="801" alt="image" src="https://github.com/user-attachments/assets/60ec91d5-b122-4740-a0d8-740c0a3abb0c" />
<img width="801" alt="image" src="https://github.com/user-attachments/assets/867e23e8-a830-4369-9506-beee3cf629c4" />
<img width="801" alt="image" src="https://github.com/user-attachments/assets/13ae480f-9641-4654-8e0a-1529c74e85f4" />




Как работает

Пользователь выбирает название города.
Приложение отправляет запрос к Open-Meteo API для получения данных о погоде.
Полученные данные отображаются в удобном формате: температура, погодные условия, иконка.
Возможные улучшения

Добавить прогноз погоды на неделю.
Реализовать переключение между °C и °F.
Улучшить визуализацию данных с помощью графиков.
Добавить функцию автоматического определения местоположения пользователя.
Автор

Имя: Никита (iwenf)
GitHub: https://github.com/iwenff

