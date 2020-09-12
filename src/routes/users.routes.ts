import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { name, email, password, birthdate } = request.body;
  const createUser = new CreateUserService();
  const user = await createUser.execute({
    name,
    email,
    password,
    birthdate,
  });
  return response.json(user);
});

usersRouter.patch('/avatar', (request, response) => {
  return response.json({ message: 'ok' });
});

export default usersRouter;
