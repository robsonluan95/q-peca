import prismaClient from "../../prisma";

class ListPartApplicationService {
    async execute() {
        const applications = await prismaClient.partApplication.findMany({
            include: {
                part: true,
                vehicle: true,
            }
        });

        return applications;
    }
}

export { ListPartApplicationService };
