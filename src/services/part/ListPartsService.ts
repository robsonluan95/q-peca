import prismaClient from "../../prisma";

interface ListPartsRequest {
    query?: string;
}

class ListPartsService {
    async execute({ query }: ListPartsRequest) {
        const parts = await prismaClient.part.findMany({
            where: query ? {
                OR: [
                    { name: { contains: query } }, // Case insensitive usually requires mode: 'insensitive' in Postgres, but SQLite is default case-insensitive for LIKE
                    { partNumber: { contains: query } }
                ]
            } : {},
            include: {
                category: true,
                applications: {
                    include: {
                        vehicle: true
                    }
                },
                prices: {
                    include: {
                        store: true
                    }
                }
            }
        });

        return parts;
    }
}

export { ListPartsService };
