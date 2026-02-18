import { Request, Response, RequestHandler } from "express";
import { UpdatePartApplicationService } from "../../services/partApplication/UpdatePartApplicationService";

class UpdatePartApplicationController {
    handle: RequestHandler = async (req, res) => {
        const { id, partId, vehicleId, notes } = req.body;

        const updatePartApplicationService = new UpdatePartApplicationService();

        const application = await updatePartApplicationService.execute({
            id,
            partId,
            vehicleId,
            notes,
        });

        res.json(application);
    }
}

export { UpdatePartApplicationController };
