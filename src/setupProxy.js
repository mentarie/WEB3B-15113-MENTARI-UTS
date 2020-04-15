const data = [
  {
    id: 1,
    categoryName: "World",
    title: "Feature Post",
    postedAt: "Nov 12",
    summary:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    imageUrl:
      "https://images.unsplash.com/photo-1513735539099-cf6e5d559d82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  },
  {
    id: 2,
    categoryName: "Design",
    title: "Random Design Post",
    postedAt: "Nov 20",
    summary:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    imageUrl:
      "https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2859&q=80"
  }
];

module.exports = function(app) {
  app.get("/api/blog/:id", function(req, res) {
    res.json({
      data: data[req.params.id - 1] || null
    });
  });
  app.get("/api/blog", function(req, res) {
    res.json({
      data
    });
  });
  app.get("/api/search", function(req, res) {
    res.json({ search: req.query.searchValue || "kosong" });
  });
};
