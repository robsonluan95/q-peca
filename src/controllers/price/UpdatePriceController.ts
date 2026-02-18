import { Request, Response, RequestHandler } from "express";
import { UpdatePriceService } from "../../services/price/UpdatePriceService";

class UpdatePriceController {
    handle: RequestHandler = async (req, res) => {
        const { id, value, url, affiliateLink, partId, storeId } = req.body;

        const updatePriceService = new UpdatePriceService();

        const price = await updatePriceService.execute({
            id,
            value,
            url,
            affiliateLink,
            partId,
            storeId,
        });

        res.json(price);
    }
}

export { UpdatePriceController };
