import { Request, Response, RequestHandler } from "express";
import { RemovePriceService } from "../../services/price/RemovePriceService";

class RemovePriceController {
    handle: RequestHandler = async (req, res) => {
        const id = req.query.id as string;

        const removePriceService = new RemovePriceService();

        const price = await removePriceService.execute({
            id,
        });

        res.json(price);
    }
}

export { RemovePriceController };
