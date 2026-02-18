import { Request, Response, RequestHandler } from "express";
import { RemoveVehicleService } from "../../services/vehicle/RemoveVehicleService";

class RemoveVehicleController {
    handle: RequestHandler = async (req, res) => {
        const id = req.query.id as string;

        const removeVehicleService = new RemoveVehicleService();

        const vehicle = await removeVehicleService.execute({
            id,
        });

        res.json(vehicle);
    }
}

export { RemoveVehicleController };
