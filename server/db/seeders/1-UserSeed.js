module.exports = {
    async up(queryInterface) {
      await queryInterface.bulkInsert(
        'Users',
        [
          {
            username: 'admin',
            email: 'admin@admin.ru',
            password: '123',
            isAdmin: true,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {},
      );
    },
  
    async down(queryInterface) {
      await queryInterface.bulkDelete('Users', null, {});
    },
  };
  
  