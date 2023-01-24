import { answers, questions } from "../db/data.js";
import Question from "../models/questionSchema.js";
import Result from "../models/resultSchema.js";


// *********questions controller
export async function getQuestions(req, res) {
    try {
        const questions = await Question.find();
        res.json(questions)
    } catch (error) {
        res.json({ error })
    }
}
export async function createQuestions(req, res) {
    try {
        Question.insertMany({ questions: questions, answers: answers }, function (err, data) {
            res.json({ msg: "Data saved successfully..." })
        })

    } catch (error) {
        res.json({ error })
    }
}
export async function deleteQuestions(req, res) {
    try {
        await Question.deleteMany();
        res.json("Question deleted");
    } catch (error) {
        res.json({ error })
    }
}
//******* */ result controller
export async function getResult(req, res) {
    try {
        const results = await Result.find();
        res.json(results)
    } catch (error) {
        res.json({ error })
    }
}
export async function createResult(req, res) {
    try {
        const { username, result, attempts, points, achieved } = req.body;
        if (!username && !result) throw new Error("Data not provided");
        Result.create({ username, result, attempts, points, achieved }, function (err, data) {
            res.json({ msg: "Result created successfully..." })
        })


    } catch (error) {
        res.json({ error })
    }

}
export async function deleteResult(req, res) {
    try {
        await Result.deleteMany();
        res.json("Result deleted");
    } catch (error) {
        res.json({ error })
    }
}