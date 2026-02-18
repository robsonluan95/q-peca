import prismaClient from "../../prisma";

interface PartApplicationRequest {
    id: string;
}

class RemovePartApplicationService {
    async execute({ id }: PartApplicationRequest) {
        const application = await prismaClient.partApplication.delete({
            where: {
                id: id,
            }
        });

        return application;
    }
}

export { RemovePartApplicationService };
