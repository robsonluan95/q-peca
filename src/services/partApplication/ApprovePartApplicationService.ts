import prismaClient from "../../prisma";

interface ApproveRequest {
    applicationId: string;
    status: "APPROVED" | "REJECTED";
}

class ApprovePartApplicationService {
    async execute({ applicationId, status }: ApproveRequest) {
        const application = await prismaClient.partApplication.update({
            where: {
                id: applicationId
            },
            data: {
                status: status
            },
            include: {
                vehicle: true,
                part: true
            }
        });

        return application;
    }
}

export { ApprovePartApplicationService };
