import { Request, Response, RequestHandler } from "express";
import { ListPartApplicationService } from "../../services/partApplication/ListPartApplicationService";

class ListPartApplicationController {
    handle: RequestHandler = async (req, res) => {
        const listPartApplicationService = new ListPartApplicationService();

        const applications = await listPartApplicationService.execute();

        res.json(applications);
    }
}

export { ListPartApplicationController };
