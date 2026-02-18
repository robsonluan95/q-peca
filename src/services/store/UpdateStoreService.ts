import prismaClient from "../../prisma";

interface StoreRequest {
    id: string;
    name: string;
    baseUrl?: string;
}

class UpdateStoreService {
    async execute({ id, name, baseUrl }: StoreRequest) {
        const store = await prismaClient.store.update({
            where: {
                id: id,
            },
            data: {
                name,
                baseUrl,
            }
        });

        return store;
    }
}

export { UpdateStoreService };
