import prismaClient from "../../prisma";

interface PriceRequest {
    id: string;
    value?: number;
    url?: string;
    affiliateLink?: string;
    partId?: string;
    storeId?: string;
}

class UpdatePriceService {
    async execute({ id, value, url, affiliateLink, partId, storeId }: PriceRequest) {
        const price = await prismaClient.price.update({
            where: {
                id: id,
            },
            data: {
                value,
                url,
                affiliateLink,
                partId,
                storeId,
            }
        });

        return price;
    }
}

export { UpdatePriceService };
