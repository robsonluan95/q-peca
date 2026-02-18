import { Request, Response, RequestHandler } from "express";
import { UpdateVehicleService } from "../../services/vehicle/UpdateVehicleService";

class UpdateVehicleController {
    handle: RequestHandler = async (req, res) => {
        const { id, make, model, yearStart, yearEnd } = req.body;

        const updateVehicleService = new UpdateVehicleService();

        const vehicle = await updateVehicleService.execute({
            id,
            make,
            model,
            yearStart,
            yearEnd,
        });

        res.json(vehicle);
    }
}

export { UpdateVehicleController };
