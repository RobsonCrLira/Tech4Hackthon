const { onUpdateTrigger } = require('../../../knexfile');

exports.up = async (knex) => knex.schema.createTable('users', (table) => {
  table.inclement('id');
  table.text('userName').unique().notNullable();

  table.timestamp('createdAt').defaultTo(knex.fn.now());
  table.timestamp('updatedAt').defaultTo(knex.fn.now());
}).then(() => knex.raw(onUpdateTrigger('users')));

exports.down = async (knex) => knex.schema.dropTable('users');
