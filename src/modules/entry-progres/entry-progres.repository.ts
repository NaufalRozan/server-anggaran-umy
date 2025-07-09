import { db } from "../../config/prisma";
import { CreateDokumenInput, CreateEntryProgresInput } from "./entry-progres.schema";

export type FileEntries = {
    filename: string;
    originalName: any;
    path: string;
    mimetype: string;
    size: number;
    extension: any;
}

class EntryProgresRepository {
    static async Upsert(data: CreateEntryProgresInput, id: string) {
        const entryProgres = await db.progresSPJ.upsert({
            where: {
                prokerId: data.prokerId
            },
            create: {
                prokerId: data.prokerId,
                statusKegiatan: data.statusKegiatan,
                persenKegiatan: data.persenKegiatan,
                uraianKegiatan: data.uraianKegiatan,
                realisasiOutputKegiatan: data.realisasiOutputKegiatan,
                statusDiperbaiki: data.statusDiperbaiki,

                statusPenilaianBPM: data.statusPenilaianBPM,
                persenPenilaianBPM: data.persenPenilaianBPM,
                uraianPenilaianBPM: data.uraianPenilaianBPM,
                realisasiOutputBPM: data.realisasiOutputBPM,
                statusApprovalBPM: data.statusApprovalBPM,
            },
            update: {
                statusKegiatan: data.statusKegiatan,
                persenKegiatan: data.persenKegiatan,
                uraianKegiatan: data.uraianKegiatan,
                realisasiOutputKegiatan: data.realisasiOutputKegiatan,
                statusDiperbaiki: data.statusDiperbaiki,

                statusPenilaianBPM: data.statusPenilaianBPM,
                persenPenilaianBPM: data.persenPenilaianBPM,
                uraianPenilaianBPM: data.uraianPenilaianBPM,
                realisasiOutputBPM: data.realisasiOutputBPM,
                statusApprovalBPM: data.statusApprovalBPM,
            }
        })
        return entryProgres;
    }



    static async InsertDokumenPersiapan(data: FileEntries[], id: string) {
        const dokumen = await db.maOnKpi.update({
            where: {
                id: id
            },
            data: {
                dokumenPersiapan: {
                    createMany: {
                        data
                    }
                }
            }
        });

        return dokumen;
    }
    static async InsertDokumenPelaksanaan(data: FileEntries[], id: string) {
        const dokumen = await db.maOnKpi.update({
            where: {
                id: id
            },
            data: {
                dokumenPelaksanaan: {
                    createMany: {
                        data
                    }
                }
            }
        });

        return dokumen;
    }
    static async InsertDokumenLaporan(data: FileEntries[], id: string) {
        const dokumen = await db.maOnKpi.update({
            where: {
                id: id
            },
            data: {
                dokumenLaporan: {
                    createMany: {
                        data
                    }
                }
            }
        });

        return dokumen;
    }

    static async FindOne(id: string) {
        return db.progresSPJ.findUnique({
            where: {
                id,
            },
            include: {
                proker: true
            }
        })
    }

    static async FindAll(prokerId: string) {
        return db.maOnKpi.findFirst({
            where: {
                id: prokerId
            },
            include: {
                ProgresSPJ: true,
                MA: true,
                KPI: true,
                dokumenPersiapan: true,
                dokumenPelaksanaan: true,
                dokumenLaporan: true,
                SPJ: true,
                Pembelian: {
                    include: {
                        rekening: true,
                    }
                },
                SPP: {
                    include: {
                        SPMU: true,
                    }
                },
            }
        })
    }

    static async FindAllByProkerId(prokerId: string) {
        return db.progresSPJ.findMany({
            where: {
                prokerId
            },
            orderBy: {
                createdAt: 'asc'
            }
        })
    }

    static async Update(id: string, data: CreateEntryProgresInput) {
        return db.progresSPJ.update({
            where: {
                id
            },
            data: {
                statusKegiatan: data.statusKegiatan,
                persenKegiatan: data.persenKegiatan,
                uraianKegiatan: data.uraianKegiatan,
                realisasiOutputKegiatan: data.realisasiOutputKegiatan,
                statusDiperbaiki: data.statusDiperbaiki,

                statusPenilaianBPM: data.statusPenilaianBPM,
                persenPenilaianBPM: data.persenPenilaianBPM,
                uraianPenilaianBPM: data.uraianPenilaianBPM,
                realisasiOutputBPM: data.realisasiOutputBPM,
                statusApprovalBPM: data.statusApprovalBPM,
            }
        })
    }

    static async UpdateStatusDiperbaiki(id: string, status: boolean) {
        return db.progresSPJ.update({
            where: {
                id
            },
            data: {
                statusDiperbaiki: status
            }
        })
    }

    static async UpdateStatusApprovalBPM(id: string, status: string) {
        return db.progresSPJ.update({
            where: {
                id
            },
            data: {
                statusApprovalBPM: status
            }
        })
    }

    static async UpdateStatusPenilaianBPM(id: string, status: string) {
        return db.progresSPJ.update({
            where: {
                id
            },
            data: {
                statusPenilaianBPM: status
            }
        })
    }

    static async UpdateStatusKegiatan(id: string, status: string) {
        return db.progresSPJ.update({
            where: {
                id
            },
            data: {
                statusKegiatan: status
            }
        })
    }

    static async Delete(id: string) {
        return db.progresSPJ.delete({
            where: {
                id
            }
        })
    }

    static async DeleteDokumen(id: string) {
        return db.file.delete({
            where: {
                id
            }
        })
    }
}

export default EntryProgresRepository;