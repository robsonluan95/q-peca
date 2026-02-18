import prismaClient from "../../prisma";

class ListVehicleService {
    async execute() {
        const vehicles = await prismaClient.vehicle.findMany();
        return vehicles;
    }
}

export { ListVehicleService };
