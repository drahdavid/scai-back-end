import express from 'express';
import sequelize from './database';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', userRoutes);
app.use('/auth', authRoutes);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
