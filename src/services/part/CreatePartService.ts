import prismaClient from "../../prisma";

interface PartRequest {
    name: string;
    partNumber: string;
    description: string;
    categoryId: string;
}

class CreatePartService {
    async execute({ name, partNumber, description, categoryId }: PartRequest) {
        const part = await prismaClient.part.create({
            data: {
                name: name,
                partNumber: partNumber,
                description: description,
                categoryId: categoryId,
            },
            select: {
                id: true,
                name: true,
                partNumber: true,
                description: true,
                categoryId: true,
            }
        });

        return part;
    }
}

export { CreatePartService };
