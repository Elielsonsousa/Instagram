exports.up = function(knex) {
    knex.schema.hasTable('clienteRegister').then(function(exists) {
      if (!exists) {
        return knex.schema.createTable('clienteRegister', function(table) {
            table.increments("id").primary().unsigned();
            table.string("name").notNullable();
            table.string("email").notNullable();
            table.string("password").notNullable();
        });
      }
    });
    
};
exports.down = function(knex) {
    return knex.schema.dropTable("clienteRegister");
};

