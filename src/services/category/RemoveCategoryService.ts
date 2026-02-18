import prismaClient from "../../prisma";

interface CategoryRequest {
    id: string;
}

class RemoveCategoryService {
    async execute({ id }: CategoryRequest) {
        if (!id) {
            throw new Error("Id invalid");
        }

        // Busca produtos associados a esta categoria
        const parts = await prismaClient.part.findMany({
            where: {
                categoryId: id
            },
            select: {
                name: true
            }
        });

        if (parts.length > 0) {
            const partsNames = parts.map(p => p.name).join(", ");
            throw new Error(`Não é possível remover a categoria: existem produtos registrados nela (${partsNames})`);
        }

        const category = await prismaClient.category.delete({
            where: {
                id: id,
            }
        });

        return category;
    }
}

export { RemoveCategoryService };
