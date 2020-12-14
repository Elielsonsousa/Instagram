exports.up = function(knex, Promise) {
    return knex.schema.table('create_user', function(t) {
        t.string('textarea');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('create_user', function(t) {
        t.dropColumn('textarea');
    });
};