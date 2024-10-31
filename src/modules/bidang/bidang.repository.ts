import { db } from "../../config/prisma";
import { CreateBidangInput } from "./bidang.schema";

class BidangRepository {
    static async Insert(
        bidangData: CreateBidangInput,
        creatorId?: string
    ) {
        return db.bidang.create({
            data: {
                name: bidangData.name,
                code: bidangData.code,
                createdById: creatorId
            }
        })
    }

    static async FindAll() {
        return db.bidang.findMany({
            include: {
                units: true,
            }
        });
    }

    static async FindOne(id: string) {
        return db.bidang.findUnique({
            where: {
                id
            },
            include: {
                units: true,
            }
        })
    }

    static async Update(id: string, bidangData: CreateBidangInput) {
        return db.bidang.update({
            where: {
                id
            },
            data: {
                name: bidangData.name,
                code: bidangData.code
            }
        })
    }

    static async Delete(id: string) {
        return db.bidang.delete({
            where: {
                id
            }
        })
    }
}

export default BidangRepository;