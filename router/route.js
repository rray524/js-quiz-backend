import { Router } from "express";
import { getQuestions, createQuestions, deleteQuestions, getResult, createResult, deleteResult } from "../controller/controller.js";

const router = Router();
// question routes
router.route('/questions')
    .get(getQuestions)
    .post(createQuestions)
    .delete(deleteQuestions)

// result routes
router.route('/result')
    .get(getResult)
    .post(createResult)
    .delete(deleteResult)

export default router;
