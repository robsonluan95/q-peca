import { Request, Response, RequestHandler } from "express";
import { RemoveCategoryService } from "../../services/category/RemoveCategoryService";

class RemoveCategoryController {
    handle: RequestHandler = async (req, res) => {
        const id = (req.query.id || req.body.id) as string;

        const removeCategoryService = new RemoveCategoryService();

        const category = await removeCategoryService.execute({
            id,
        });

        res.json(category);
    }
}

export { RemoveCategoryController };
