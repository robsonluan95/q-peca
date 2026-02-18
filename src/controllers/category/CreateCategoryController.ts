import { Request, Response, RequestHandler } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController {
    handle: RequestHandler = async (req, res) => {
        const { name } = req.body;

        const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute({
            name,
        });

        res.json(category);
    }
}

export { CreateCategoryController };
