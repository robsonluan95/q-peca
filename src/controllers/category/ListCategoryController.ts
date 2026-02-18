import { Request, Response, RequestHandler } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController {
    handle: RequestHandler = async (req, res) => {
        const listCategoryService = new ListCategoryService();

        const categories = await listCategoryService.execute();

        res.json(categories);
    }
}

export { ListCategoryController };
