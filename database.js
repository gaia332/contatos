const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'fwgbypdfzfvobl',
    password: '85212adb660f5c23529f1c1f6910f9056b6eb8433503548abbb693ec898f3a07',
    host: 'ec2-52-1-115-6.compute-1.amazonaws.com',
    database: 'df2nu0shp9kddd',
    port: 5432,
    ssl: { rejectUnauthorized: false}
});

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