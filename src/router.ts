import { Router } from 'express';
import { UserController} from "./controllers/controller"
const users =new UserController()
const routes = Router()

routes.post('/api/users',users.store);

export  {routes}