import prismaClient from "../../prisma";

class ListPriceService {
    async execute() {
        const prices = await prismaClient.price.findMany({
            include: {
                part: true,
                store: true,
            }
        });

        return prices;
    }
}

export { ListPriceService };
