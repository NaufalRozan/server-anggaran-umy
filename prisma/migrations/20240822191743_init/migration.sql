-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `salt` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `unit_kerja` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `golongan_unit_kerja_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `unit_kerja_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `golongan_unit_kerja` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rk1` (
    `id` VARCHAR(191) NOT NULL,
    `unit_kerja_id` VARCHAR(191) NOT NULL,
    `visi` VARCHAR(191) NOT NULL,
    `misi` VARCHAR(191) NOT NULL,
    `tujuan_umum` VARCHAR(191) NOT NULL,
    `tujuan_khusus` VARCHAR(191) NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `iks` (
    `id` VARCHAR(191) NOT NULL,
    `unit_kerja_id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `kode_iks` VARCHAR(191) NOT NULL,
    `nama_iks` VARCHAR(191) NOT NULL,
    `sifat` VARCHAR(191) NOT NULL,
    `baseline` VARCHAR(191) NOT NULL,
    `target` VARCHAR(191) NOT NULL,
    `jumlah_kegiatan` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mata_anggaran` (
    `id` VARCHAR(191) NOT NULL,
    `iks_id` VARCHAR(191) NOT NULL,
    `no_kegiatan` VARCHAR(191) NOT NULL,
    `kode_mata_anggaran` VARCHAR(191) NOT NULL,
    `nama_mata_anggaran` VARCHAR(191) NOT NULL,
    `uraian` VARCHAR(191) NOT NULL,
    `output` VARCHAR(191) NOT NULL,
    `waktu` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `unit_kerja` ADD CONSTRAINT `unit_kerja_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `unit_kerja` ADD CONSTRAINT `unit_kerja_golongan_unit_kerja_id_fkey` FOREIGN KEY (`golongan_unit_kerja_id`) REFERENCES `golongan_unit_kerja`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rk1` ADD CONSTRAINT `rk1_unit_kerja_id_fkey` FOREIGN KEY (`unit_kerja_id`) REFERENCES `unit_kerja`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `iks` ADD CONSTRAINT `iks_unit_kerja_id_fkey` FOREIGN KEY (`unit_kerja_id`) REFERENCES `unit_kerja`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mata_anggaran` ADD CONSTRAINT `mata_anggaran_iks_id_fkey` FOREIGN KEY (`iks_id`) REFERENCES `iks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
