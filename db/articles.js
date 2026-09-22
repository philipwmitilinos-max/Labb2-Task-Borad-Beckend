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
  {
    id: 4,
    title: "Lägg till formulär",
    description:
      "Skapa ny task I den här delen ska du skapa ett formulär för att kunna skriva in en ny task. Formuläret ska finnas i en egen komponent. När formuläret skickas ska värdena skrivas ut i konsolen.",
    assignee: "Philip",
    category: "Frontend",
    priority: "low",
    status: "done",
  },
  {
    id: 5,
    title: "Laboration del 4",
    description:
      "TaskBoard-applikation ska kunna skapa nya Tasks via formuläret",
    assignee: "Philip",
    category: "Frontend",
    priority: "low",
    status: "done",
  },
  {
    id: 6,
    title: "Laboration del 5",
    description: "Implementera en backend-tjänst med node och javascript",
    assignee: "Philip",
    category: "Backend",
    priority: "high",
    status: "doing",
  },
  {
    id: 7,
    title: "Laboration del 7",
    description:
      "TaskBoard-applikation ska kunna integrera med den backend ni tidigare skapat",
    assignee: "Philip",
    category: "Backend",
    priority: "low",
    status: "doing",
  },
  {
    id: 8,
    title: "Laboration del 8",
    description: "",
    assignee: "Philip",
    category: "Backend",
    priority: "low",
    status: "todo",
  },
  {
    id: 9,
    title: "Titel",
    description: "Beskrivning..",
    assignee: "Philip",
    category: "Fronend",
    priority: "low",
    status: "done",
  },
];
let nextId = 10;

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
