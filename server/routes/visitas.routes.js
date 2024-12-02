import { Router } from "express";
import { getVisitas,getVisita } from "../controllers/visitas.controller.js";
import { getuser,getUsers,createUser,updateUser,login,logout,deleteUser, verifyToken} from "../controllers/user.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.js";
import { registerSchema,loginSchema  } from "../validation/auth.validation.js";
const visitas = Router();

//Auth
visitas.post('/login',validateSchema(loginSchema),login);
visitas.post('/logout',logout);
visitas.post('/register', validateSchema(registerSchema),createUser)
visitas.post('/validate', verifyToken)


visitas.get('/profile',authRequired, getuser)
visitas.get('/user', authRequired, getUsers)
visitas.put('/user/:id',authRequired, updateUser)
visitas.delete('/user/:id',authRequired, deleteUser)
// visitas
visitas.get('/visitas', authRequired, getVisitas)
visitas.get('/visitas/:id', authRequired,getVisita)



export default visitas;
