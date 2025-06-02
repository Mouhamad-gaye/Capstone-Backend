import express from 'express'
import membersController from '../controllers/membersController.mjs'


const router = express.Router();

router.post("/register", membersController.register);
router.post("/login", membersController.login);
router.get("/getMember", membersController.getMember)


export default router