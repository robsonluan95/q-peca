import prismaClient from "../../prisma";

interface PriceRequest {
    id: string;
}

class RemovePriceService {
    async execute({ id }: PriceRequest) {
        const price = await prismaClient.price.delete({
            where: {
                id: id,
            }
        });

        return price;
    }
}

export { RemovePriceService };
