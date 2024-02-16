const SQLModel = require('./Model');

// Create a new class for a specific table
class UserModel extends SQLModel {
    constructor() {
        // table name
        super('users');
    }
}

module.exports = new UserModel