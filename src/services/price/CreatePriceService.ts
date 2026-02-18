import prismaClient from "../../prisma";

interface PriceRequest {
    partId: string;
    storeId: string;
    value: number;
    url: string;
    affiliateLink?: string;
}

class CreatePriceService {
    async execute({ partId, storeId, value, url, affiliateLink }: PriceRequest) {
        const price = await prismaClient.price.create({
            data: {
                partId: partId,
                storeId: storeId,
                value: value,
                url: url,
                affiliateLink: affiliateLink
            },
            include: {
                store: true,
                part: true
            }
        });

        return price;
    }
}

export { CreatePriceService };
