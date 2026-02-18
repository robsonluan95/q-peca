import { Request, Response, RequestHandler } from "express";
import { ApprovePartApplicationService } from "../../services/partApplication/ApprovePartApplicationService";

class ApprovePartApplicationController {
    handle: RequestHandler = async (req, res) => {
        const { applicationId, status } = req.body;

        const approvePartApplicationService = new ApprovePartApplicationService();

        const application = await approvePartApplicationService.execute({
            applicationId,
            status: status || "APPROVED"
        });

        res.json(application);
    }
}

export { ApprovePartApplicationController };
