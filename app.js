const cron = require("node-cron");

console.log("Aplicación iniciada dentro de Docker...");

cron.schedule("*/5 * * * * *", () => {
  console.log("Tarea ejecutada cada 5 segundos:", new Date().toISOString());
});
