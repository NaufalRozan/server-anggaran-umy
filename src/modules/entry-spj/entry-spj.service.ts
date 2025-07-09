import EntrySpjRepository from "./entry-spj.repository";
import { CreateEntrySPJInput } from "./entry-spj.schema";

class EntrySpjService {
    static async Upsert(data: CreateEntrySPJInput, id: string) {
        const entrySPJ = await EntrySpjRepository.Upsert(data, id);
        return entrySPJ
    }
}

export default EntrySpjService;