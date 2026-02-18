import prismaClient from "../../prisma";

class ListStoreService {
    async execute() {
        const stores = await prismaClient.store.findMany();
        return stores;
    }
}

export { ListStoreService };
