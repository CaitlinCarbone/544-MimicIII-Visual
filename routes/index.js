const path = require("path");

const constructorMethod = (app) => {
  app.get("/", (req, res) => res.redirect("/home"));
  app.get("/home", (req, res) => {
    res.sendFile(path.resolve("static/homepage.html"));
  });
  app.get("/sepsis", (req, res) => {
    res.sendFile(path.resolve("static/sepsis.html"));
  });
  app.get("/pneumonia", (req, res) => {
    res.sendFile(path.resolve("static/pneumonia.html"));
  });
  app.get("/intracranialhemorrhage", (req, res) => {
    res.sendFile(path.resolve("static/intracranialhemorrhage.html"));
  });
  app.get("/congestiveheartfailure", (req, res) => {
    res.sendFile(path.resolve("static/congestiveheartfailure.html"));
  });
  app.get("/alteredmentalstatus", (req, res) => {
    res.sendFile(path.resolve("static/alteredmentalstatus.html"));
  });
  app.get("/error", (req, res) => {
    res.sendFile(path.resolve("static/errorPage.html"));
  });
  app.get("/mostCommonDeaths", (req, res) => {
    res.sendFile(path.resolve("static/mostCommonDeaths.html"));
  });
  app.get("/leastCommonDeaths", (req, res) => {
    res.sendFile(path.resolve("static/leastCommonDeaths.html"));
  });
  app.get("/resources", (req, res) => {
    res.sendFile(path.resolve("static/resources.html"));
  });
  app.use("*", (req, res) => {
    res.redirect("/error");
  });
};

module.exports = constructorMethod;
