# 📝 Task Manager

Task Manager — это простое, но функциональное веб-приложение для управления задачами, разработанное с использованием **React**, **TypeScript** и **Material UI**. Вы можете просматривать список задач, редактировать их и удалять, а также создавать новые задачи с уникальными параметрами.

---

## 🚀 Функциональность

- 📋 Просмотр задач в виде адаптивной сетки карточек
- ✏️ Редактирование задачи на отдельной странице (`/task/:id`)
- 🗑️ Удаление задач
- 🆕 Создание новых задач с уникальным ID (по ссылке `/task/new`)
- 💾 Локальное сохранение задач в `localStorage`
- ✅ Типизация всех сущностей с помощью TypeScript
- 🎨 Интерфейс на основе Material UI (MUI)

---

## 🛠️ Технологии

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — сборка
- [React Router v6](https://reactrouter.com/)
- [Material UI (MUI)](https://mui.com/) — UI-фреймворк
- [Context API](https://reactjs.org/docs/context.html) — глобальное состояние задач
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) — хранение задач между сессиями

---

## 🛠️ Установка и запуск

### Предварительные требования
- Node.js v16+
- npm v8+ или yarn

### Установка
```bash
# Клонирование репозитория
git clone https://github.com/falkonpawl/task-manager.git
cd task-manager

# Установка зависимостей
npm install
# или
yarn install

### Запуск разработки

npm run dev
# или
yarn dev

###Приложение будет доступно по адресу:

http://localhost:5173


###Сборка для production


npm run build
# или
yarn build

exit
```
## 🛤️ Маршрутизация

| 🔗 Путь       | 🧩 Компонент    | 📝 Описание                      |
|--------------|----------------|----------------------------------|
| `/`          | `HomePage`     | 📋 Отображает список всех задач  |
| `/task/new`  | `TaskCreatePage`| 🛠️ Форма для создания новой задачи |
| `/task/:id`  | `TaskEditPage` | ✏️ Страница редактирования задачи с ID `:id` |
