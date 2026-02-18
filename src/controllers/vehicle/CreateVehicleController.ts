import { Request, Response, RequestHandler } from "express";
import { CreateVehicleService } from "../../services/vehicle/CreateVehicleService";

class CreateVehicleController {
    handle: RequestHandler = async (req, res) => {
        const { make, model, yearStart, yearEnd } = req.body;

        const createVehicleService = new CreateVehicleService();

        const vehicle = await createVehicleService.execute({
            make,
            model,
            yearStart,
            yearEnd,
        });

        res.json(vehicle);
    }
}

export { CreateVehicleController };
