const articles = [
  {
    id: 1,
    title: "Kod labb del 1",
    description: "Task Boare med React, TypeScript och komponenter.",
    assignee: "Philip",
    category: "Frontend",
    priority: "low",
    status: "done",
  },
  {
    id: 2,
    title: "Kod labb del 2",
    description: "Komponenttestning i React med Vitest",
    assignee: "Philip",
    category: "Test",
    priority: "low",
    status: "done",
  },
  {
    id: 3,
    title: "Kod labb del 3",
    description: "Rendera tasks från en array",
    assignee: "Philip",
    category: "Fronend",
    priority: "low",
    status: "done",
  },
];
let nextId = 4;

export function getAllTasks() {
  return articles;
}

export function createTask(article) {
  const data = {
    ...article,
    id: nextId,
  };
  articles.push(data);
  nextId += 1;

  return data;
}
