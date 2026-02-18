import prismaClient from "../../prisma";

interface PartRequest {
    id: string;
}

class RemovePartService {
    async execute({ id }: PartRequest) {
        const part = await prismaClient.part.delete({
            where: {
                id: id,
            }
        });

        return part;
    }
}

export { RemovePartService };
