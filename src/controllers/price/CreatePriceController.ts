import { Request, Response, RequestHandler } from "express";
import { CreatePriceService } from "../../services/price/CreatePriceService";

class CreatePriceController {
    handle: RequestHandler = async (req, res) => {
        const { value, url, affiliateLink, partId, storeId } = req.body;

        const createPriceService = new CreatePriceService();

        const price = await createPriceService.execute({
            value,
            url,
            affiliateLink,
            partId,
            storeId,
        });

        res.json(price);
    }
}

export { CreatePriceController };
