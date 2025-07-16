# 📝 Task Manager

**Task Manager** — это простое, но функциональное веб-приложение для управления задачами, разработанное с использованием **React**, **TypeScript** и **Material UI**. Пользователь может создавать, редактировать, удалять задачи и видеть их в виде адаптивных карточек.

---

## 🚀 Функциональность

- 📋 Просмотр задач в виде адаптивной сетки карточек
- ✏️ Редактирование задачи на отдельной странице (`/task/:id`)
- 🆕 Создание новых задач с уникальным ID (`/task/new`)
- 🗑️ Удаление задач
- 💾 Автоматическое сохранение задач в `localStorage`
- ✅ Полная типизация всех сущностей через TypeScript
- 🎨 Современный UI на основе [Material UI (MUI)](https://mui.com/)

---

## 🛠️ Используемые технологии

- ⚛️ [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- ⚡ [Vite](https://vitejs.dev/) — быстрый сборщик
- 🌐 [React Router v6](https://reactrouter.com/) — маршрутизация
- 🧠 React Context API — управление глобальным состоянием задач
- 💾 `localStorage` — долговременное хранение данных
- 🖌️ [Material UI (MUI)](https://mui.com/) — UI-компоненты
- 🧹 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) — проверка и автоформатирование кода

---

## 📦 Установка и запуск

### 🔧 Предварительные требования

- Node.js **v16+**
- npm **v8+** или **yarn**

### 🚀 Установка

```bash
# Клонирование репозитория
git clone https://github.com/falkonpawl/task-manager.git
cd task-manager

# Установка зависимостей
npm install
# или
yarn install
```

### ▶️ Запуск в режиме разработки

```bash
npm run dev
# или
yarn dev
```

Приложение откроется по адресу: [http://localhost:5173](http://localhost:5173)

### 📦 Сборка для production

```bash
npm run build
# или
yarn build
```

---

## 🛤️ Маршрутизация

| Путь        | Компонент        | Описание                           |
| ----------- | ---------------- | ---------------------------------- |
| `/`         | `HomePage`       | Список всех задач                  |
| `/task/new` | `TaskCreatePage` | Создание новой задачи              |
| `/task/:id` | `TaskCreatePage` | Редактирование существующей задачи |
