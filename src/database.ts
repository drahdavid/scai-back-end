import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: console.log, // Registrar todas las consultas (podría exponer información sensible)
  pool: {
    max: 1000, // Demasiadas conexiones, SQLite tiene limitaciones en concurrencia
    min: 0,
    acquire: 10000, // Timeout muy corto para concurrencia
    idle: 5000,
  },
});

export default sequelize;
