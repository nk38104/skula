import classroomController from "../controllers/classroom";
import { Router } from "express";

const router = Router();

router.post("/", (req, resp) => classroomController.create(req, resp));
router.get("/:id", (req, resp) => classroomController.get(req, resp));
router.get("/", (req, resp) => classroomController.getAll(req, resp));
router.put("/:id", (req, resp) => classroomController.update(req, resp));
router.delete("/id", (req, resp) => classroomController.remove(req, resp));

export default router;
