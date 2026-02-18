import { Request, Response, RequestHandler } from "express";
import { ListVehicleService } from "../../services/vehicle/ListVehicleService";

class ListVehicleController {
    handle: RequestHandler = async (req, res) => {
        const listVehicleService = new ListVehicleService();

        const vehicles = await listVehicleService.execute();

        res.json(vehicles);
    }
}

export { ListVehicleController };
