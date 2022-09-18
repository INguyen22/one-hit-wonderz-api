/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('songs', function (table) {
        table.increments();
        table.string('song_name');
        table.string('artist');
        table.string('genre');
        table.string('moods');
        table.string('release_date');
        table.text('bio');
        table.string('cover_image', 2048);
        table.string('decade');
        table.string('spotify_key');
        table.timestamps();
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('songs')
};
