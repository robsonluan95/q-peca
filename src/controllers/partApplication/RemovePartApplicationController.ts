import { Request, Response, RequestHandler } from "express";
import { RemovePartApplicationService } from "../../services/partApplication/RemovePartApplicationService";

class RemovePartApplicationController {
    handle: RequestHandler = async (req, res) => {
        const id = req.query.id as string;

        const removePartApplicationService = new RemovePartApplicationService();

        const application = await removePartApplicationService.execute({
            id,
        });

        res.json(application);
    }
}

export { RemovePartApplicationController };
