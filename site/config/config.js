module.exports = {
  production: {
    username: 'projeto-rpg',
    password: '#Gf48617777800',
    database: 'bdprojeto',
    host: 'projeto-rpg.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
