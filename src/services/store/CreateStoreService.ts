import prismaClient from "../../prisma";

interface StoreRequest {
    name: string;
    baseUrl?: string;
}

class CreateStoreService {
    async execute({ name, baseUrl }: StoreRequest) {
        const store = await prismaClient.store.create({
            data: {
                name: name,
                baseUrl: baseUrl
            }
        });

        return store;
    }
}

export { CreateStoreService };
