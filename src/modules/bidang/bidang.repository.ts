import { Prisma } from "@prisma/client";
import { db } from "../../config/prisma";
import { CreateBidangInput } from "./bidang.schema";

class BidangRepository {
    static async getNextBidangCode() {
        const lastProduct = await db.bidang.findFirst({
            orderBy: { code: 'desc' }
        });

        if (!lastProduct) return "01";
        const lastNumber = parseInt(lastProduct.code);
        return String(lastNumber + 1).padStart(2, '0');
    }

    static async Insert(
        bidangData: CreateBidangInput,
        creatorId?: string
    ) {
        return await db.$transaction(async (tx: Prisma.TransactionClient) => {
            const nextCode = await this.getNextBidangCode();

            const existingBidang = await tx.bidang.findUnique({
                where: {
                    code: nextCode
                }
            })

            if (existingBidang) {
                throw new Error("Kode Bidang sudah digunakan");
            }

            return await tx.bidang.create({
                data: {
                    name: bidangData.name,
                    code: nextCode,
                    createdById: creatorId
                }
            })
        })
    }

    static async FindAll() {
        return db.bidang.findMany({
            orderBy: {
                code: 'asc'
            }
        });
    }

    static async FindOne(id: string) {
        return db.bidang.findUnique({
            where: {
                id
            },
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