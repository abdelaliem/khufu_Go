const SQLModel = require('./Model');

// Create a new class for a specific table
class DriverModel extends SQLModel {
    constructor() {
        // table name
        super('drivers');
    }
}

module.exports = new DriverModel