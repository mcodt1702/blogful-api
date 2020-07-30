const ArticlesService = {
  getAllArticles(knex) {
    return knex.select("*").from("blogful_articles");
  },

  insertArticle(knex, data) {
    return db("blogful_articles")
      .insert(data)
      .returning("*")
      .then((rows) => rows[0]);
  },

  getById(db, id) {
    return db("blogful_articles").select("*").where({ id }).first();
  },

  deleteArticle(db, id) {
    return db("blogful_articles").where({ id }).delete();
  },

  updateArticle(db, id, data) {
    return db("blogful_articles").where({ id }).update(data);
  },
};

module.exports = ArticlesService;
