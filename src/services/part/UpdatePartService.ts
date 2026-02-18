import prismaClient from "../../prisma";

interface PartRequest {
    id: string;
    name?: string;
    partNumber?: string;
    description?: string;
    categoryId?: string;
}

class UpdatePartService {
    async execute({ id, name, partNumber, description, categoryId }: PartRequest) {
        const part = await prismaClient.part.update({
            where: {
                id: id,
            },
            data: {
                name,
                partNumber,
                description,
                categoryId,
            }
        });

        return part;
    }
}

export { UpdatePartService };
