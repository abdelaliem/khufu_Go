const pool = require("../config/db"); // Replace with your MySQL pool configuration

class SQLModel {
    constructor(tableName) {
        this.tableName = tableName;
    }
    
    executeQuery(query, params) {
        return new Promise((resolve, reject) => {
            pool.query(query, params, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }

    async findAll() {
        const query = `SELECT * FROM ${this.tableName}`;
        const results = await this.executeQuery(query);
        return results;
    }

    async findById(id) {
        const query = `SELECT * FROM ${this.tableName} WHERE id = ?`;
        const results = await this.executeQuery(query, [id]);
        return results[0];
    }

    async create(data) {
        let str = Object.keys(data).map(key =>  {
            let value = typeof data[key] === 'string' ? `'${data[key]}'` : data[key];
            return `${key} = ${value}`;
        }).join(', ');
        const query = `INSERT INTO ${this.tableName} SET ${str}`;
        const result = await this.executeQuery(query);
        return result.insertId;
    }

    async update(id, data) {
        let str = Object.keys(data).map(key =>  {
            let value = typeof data[key] === 'string' ? `'${data[key]}'` : data[key];
            return `${key} = ${value}`;
        }).join(', ');
        console.log(str)
        const query = `UPDATE ${this.tableName} SET ${str} WHERE id = ?`;
        const result = await this.executeQuery(query, [ id]);
        return result.affectedRows;
    }

    async delete(id) {
        const query = `DELETE FROM ${this.tableName} WHERE id = ?`;
        const result = await this.executeQuery(query, [id]);
        return result.affectedRows;
    }
}

module.exports = SQLModel;
