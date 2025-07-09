import { db } from "../../config/prisma";
import { CreateEntrySPJInput } from "./entry-spj.schema";


class EntrySpjRepository {
  static async Upsert(data: CreateEntrySPJInput, id: string) {
    return db.sPJ.upsert({
        where: {
            prokerId: data.prokerId
        },
        create: {
            prokerId: data.prokerId,
            noSPJ: data.noSPJ,
            nominalSPJ: data.nominalSPJ,

            statusPersetujuanBiro: data.statusPersetujuanBiro,
            keteranganBiro: data.keteranganBiro,
            tanggalApprovalBiro: data.tanggalApprovalBiro,

            statusPersetujuanBPM: data.statusPersetujuanBPM,
            keteranganBPM: data.keteranganBPM,
            tanggalApprovalBPM: data.tanggalApprovalBPM,
        },
        update: {
            noSPJ: data.noSPJ,
            nominalSPJ: data.nominalSPJ,

            statusPersetujuanBiro: data.statusPersetujuanBiro,
            keteranganBiro: data.keteranganBiro,
            tanggalApprovalBiro: data.tanggalApprovalBiro,

            statusPersetujuanBPM: data.statusPersetujuanBPM,
            keteranganBPM: data.keteranganBPM,
            tanggalApprovalBPM: data.tanggalApprovalBPM,
        }
    })
  }
}

export default EntrySpjRepository;