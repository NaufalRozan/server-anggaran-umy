import BidangRepository from "./bidang.repository";
import { CreateBidangInput } from "./bidang.schema";


class BidangService {
    static async createBidang(
        bidangData: CreateBidangInput,
        creatorId?: string
    ) {
        return BidangRepository.Insert(
            bidangData,
            creatorId ?? undefined
        )
    }

    static async findAllBidang() {
        return BidangRepository.FindAll()
    }

    static async findOneBidang(id: string) {
        return BidangRepository.FindOne(id)
    }

    static async updateBidang(bidangData: CreateBidangInput, id: string) {
        return BidangRepository.Update(
            id,
            bidangData
        )
    }

    static async deleteBidang(id: string) {
        return BidangRepository.Delete(id)
    }
}

export default BidangService;