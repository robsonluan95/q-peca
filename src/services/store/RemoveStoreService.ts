import prismaClient from "../../prisma";

interface StoreRequest {
    id: string;
}

class RemoveStoreService {
    async execute({ id }: StoreRequest) {
        const store = await prismaClient.store.delete({
            where: {
                id: id,
            }
        });

        return store;
    }
}

export { RemoveStoreService };
