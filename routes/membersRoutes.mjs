import express from 'express'
import membersController from '../controllers/membersController.mjs'
import auth from '../middleware/auth.mjs';


const router = express.Router();

router.post("/register", membersController.register);
router.post("/login", membersController.login);
router.get("/", auth, membersController.getMember)


export default router