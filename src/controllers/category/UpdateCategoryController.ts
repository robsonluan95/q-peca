import { Request, Response, RequestHandler } from "express";
import { UpdateCategoryService } from "../../services/category/UpdateCategoryService";

class UpdateCategoryController {
    handle: RequestHandler = async (req, res) => {
        const { id, name } = req.body;

        const updateCategoryService = new UpdateCategoryService();

        const category = await updateCategoryService.execute({
            id,
            name,
        });

        res.json(category);
    }
}

export { UpdateCategoryController };
