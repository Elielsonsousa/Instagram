exports.up = function(knex) {
  knex.schema.hasTable('create_user').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('create_user', function(table) {
      table.increments("id").primary().unsigned();
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.string("phone").notNullable();
      table.string("city").notNullable();
      table.string("uf", 2).notNullable();
      table.string("neighborhood").notNullable();
      table.string("street").notNullable();
      table.string("selectedservice").notNullable();
      table.string("nome");
      table.string("size");
      table.string("key");
      table.string("url");
      });
    }
  });
  
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("create_user");
  };
