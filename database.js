const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'fwgbypdfzfvobl',
    password: '85212adb660f5c23529f1c1f6910f9056b6eb8433503548abbb693ec898f3a07',
    host: 'ec2-52-1-115-6.compute-1.amazonaws.com',
    database: 'df2nu0shp9kddd',
    port: 5432,
    ssl: { rejectUnauthorized: false}
});

/*
const script = `
    CREATE TABLE IF NOT EXISTS contatos(
        ID serial primary key,
        nome varchar(60) not null,
        telefone varchar(20) not null
    )
`;

pool.query(script, function(error, result){
    if(error){
        throw error;
    }

    console.log("Tabela criada com sucesso.");
});

*/

module.exports = {
    async create(nome, telefone){
        try{
            const sql = 'INSERT INTO contatos (nome, telefone) VALUES ($1, $2)';
            const result = await pool.query(sql, [nome, telefone]);
            return result.rows;
        } catch (error) {
            console.log(error);
            return -1;
        }
    },

    async read() {
        const sql = 'SELECT * FROM contatos ORDER BY nome';
        const result = await pool.query(sql);
        return result.rows;
    },

    async find(id) {
        const sql = 'SELECT * FROM contatos WHERE ID = $1';
        const result = await pool.query(sql, [id]);
        return result.rows;
    },

    async update(id, nome, telefone) {
        const sql = 'UPDATE contatos SET nome = $1, telefone = $2 WHERE ID = $3';
        const result = await pool.query(sql, [nome, telefone, id]);
        return result.rows;
    },

    async delete(id) {
        const sql = 'DELETE FROM contatos WHERE ID = $1';
        const result = await pool.query(sql, [id]);
        return result.rows;
    }
};