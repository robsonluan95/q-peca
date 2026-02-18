import { Request, Response, RequestHandler } from "express";
import { CreatePartApplicationService } from "../../services/partApplication/CreatePartApplicationService";

class CreatePartApplicationController {
    handle: RequestHandler = async (req, res) => {
        const { partId, vehicleId, notes } = req.body;

        const createPartApplicationService = new CreatePartApplicationService();

        const application = await createPartApplicationService.execute({
            partId,
            vehicleId,
            notes,
        });

        res.json(application);
    }
}

export { CreatePartApplicationController };
