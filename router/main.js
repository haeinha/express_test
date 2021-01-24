// module.exports = (app, fs) => {
//   app.get("/", (req, res) => {
//     res.render("index.html");
//   });

//   app.get("/about", (req, res) => {
//     res.render("about.html");
//   });
// };

module.exports = (app, fs) => {
  app.get("/", (req, res) => {
    res.render("index", {
      title: "MY HOMEPAGE",
      length: 5,
    });
  });
};
