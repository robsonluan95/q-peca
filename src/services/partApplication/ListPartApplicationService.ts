import prismaClient from "../../prisma";

class ListPartApplicationService {
    async execute(showAll: boolean = false) {
        const applications = await prismaClient.partApplication.findMany({
            where: showAll ? {} : {
                status: "APPROVED"
            },
            include: {
                part: true,
                vehicle: true,
                user: {
                    select: {
                        name: true,
                        role: true
                    }
                }
            }
        });

        return applications;
    }
}

export { ListPartApplicationService };
