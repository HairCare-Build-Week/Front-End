exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('table_name')
      .del()
      .then(function() {
        // Inserts seed entries
        return knex('table_name').insert([
          { id: 1, isStylist: true, username: 'stylist', password: 'stylist' },
          { id: 1, isCustomer: true, username: 'customer', password: 'customer' },
        ]);
      });
  };
  