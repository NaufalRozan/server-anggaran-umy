-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 13, 2025 at 09:20 AM
-- Server version: 8.0.30
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sim_spmi`
--

-- --------------------------------------------------------

--
-- Table structure for table `bidang`
--

CREATE TABLE `bidang` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `created_by_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bidang`
--

INSERT INTO `bidang` (`id`, `name`, `code`, `created_at`, `updated_at`, `created_by_id`) VALUES
('cm6lgnm8c000xw6w36snmj53z', 'bidang 1', '01', '2025-02-01 00:34:29.570', '2025-07-31 02:50:00.877', NULL),
('cm6lgo51s000zw6w34e6ewtif', 'bidang 2', '02', '2025-02-01 00:34:53.962', '2025-07-31 03:27:55.199', NULL),
('cm6lgo9vf0011w6w36tstk84h', 'bidang 3', '03', '2025-02-01 00:35:00.212', '2025-07-31 03:28:02.035', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `category_unit`
--

CREATE TABLE `category_unit` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_unit`
--

INSERT INTO `category_unit` (`id`, `name`, `created_at`, `updated_at`) VALUES
('cm6lgf1ng0000w6w35eienond', 'Prodi', '2025-02-01 00:27:49.658', '2025-02-01 00:27:49.658'),
('cm6lgf86d0001w6w3h72ea8z6', 'Fakultas', '2025-02-01 00:27:58.117', '2025-02-01 00:27:58.117'),
('cmdquitah000014ielkuvs4j2', 'Universitas', '2025-07-31 03:39:27.304', '2025-07-31 03:39:27.304');

-- --------------------------------------------------------

--
-- Table structure for table `data_sub_unit`
--

CREATE TABLE `data_sub_unit` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data_unit_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `data_unit`
--

CREATE TABLE `data_unit` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `file`
--

CREATE TABLE `file` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `filename` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `originalName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mimetype` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` int NOT NULL,
  `extension` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `laporan_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pelaksanaan_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `persiapan_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pengalihan_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `file`
--

INSERT INTO `file` (`id`, `filename`, `originalName`, `path`, `mimetype`, `size`, `extension`, `description`, `createdAt`, `updatedAt`, `laporan_id`, `pelaksanaan_id`, `persiapan_id`, `pengalihan_id`) VALUES
('cmdr4coq300c9jjcc61jtpzw9', '1753949677608-invoice_110865.pdf', 'Invoice-110865.pdf', 'C:\\Users\\miqba\\Documents\\Programming\\Node Js\\UMY_Anggaran\\SPMI server\\src\\public\\spj\\progres\\persiapan\\1753949677608-invoice_110865.pdf', 'application/pdf', 15895, '.pdf', NULL, '2025-07-31 08:14:37.611', '2025-07-31 08:14:37.611', NULL, NULL, 'cmdr1oqih00b0jjccf02yj5af', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `file_laporan`
--

CREATE TABLE `file_laporan` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `laporan_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `filename` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `originalName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `path` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mimetype` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` int NOT NULL,
  `extension` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `indikator_kinerja`
--

CREATE TABLE `indikator_kinerja` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bidang_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kpi_code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sifat` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `standard` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `baseline` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `target` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `primary_pic_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secondary_pic_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `created_by_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tahun` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `leading_sector` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `supporting_sector` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `indikator_kinerja`
--

INSERT INTO `indikator_kinerja` (`id`, `bidang_id`, `kpi_code`, `name`, `sifat`, `standard`, `baseline`, `target`, `active`, `primary_pic_id`, `secondary_pic_id`, `created_at`, `updated_at`, `created_by_id`, `tahun`, `leading_sector`, `supporting_sector`) VALUES
('cmdqvldw2001tjjccjtxns6za', 'cm6lgnm8c000xw6w36snmj53z', 'IKS-1.1', 'Predikat akreditasi institusi BAN PT (APT)', 'Wajib', 'UNGGUL', NULL, NULL, 1, 'cmdquitah000014ielkuvs4j2', NULL, '2025-07-31 04:09:26.929', '2025-07-31 04:09:26.929', NULL, '2025', NULL, NULL),
('cmdqvldwg001vjjcce62i8t61', 'cm6lgnm8c000xw6w36snmj53z', 'IKS-1.2', 'Persentase perolehan akreditasi program studi oleh lembaga akreditasi internasional bereputasi terhadap jumlah prodi', 'Wajib', '5', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:09:26.929', '2025-07-31 04:09:26.929', NULL, '2025', NULL, NULL),
('cmdqvldwj001xjjcc295srb9g', 'cm6lgnm8c000xw6w36snmj53z', 'IKS-1.3', 'Persentase perolehan status terakreditasi program studi Unggul oleh BAN-PT atau Lembaga Akreditasi Mandiri (LAM) terhadap jumlah program studi', 'Wajib', '50', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:09:26.929', '2025-07-31 04:09:26.929', NULL, '2025', NULL, NULL),
('cmdqvnigp003ljjccz73rzu3i', 'cm6lgnm8c000xw6w36snmj53z', 'IKS-1.4', 'Jumlah penelitian per dosen per tahun', 'Wajib', '1', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:06.168', '2025-07-31 04:11:06.168', NULL, '2025', NULL, NULL),
('cmdqvnigt003njjcc0g2qd46b', 'cm6lgnm8c000xw6w36snmj53z', 'IKS-1.5', 'Persentase rata-rata penelitian dengan biaya luar negeri dosen tahun', 'Wajib', '10', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:06.168', '2025-07-31 04:11:06.168', NULL, '2025', NULL, NULL),
('cmdqvnigw003pjjcc313c7l76', 'cm6lgnm8c000xw6w36snmj53z', 'IKS-1.6', 'Jumlah pengabdian kepada masyarakat per dosen per tahun', 'Wajib', '1', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:06.168', '2025-07-31 04:11:06.168', NULL, '2025', NULL, NULL),
('cmdqvnih0003rjjccegld6646', 'cm6lgnm8c000xw6w36snmj53z', 'IKS-1.7', 'Persentase Rata-rata PkM dengan biaya luar negeri dosen tahun', 'Wajib', '5', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:06.168', '2025-07-31 04:11:06.168', NULL, '2025', NULL, NULL),
('cmdqvnih4003tjjcc23gme1ko', 'cm6lgnm8c000xw6w36snmj53z', 'IKS-1.8', 'Persentase kelulusan tepat waktu untuk setiap program angkatan', 'Wajib', '50', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:06.168', '2025-07-31 04:11:06.168', NULL, '2025', NULL, NULL),
('cmdqvnih7003vjjccckpl89sz', 'cm6lgnm8c000xw6w36snmj53z', 'IKS-1.9', 'Persentase keberhasilan studi untuk setiap program angkatan', 'Wajib', '90', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:06.168', '2025-07-31 04:11:06.168', NULL, '2025', NULL, NULL),
('cmdqvniha003xjjccg4wkiphj', 'cm6lgnm8c000xw6w36snmj53z', 'IKS-1.10', 'Persentase jumlah publikasi di jurnal internasional bereputasi terhadap jumlah dosen', 'Wajib', '10', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:06.168', '2025-07-31 04:11:06.168', NULL, '2025', NULL, NULL),
('cmdqvo1qx0040jjcct6jyatdw', 'cm6lgnm8c000xw6w36snmj53z', 'IKS-1.11', 'Persentase jumlah luaran paten atau paten sederhana hasil penelitian dan PkM terhadap jumlah dosen', 'Wajib', '17', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:31.160', '2025-07-31 04:11:31.160', NULL, '2025', NULL, NULL),
('cmdqvo1r10042jjccxrc0ifld', 'cm6lgnm8c000xw6w36snmj53z', 'IKS-1.12', 'Persentase jumlah luaran Hak Cipta hasil penelitian dan PkM terhadap jumlah dosen', 'Wajib', '20', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:31.160', '2025-07-31 04:11:31.160', NULL, '2025', NULL, NULL),
('cmdqvo1r30044jjccksn462lm', 'cm6lgnm8c000xw6w36snmj53z', 'IKS-1.13', 'Persentase jumlah luaran Teknologi Tepat Guna, Produk (Produk Terstandarisasi, Produk Tersertifikasi), Karya Seni, Rekayasa Sosial hasil penelitian dan PkM terhadap jumlah dosen.', 'Wajib', '15', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:31.160', '2025-07-31 04:11:31.160', NULL, '2025', NULL, NULL),
('cmdqvo1r70046jjccx57ld7wa', 'cm6lgnm8c000xw6w36snmj53z', 'IKS-1.14', 'Persentase jumlah luaran Buku ber-ISBN, Book Chapter hasil penelitian dan PkM terhadap jumlah dosen', 'Wajib', '10', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:31.160', '2025-07-31 04:11:31.160', NULL, '2025', NULL, NULL),
('cmdqvo1ra0048jjccbhkypooq', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.1', 'Persentase Rata-rata penelitian dengan biaya dalam negeri dosen tahun', 'Wajib', '10', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:31.160', '2025-07-31 04:11:31.160', NULL, '2025', NULL, NULL),
('cmdqvo1re004ajjccb0r5ynl3', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.2', 'Persentase Rata-rata PkM dengan biaya dalam negeri dosen tahun', 'Wajib', '10', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:31.160', '2025-07-31 04:11:31.160', NULL, '2025', NULL, NULL),
('cmdqvo1rg004cjjcczirvzh8d', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.3', 'Jumlah Bahan pustaka : buku teks dan e-book', 'Wajib', '400', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:31.160', '2025-07-31 04:11:31.160', NULL, '2025', NULL, NULL),
('cmdqvo1rj004ejjccepaxnug5', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.4', 'Jumlah koleksi jurnal internasional bereputasi dan jurnal nasional terindeks yang dimiliki termasuk ejournal (berlangganan) dalam tiga tahun terkahir dan dapat diakses', 'Wajib', '2', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:31.160', '2025-07-31 04:11:31.160', NULL, '2025', NULL, NULL),
('cmdqvo1rm004gjjcc9m08c11g', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.5', 'Jumlah koleksi prosiding yang dimiliki dalam tiga tahun terakhir', 'Wajib', '9', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:31.160', '2025-07-31 04:11:31.160', NULL, '2025', NULL, NULL),
('cmdqvo1rp004ijjcci1hsj4jb', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.6', 'Persentase jam pembelajaran yang dilaksanakan dalam bentuk praktikum, praktik studio, praktik bengkel, atau praktik lapangan terhadap total jam pembelajaran selama masa pendidikan', 'Wajib', '20', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:11:31.160', '2025-07-31 04:11:31.160', NULL, '2025', NULL, NULL),
('cmdqvpchn0058jjcc52tle0fz', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.7', 'Persentase integrasi kegiatan penelitian dan PkM dalam pembelajaran terhadap jumlah MK', 'Wajib', '> 50', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:12:31.738', '2025-07-31 04:12:31.738', NULL, '2025', NULL, NULL),
('cmdqvpchq005ajjcce615tnzp', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.8', 'Persentasae kepuasan Mahasiswa terhadap proses pembelajaran pada semua aspek', 'Wajib', '75', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:12:31.738', '2025-07-31 04:12:31.738', NULL, '2025', NULL, NULL),
('cmdqvpcht005cjjcczi8xc69w', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.9', 'Persentase kepuasan mahasiswa terhadap kinerja mengajar dosen, layanan administrasi akademik, dan kuantitas-kualitas fasilitas pendidikan.', 'Wajib', '75', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:12:31.738', '2025-07-31 04:12:31.738', NULL, '2025', NULL, NULL),
('cmdqvpchw005ejjccru9os8kk', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.10', 'Persentase jumlah judul penelitian dosen tetap yang dalam pelaksanaannya melibatkan mahasiswa program studi terhadap jumlah judul penelitian', 'Wajib', '75', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:12:31.738', '2025-07-31 04:12:31.738', NULL, '2025', NULL, NULL),
('cmdqvpchz005gjjcct9e2gy6k', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.11', 'Persentase penelitian dan PkM yang sesuai dengan roadmap visi keilmuan terhadap jumlah judul.', 'Wajib', '80', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:12:31.738', '2025-07-31 04:12:31.738', NULL, '2025', NULL, NULL),
('cmdqvpci2005ijjcclvok8mh0', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.12', 'Persentase jumlah judul PkM dosen tetap yang dalam pelaksanaannya melibatkan mahasiswa program studi terhadap jumlah judul PkM', 'Wajib', '75', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:12:31.738', '2025-07-31 04:12:31.738', NULL, '2025', NULL, NULL),
('cmdqvpci5005kjjccdji2zdsu', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.13', 'Rata-rata IPK mahasiswa', 'Wajib', '3.25', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:12:31.738', '2025-07-31 04:12:31.738', NULL, '2025', NULL, NULL),
('cmdqvpci8005mjjccde77sexj', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.14', 'Lama studi mahasiswa untuk setiap program dalam 3 tahun terakhir.', 'Wajib', '5', '10', '10', 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:12:31.738', '2025-08-02 06:27:24.984', NULL, '2025', NULL, NULL),
('cmdqvpcib005ojjcc55n2b3np', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.15', 'Persentase mahasiswa yang DO atau mengundurkan diri', 'Wajib', '<6', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:12:31.738', '2025-07-31 04:12:31.738', NULL, '2025', NULL, NULL),
('cmdqvpcie005qjjccf1dporbd', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.16', 'Persentase jumlah publikasi di seminar internasional terhadap jumlah dosen tetap', 'Wajib', '3.5', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:12:31.738', '2025-07-31 04:12:31.738', NULL, '2025', NULL, NULL),
('cmdqvs0sr005zjjccx2ty9no0', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.18', 'Persentase jumlah artikel karya ilmiah dosen tetap yang disitasi terhadap jumlah dosen', 'Wajib', '17', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:14:36.554', '2025-07-31 04:14:36.554', NULL, '2025', NULL, NULL),
('cmdqvs0su0061jjccmwcr1fyj', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.19', 'Persentase jumlah prodi yang memiliki kelengkapan dokumen penjaminan mutu sampai dengan RTL AMI terhadap jumlah prodi', 'Wajib', '100', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:14:36.554', '2025-07-31 04:14:36.554', NULL, '2025', NULL, NULL),
('cmdqvs0sx0063jjccrzeeuhuc', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.20', 'Persentase jumlah publikasi di seminar media massa internasional terhadap jumlah dosen', 'Wajib', '5', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:14:36.554', '2025-07-31 04:14:36.554', NULL, '2025', NULL, NULL),
('cmdqvs0t10065jjcczus6sdhn', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.21', 'Akreditasi sertifikasi internasional bereputasi tingkat PT Fakultas', 'Wajib', '2', NULL, NULL, 1, 'cmdquitah000014ielkuvs4j2', NULL, '2025-07-31 04:14:36.554', '2025-07-31 04:14:36.554', NULL, '2025', NULL, NULL),
('cmdqvs0t50067jjcc2eeyslud', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.22', 'Akreditasi sertifikasi nasional bereputasi (selain BAN-PT dan LAM) tingkat unit (laboratorium, perpustakaan, dll)', 'Wajib', '4', NULL, NULL, 1, 'cmdquitah000014ielkuvs4j2', NULL, '2025-07-31 04:14:36.554', '2025-07-31 04:14:36.554', NULL, '2025', NULL, NULL),
('cmdqvs0t80069jjcc59f05eyd', 'cm6lgnm8c000xw6w36snmj53z', 'IKU-1.23', 'Persentase perolehan status terakreditasi program studi Baik sekali oleh BAN-PT atau lembaga akreditasi mandiri (LAM) terhadap jumlah program studi', 'Wajib', '50', NULL, NULL, 1, 'cmdquitah000014ielkuvs4j2', NULL, '2025-07-31 04:14:36.554', '2025-07-31 04:14:36.554', NULL, '2025', NULL, NULL),
('cmdqvs0tc006bjjccx55kw3yi', 'cm6lgnm8c000xw6w36snmj53z', 'IKT-1.1', 'Persentase unit kerja memiliki sertifikat ISO', 'Wajib', '100', NULL, NULL, 1, 'cmdquitah000014ielkuvs4j2', NULL, '2025-07-31 04:14:36.554', '2025-07-31 04:14:36.554', NULL, '2025', NULL, NULL),
('cmdqvs0te006djjcc5oo85kb8', 'cm6lgnm8c000xw6w36snmj53z', 'IKT-1.2', 'Rangking UMPO pada pemeringkatan internasional (ASIA)', 'Wajib', 'Terdaftar', NULL, NULL, 1, 'cmdquitah000014ielkuvs4j2', NULL, '2025-07-31 04:14:36.554', '2025-07-31 04:14:36.554', NULL, '2025', NULL, NULL),
('cmdqvs0ti006fjjccrxyb2i1t', 'cm6lgnm8c000xw6w36snmj53z', 'IKT-1.3', 'Klasterisasi Penelitian dan Pengabdian kepada Masyarakat', 'Wajib', 'mandiri', NULL, NULL, 1, 'cmdquitah000014ielkuvs4j2', NULL, '2025-07-31 04:14:36.554', '2025-07-31 04:14:36.554', NULL, '2025', NULL, NULL),
('cmdqvsz74006ijjccyvcyj6nf', 'cm6lgnm8c000xw6w36snmj53z', 'IKT-1.4', 'Persentase jurnal ilmiah UMPO terakreditasi minimal sinta 2 terhadap jumlah total', 'Wajib', '50', NULL, NULL, 1, 'cmdquitah000014ielkuvs4j2', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz79006kjjcc3v76odt0', 'cm6lgnm8c000xw6w36snmj53z', 'IKT-1.5', 'Pengembangan prodi baru dalam satu periode', 'Wajib', '2', NULL, NULL, 1, 'cmdquitah000014ielkuvs4j2', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz7d006mjjccshtha4w8', 'cm6lgnm8c000xw6w36snmj53z', 'IKT-1.6', 'Persentase Satker atau Fakultas yang mengikuti Audit Internal Non Akademik bidang keuangan', 'Wajib', '100', NULL, NULL, 1, 'cmdquitah000014ielkuvs4j2', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz7g006ojjcc1em5ouhf', 'cm6lgnm8c000xw6w36snmj53z', 'IKT-1.7', 'Program \"Pitulasan\" untuk meningkatkan suasana akademik secara daring', 'Wajib', '1', NULL, NULL, 1, 'cmdquitah000014ielkuvs4j2', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz7k006qjjccq4vh2fq1', 'cm6lgo51s000zw6w34e6ewtif', 'IKS-2.1', 'Persentase dosen tetap yang berpendidikan S-3 yang bidang keahliannya sesuai dengan kompetensi PS (Tahap Akademik dan Profesi).', 'Wajib', '50', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz7o006sjjccgbli9m3r', 'cm6lgo51s000zw6w34e6ewtif', 'IKS-2.2', 'Persentase jumlah dosen yang memiliki jabatan fungsional Guru Besar terhadap jumlah seluruh dosen tetap.', 'Wajib', '15', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz7r006ujjccja9jbkx1', 'cm6lgo51s000zw6w34e6ewtif', 'IKS-2.3', 'Persentase jumlah dosen yang memiliki jabatan fungsional Lektor Kepala terhadap jumlah seluruh dosen tetap.', 'Wajib', '50', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz7v006wjjcc9chchaun', 'cm6lgo51s000zw6w34e6ewtif', 'IKS-2.4', 'Rasio jumlah mahasiswa terhadap jumlah dosen tetap.', 'Wajib', 'sainstek 15-25 soshum 25-35', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz7z006yjjcc9o456qhh', 'cm6lgo51s000zw6w34e6ewtif', 'IKS-2.5', 'Persentase kualifikasi tenaga kependidikan bersertifikat kompetensi tertentu sesuai bidang tugasnya terhadap jumlah total.', 'Wajib', '100', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz820070jjccqp53sxa7', 'cm6lgo51s000zw6w34e6ewtif', 'IKS-2.6', 'Persentase perolehan dana perguruan tinggi yang bersumber selain dari mahasiswa dan kementerian lembaga terhadap total perolehan dana perguruan tinggi.', 'Wajib', '10', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz870072jjccj7lb30hs', 'cm6lgo51s000zw6w34e6ewtif', 'IKS-2.7', 'Modernisasi pengelolaan keuangan (per tahun)', 'Wajib', 'sistem informasi anggaran dan sistem informasi akuntansi dengan analisis laporan', NULL, NULL, 1, 'cmdquitah000014ielkuvs4j2', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz8a0074jjccyz8uzfca', 'cm6lgo51s000zw6w34e6ewtif', 'IKS-2.8', 'Pemeriksaan oleh auditor keuangan eksternal', 'Wajib', 'WTP', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz8e0076jjcc45j6adym', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.1', 'Jumlah dosen tetap yang memenuhi persyaratan dosen terhadap jumlah program studi', 'Wajib', '10', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz8i0078jjcclk01jf16', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.2', 'Jumlah dosen tetap dalam program studi yang diakreditasi', 'Wajib', '12', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz8l007ajjccvhq3pnl2', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.3', 'Beban Kerja dalam satu tahun terakhir memungkinkan dosen bekerja secara maksimal.', 'Wajib', '1480550400000', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz8p007cjjccynnxfdv1', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.4', 'Persentase jumlah dosen yang memiliki sertifikat pendidik profesional  sertifikat profesi terhadap jumlah seluruh dosen tetap.', 'Wajib', '80', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz8t007ejjcc1tm12qlm', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.5', 'Persentase jumlah dosen tidak tetap terhadap jumlah seluruh dosen (dosen tetap dan dosen tidak tetap).', 'Wajib', '<10', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz8y007gjjcch6ytm2lr', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.6', 'Penugasan dosen tetap sebagai pembimbing utama tugas akhir mahasiswa', 'Wajib', '<6', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz92007ijjcc7n42vk6l', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.7', 'Ekuivalensi waktu mengajar penuh dosen tetap', 'Wajib', '1480550400000', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz97007kjjccpjrnmtoe', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.8', 'Persentase pengakuan rekognisi atas kepakaran prestasi kinerja dosen tetap terhadap jumlah dosen tetap', 'Wajib', '50', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz9b007mjjcc1mblvfhj', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.9', 'Jumlah kegiatan dosen sebagai penyaji dalam seminar ilmiah  lokakarya  penataran  pameran yang tidak hanya melibatkan dosen UMPO', 'Wajib', '4', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz9g007ojjcc9sla6lpu', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.10', 'Persentase dosen yang mengikuti pengembangan Kompetensi  yang relevan dalam tiga tahun terakhir terhadap jumlah dosen', 'Wajib', '80', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz9k007qjjccm5803dj3', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.11', 'Persentase rata-rata jumlah pengakuan atas prestasi  kinerja dosen terhadap jumlah dosen tetap tahun', 'Wajib', '25', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz9p007sjjcc36eubfxz', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.12', 'Persentase perolehan dana yang bersumber dari mahasiswa terhadap total perolehan dana perguruan tinggi.', 'Wajib', '<75', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz9t007ujjccjfbavt62', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.13', 'Rata-rata dana operasional proses pembelajaran  mahasiswa  tahun.', 'Wajib', '20', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsz9y007wjjccz2cda31c', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.14', 'Rata-rata dana penelitian dosen  tahun.', 'Wajib', '20', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsza2007yjjccvwmgce01', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.15', 'Rata-rata dana PkM dosen  tahun.', 'Wajib', '5', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsza60080jjccliembe0q', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.16', 'Persentase penggunaan dana penelitian terhadap total dana perguruan tinggi', 'Wajib', '5', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszac0082jjccd7uwss4t', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.17', 'Persentase penggunaan dana PkM terhadap total dana perguruan tinggi.', 'Wajib', '1', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszag0084jjccg41wto9b', 'cm6lgo51s000zw6w34e6ewtif', 'IKU-2.18', 'Prestasi dalam mendapatkan hibah tingkat internasional selama tiga tahun terakhir', 'Wajib', '2', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszaj0086jjccrbib1l16', 'cm6lgo51s000zw6w34e6ewtif', 'IKT-2.1', 'Jumlah pengembangan unit usaha kampus', 'Wajib', '4', NULL, NULL, 1, 'cmdquitah000014ielkuvs4j2', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszan0088jjccb55b3754', 'cm6lgo51s000zw6w34e6ewtif', 'IKT-2.2', 'Pengembangan Pusat Uji Kompetensi Profesi', 'Wajib', '1', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszaq008ajjcc95xr0ojl', 'cm6lgo51s000zw6w34e6ewtif', 'IKT- 2.3', 'Pengembangan Riset dan Hilirisasi budaya lokal', 'Wajib', '3', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszau008cjjcc6zgbe2ik', 'cm6lgo9vf0011w6w36tstk84h', 'IKS-3.1', 'Lama waktu tunggu lulusan program utama di perguruan tinggi untuk mendapatkan pekerjaan pertama', 'Wajib', '<3', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszax008ejjccokhmmemt', 'cm6lgo9vf0011w6w36tstk84h', 'IKS-3.2', 'Persentase jumlah lulusan yang bekerja di badan usaha tingkat internasional multinasional terhadap jumlah lulusan yang sudah bekerja', 'Wajib', '5', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszb1008gjjccpwngklz7', 'cm6lgo9vf0011w6w36tstk84h', 'IKS-3.3', 'Persentase jumlah mahasiswa asing terhadap jumlah seluruh mahasiswa dalam 3 tahun terakhir', 'Wajib', '1', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszb4008ijjcch4vsp6r5', 'cm6lgo9vf0011w6w36tstk84h', 'IKS-3.4', 'Persentase prestasi akademik mahasiswa di tingkat internasional terhadap jumlah mahasiswa aktif', 'Wajib', '1', '10', '10', 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-08-08 07:11:15.590', NULL, '2025', NULL, NULL),
('cmdqvszb6008kjjcc4uu37bd9', 'cm6lgo9vf0011w6w36tstk84h', 'IKS-3.5', 'Persentase prestasi non akademik mahasiswa di tingkat internasional terhadap jumlah mahasiswa', 'Wajib', '0.2', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszb9008mjjccz6d80n0u', 'cm6lgo9vf0011w6w36tstk84h', 'IKS-3.6', 'Persentase publikasi ilmiah mahasiswa di jurnal internasional bereputasi terhadap jumlah mahasiswa aktif', 'Wajib', '3.34', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszbc008ojjcc6ualow3p', 'cm6lgo9vf0011w6w36tstk84h', 'IKS-3.7', 'Persentase kenaikan jumlah mahasiswa baru per tahun', 'Wajib', '5', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszbf008qjjcc8fsvnxmf', 'cm6lgo9vf0011w6w36tstk84h', 'IKS-3.8', 'Persentase pegawai aktif di persyarikatan', 'Wajib', '100', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszbi008sjjcclhohyrm2', 'cm6lgo9vf0011w6w36tstk84h', 'IKS-3.9', 'Persentase jumlah penelitian dan pengabdian di persyarikatan terhadap jumlah dosen', 'Wajib', '30', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszbl008ujjccv74wyne3', 'cm6lgo9vf0011w6w36tstk84h', 'IKS-3.10', 'Persentase mata kuliah yang telah menginternalisasikan AIK dalam pembelajaran', 'Wajib', '75', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszbp008wjjccscq41ugg', 'cm6lgo9vf0011w6w36tstk84h', 'IKS-3.11', 'Persentase lulusan yang mendapatkan nilai Baca Tulis Al-Quran minimal A', 'Wajib', '51', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszbs008yjjcc2aa7bted', 'cm6lgo9vf0011w6w36tstk84h', 'IKS-3.12', 'Persentase lulusan yang mendapatkan nilai Ibadah Praktis minimal A', 'Wajib', '75', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszbv0090jjccq974kjtn', 'cm6lgo9vf0011w6w36tstk84h', 'IKS-3.13', 'Persentase tingkat kepuasan pengguna lulusan dinilai \"sangat baik\" di setiap komponen', 'Wajib', '92', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszby0092jjccy79c3vss', 'cm6lgo9vf0011w6w36tstk84h', 'IKS-3.14', 'Persentase kerjasama internasional perguruan tinggi di bidang pendidikan penelitian, dan PkM dalam 3 tahun terakhir terhadap jumlah dosen', 'Wajib', '2', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszc20094jjccz2tcp1sm', 'cm6lgo9vf0011w6w36tstk84h', 'IKU-3.1', 'Persentase jumlah lulusan yang bekerja dan studi lanjut', 'Wajib', '80', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszc40096jjcc1znzrgae', 'cm6lgo9vf0011w6w36tstk84h', 'IKU-3.2', 'Persentase kesesuaian bidang kerja lulusan dari program utama di perguruan tinggi terhadap kompetensi bidang studi.', 'Wajib', '80', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszc70098jjccry2m0teo', 'cm6lgo9vf0011w6w36tstk84h', 'IKU 3.3', 'Persentase kerjasama nasional perguruan tinggi di bidang pendidikan penelitian, dan PkM dalam 3 tahun terakhir terhadap jumlah dosen', 'Wajib', '6', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszca009ajjccapp348w6', 'cm6lgo9vf0011w6w36tstk84h', 'IKU-3.4', 'Persentase jumlah lulusan yang bekerja di badan usaha tingkat nasional berwirausaha terhadap jumlah lulusan yang sudah bekerja', 'Wajib', '20', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszce009cjjcc8v46pps8', 'cm6lgo9vf0011w6w36tstk84h', 'IKU-3.5', 'Kesesuaian bidang kerja lulusan saat mendapatkan pekerjaan pertama dalam 3 tahun', 'Wajib', '60', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszch009ejjccvstm4mar', 'cm6lgo9vf0011w6w36tstk84h', 'IKU-3.6', 'Persentase jumlah pendaftar terhadap jumlah pendaftar yang lulus seleksi pada program utama', 'Wajib', '300', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszcm009gjjccy20klf6u', 'cm6lgo9vf0011w6w36tstk84h', 'IKU-3.7', 'Rasio metoda Rekrutmen dan keketatan seleksi mahasiswa', 'Wajib', '5', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszcp009ijjccgzb7vyca', 'cm6lgo9vf0011w6w36tstk84h', 'IKU-3.8', 'Rasio calon mahasiswa yang ikut seleksi terhadap daya tampung dalam lima tahun terakhir (TahapAkademik) pada program studi.', 'Wajib', '500', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszct009kjjccm70cqul2', 'cm6lgo9vf0011w6w36tstk84h', 'IKU-3.9', 'Persentase jumlah mahasiswa yang mendaftar ulang terhadap jumlah pendaftar yang lulus seleksi pada program utama.', 'Wajib', '95', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszcx009mjjcc9e0hylem', 'cm6lgo9vf0011w6w36tstk84h', 'IKU-3.10', 'Rasio total mahasiswa baru terhadap total mahasiswa pada program studi.', 'Wajib', '18', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszd0009ojjcc9iib5w8l', 'cm6lgo9vf0011w6w36tstk84h', 'IKU-3.11', 'Jumlah prestasi akademik mahasiswa di tingkat nasional terhadap jumlah mahasiswa aktif', 'Wajib', '1', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszd4009qjjcc2okpnxlq', 'cm6lgo9vf0011w6w36tstk84h', 'IKU-3.12', 'Jumlah prestasi non akademik mahasiswa di tingkat nasional terhadap jumlah mahasiswa', 'Wajib', '2', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszd7009sjjccf330xhi4', 'cm6lgo9vf0011w6w36tstk84h', 'IKU-3.13', 'Persentase publikasi ilmiah mahasiswa di seminar internasional terhadap jumlah mahasiswa aktif', 'Wajib', '1', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszdb009ujjccesu98900', 'cm6lgo9vf0011w6w36tstk84h', 'IKU-3.14', 'Persentase publikasi ilmiah mahasiswa di media massa internasional bereputasi terhadap jumlah mahasiswa aktif', 'Wajib', '1', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszdf009wjjcc6v40uwvu', 'cm6lgo9vf0011w6w36tstk84h', 'IKU-3.15', 'Luaran penelitian dan PkM yang dihasilkan mahasiswa, baik secara mandiri atau bersama dosen dalam 3 tahun terakhir', 'Wajib', '25', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszdk009yjjcce0j5er6i', 'cm6lgo9vf0011w6w36tstk84h', 'IKT-3.1', 'Memiliki jumlah kerjasama AUM dalam bidang pendidikan', 'Wajib', '1', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszdn00a0jjccaffytp7y', 'cm6lgo9vf0011w6w36tstk84h', 'IKT-3.2', 'Memiliki jumlah kerjasama AUM dalam bidang penelitian', 'Wajib', '1', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszdr00a2jjccmnvmyf4n', 'cm6lgo9vf0011w6w36tstk84h', 'IKT-3.3', 'Memiliki jumlah kerjasama AUM dalam bidang PkM', 'Wajib', '1', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszdu00a4jjcco85ki6bz', 'cm6lgo9vf0011w6w36tstk84h', 'IKT-3.4', 'Persentase tugas akhir mahasiswa yang menghasilkan produk inovasi (yang tersertifikasi HKI dan berpotensi komersialisasi) terhadap mahasiswa aktif', 'Wajib', '10', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszdx00a6jjcclxcsb4ea', 'cm6lgo9vf0011w6w36tstk84h', 'IKT-3.5', 'Persentase dosen yang lulus darul arqom', 'Wajib', '100', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsze000a8jjccj1wz8koh', 'cm6lgo9vf0011w6w36tstk84h', 'IKT-3.6', 'Struktur kurikulum prodi memuat Mata Kuliah penciri khusus Perguruan  Tinggi Muhammadiyah', 'Wajib', '>90', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsze300aajjccyk6k7joa', 'cm6lgo9vf0011w6w36tstk84h', 'IKT-3.7', 'Persentase penelitian dosen yang Materi penelitian mencakup materi kajian khusus yang terintegrasi dengan AIK', 'Wajib', '50', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvsze700acjjccb3476ob3', 'cm6lgo9vf0011w6w36tstk84h', 'IKT-3.8', 'Persentase pengabdian kepada masyarakat dosen yang Materi pengabdian kepada masyarakat mencakup materi kajian khusus yang terintegrasi dengan AIK', 'Wajib', '50', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL),
('cmdqvszea00aejjccf4gqzjm8', 'cm6lgo9vf0011w6w36tstk84h', 'IKT-3.9', 'Persentase lulusan yang hafal Al-Quran minimal 1 juz', 'Wajib', '25', NULL, NULL, 1, 'cm6lgf1ng0000w6w35eienond', NULL, '2025-07-31 04:15:21.136', '2025-07-31 04:15:21.136', NULL, '2025', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `jadwal`
--

CREATE TABLE `jadwal` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `startDate` datetime(3) DEFAULT NULL,
  `endDate` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `tahun` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jadwal`
--

INSERT INTO `jadwal` (`id`, `unit_id`, `name`, `startDate`, `endDate`, `createdAt`, `updatedAt`, `tahun`) VALUES
('cm7e8c8s00001k78movww6661', 'cm6lgg7qi0007w6w3ndsjsk42', 'penyusunan', '2025-08-07 17:00:00.000', '2025-08-14 17:00:00.000', '2025-02-21 03:47:01.100', '2025-08-09 00:37:26.321', '2025'),
('cm7e98hba0003d38v926g6mc8', 'cm6lgk4ng000jw6w3lbhbqi84', 'penyusunan', '2025-08-07 17:00:00.000', '2025-08-14 17:00:00.000', '2025-02-21 04:12:05.158', '2025-08-09 00:37:26.322', '2025'),
('cmb64msj400056xjyf9kw0b98', 'cm6lgfo3y0003w6w3ml9x6e8l', 'penyusunan', '2025-08-07 17:00:00.000', '2025-08-14 17:00:00.000', '2025-05-27 06:19:54.730', '2025-08-09 00:37:26.322', '2025'),
('cmdr00oil00aqjjcc6i26tlfk', 'cmdqvuk2z00agjjccx4f0tuox', 'penyusunan', '2025-08-07 17:00:00.000', '2025-08-14 17:00:00.000', '2025-07-31 06:13:19.003', '2025-08-09 00:37:26.322', '2025');

-- --------------------------------------------------------

--
-- Table structure for table `jadwal_laporan`
--

CREATE TABLE `jadwal_laporan` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `startDate` datetime(3) DEFAULT NULL,
  `endDate` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jadwal_pencairan`
--

CREATE TABLE `jadwal_pencairan` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batas_kegiatan` int DEFAULT NULL,
  `tunggakan_spj` int DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `tahun` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jadwal_pencairan`
--

INSERT INTO `jadwal_pencairan` (`id`, `unit_id`, `batas_kegiatan`, `tunggakan_spj`, `createdAt`, `updatedAt`, `tahun`) VALUES
('cm89lacz7001l117xcoeyf235', 'cm6lgg7qi0007w6w3ndsjsk42', 5, 5, '2025-03-15 02:30:19.698', '2025-07-31 07:52:52.806', '2025');

-- --------------------------------------------------------

--
-- Table structure for table `jenis_rekening`
--

CREATE TABLE `jenis_rekening` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jenis_rekening`
--

INSERT INTO `jenis_rekening` (`id`, `code`, `name`, `created_at`, `updated_at`) VALUES
('cme2gxlka0011bytybi6qdwkh', '01', 'Belanja', '2025-08-08 06:52:16.603', '2025-08-08 06:52:16.603'),
('cme3ii1wh0000twcwld0zijtn', '02', 'Pendapatan', '2025-08-09 00:23:56.705', '2025-08-09 00:23:56.705');

-- --------------------------------------------------------

--
-- Table structure for table `laporan`
--

CREATE TABLE `laporan` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `capaian` int DEFAULT '0',
  `capaian_auditor` int DEFAULT '0',
  `indikator_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_approved` tinyint(1) NOT NULL DEFAULT '0',
  `kendala` text COLLATE utf8mb4_unicode_ci,
  `komentar` text COLLATE utf8mb4_unicode_ci,
  `perbaikan` text COLLATE utf8mb4_unicode_ci,
  `pic` text COLLATE utf8mb4_unicode_ci,
  `rtl` text COLLATE utf8mb4_unicode_ci,
  `rtl_auditor` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `laporan`
--

INSERT INTO `laporan` (`id`, `createdAt`, `updatedAt`, `capaian`, `capaian_auditor`, `indikator_id`, `is_approved`, `kendala`, `komentar`, `perbaikan`, `pic`, `rtl`, `rtl_auditor`) VALUES
('cmdr4w65300cjjjccnn6vvrxe', '2025-07-31 08:29:46.646', '2025-07-31 08:30:58.247', 2, 0, 'cmdqvpci8005mjjccde77sexj', 0, 'Inisiatif mahasiswa masih kurang', NULL, 'Prodi akan melakukan Camp Intensif ', 'Alam nurcahya', 'Perlu dilakukan screening disetiap awal ajaran baru', NULL),
('cme2ho596002gbytytgo3lts8', '2025-08-08 07:12:55.193', '2025-08-08 07:12:55.193', 7, 0, 'cmdqvszb4008ijjcch4vsp6r5', 0, 'tidak ada kendala', NULL, 'tidak ada', 'miss MS', 'tanya BPM', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `mata_anggaran`
--

CREATE TABLE `mata_anggaran` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ma_code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `indicator_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `created_by_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mata_anggaran`
--

INSERT INTO `mata_anggaran` (`id`, `ma_code`, `name`, `indicator_id`, `created_at`, `updated_at`, `created_by_id`) VALUES
('cmdr0yeqm00atjjccrqt2mckx', 'IKU-1.14.01', 'Workshop Penulisan Tugas akhir bagi mahasiswa semester akhir', 'cmdqvpci8005mjjccde77sexj', '2025-07-31 06:39:32.617', '2025-07-31 06:39:32.617', 'cm6la9qqg0001hge8l5hdxg60'),
('cmdr0zy2v00awjjccrkz32whj', 'IKU-1.14.02', 'Camp Pendampingan Penulisan Ilmiah', 'cmdqvpci8005mjjccde77sexj', '2025-07-31 06:40:44.352', '2025-07-31 06:40:44.352', 'cm6la9qqg0001hge8l5hdxg60'),
('cme2go1zf000xbytynk5kfwco', 'IKS-3.4.01', 'Bimbingan Teknis submit lomba internasional', 'cmdqvszb4008ijjcch4vsp6r5', '2025-08-08 06:44:51.316', '2025-08-08 06:44:51.316', 'cm6lglfmp000nw6w3la68c1tb');

-- --------------------------------------------------------

--
-- Table structure for table `pagu_anggaran`
--

CREATE TABLE `pagu_anggaran` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pagu` int NOT NULL,
  `terpakai` int DEFAULT '0',
  `unit_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `tahun` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pagu_anggaran`
--

INSERT INTO `pagu_anggaran` (`id`, `pagu`, `terpakai`, `unit_id`, `createdAt`, `updatedAt`, `tahun`) VALUES
('cm7edu4ez000bptw24n8w7j9u', 10000000, 0, 'cm6lgg7qi0007w6w3ndsjsk42', '2025-02-21 06:20:53.339', '2025-02-21 06:20:53.339', '2025'),
('cmdr13hd900ayjjcc33jffxyv', 1000000, 0, 'cm6lgk4ng000jw6w3lbhbqi84', '2025-07-31 06:43:29.326', '2025-07-31 06:43:29.326', '2025');

-- --------------------------------------------------------

--
-- Table structure for table `pembelian`
--

CREATE TABLE `pembelian` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rekening_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `proker_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pagu_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uraian` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `satuan` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nilai_satuan` int NOT NULL,
  `kuantitas` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jumlah` int NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pembelian`
--

INSERT INTO `pembelian` (`id`, `rekening_id`, `proker_id`, `pagu_id`, `uraian`, `satuan`, `nilai_satuan`, `kuantitas`, `jumlah`, `created_at`, `updated_at`) VALUES
('cme2h1es60016bytybeiljrg5', 'cme2gyhjf0014byty0d06wfjb', 'cme2gvi0d000zbyty80puf21a', 'cm7edu4ez000bptw24n8w7j9u', 'Hr Narasumber', 'orang', 5000000, '1', 5000000, '2025-08-08 06:55:14.454', '2025-08-08 06:55:14.454');

-- --------------------------------------------------------

--
-- Table structure for table `periode_spmu`
--

CREATE TABLE `periode_spmu` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jadwal_pencairan_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `periode` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date_pengajuan` datetime(3) DEFAULT NULL,
  `end_date_pengajuan` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `periode_spmu`
--

INSERT INTO `periode_spmu` (`id`, `jadwal_pencairan_id`, `periode`, `start_date_pengajuan`, `end_date_pengajuan`, `createdAt`, `updatedAt`) VALUES
('cm89lacz8001m117xgm6xhljc', 'cm89lacz7001l117xcoeyf235', 'Jumat, 21 Mar 2025', '2025-03-13 17:00:00.000', '2025-03-20 17:00:00.000', '2025-03-15 02:30:19.698', '2025-03-15 02:30:19.698');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `description`) VALUES
('cm6la9qr00002hge83klib3dg', 'ADMIN_PERENCANAAN', NULL),
('cm6la9qr30003hge8n27gsfas', 'PIMPINAN_UNIT', NULL),
('cm6la9qr30004hge83bj08w7b', 'ASSESOR_AUDIT', NULL),
('cm6la9qr40005hge8kritmu9g', 'ADMIN_UNIT', NULL),
('cm6la9qr40006hge84c9x31np', 'ADMIN_KEUANGAN', NULL),
('cm6la9qr50007hge8wv0e4szv', 'REVIEWER', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `progres_spj`
--

CREATE TABLE `progres_spj` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status_kegiatan` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `persen_kegiatan` int DEFAULT NULL,
  `uraian_kegiatan` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `realisasi_output_kegiatan` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status_diperbaiki` tinyint(1) DEFAULT '1',
  `status_penilaian_bpm` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `persen_penilaian_bpm` int DEFAULT NULL,
  `uraian_penilaian_bpm` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `realisasi_output_bpm` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status_aproval_bpm` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `proker_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `progres_spj`
--

INSERT INTO `progres_spj` (`id`, `status_kegiatan`, `persen_kegiatan`, `uraian_kegiatan`, `realisasi_output_kegiatan`, `status_diperbaiki`, `status_penilaian_bpm`, `persen_penilaian_bpm`, `uraian_penilaian_bpm`, `realisasi_output_bpm`, `status_aproval_bpm`, `createdAt`, `proker_id`, `updatedAt`) VALUES
('cmdr454on00c7jjccvk96vndw', 'selesai', 100, 'Workshop sudah diselenggarakan', 'Laporan Kegiatan', 1, NULL, NULL, NULL, NULL, NULL, '2025-07-31 08:08:45.045', 'cmdr1oqih00b0jjccf02yj5af', '2025-07-31 08:08:45.045');

-- --------------------------------------------------------

--
-- Table structure for table `rekening`
--

CREATE TABLE `rekening` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_rek` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jenis_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rekening`
--

INSERT INTO `rekening` (`id`, `no_rek`, `name`, `jenis_id`, `created_at`, `updated_at`) VALUES
('cme2gyhjf0014byty0d06wfjb', '01.01', 'Honorarium', 'cme2gxlka0011bytybi6qdwkh', '2025-08-08 06:52:58.043', '2025-08-08 06:52:58.043'),
('cme3ixjjp0001tw3kcdp6836y', '5', 'Belanja', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.412', '2025-08-09 00:35:59.412'),
('cme3ixjk30003tw3kybevkn6h', '5.01', 'Belanja Pegawai Personalia', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.428', '2025-08-09 00:35:59.428'),
('cme3ixjk80005tw3kx26c0s3z', '05.01.01', 'Gaji dan Tunjangan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.432', '2025-08-09 00:35:59.432'),
('cme3ixjkb0007tw3kwhvjclaa', '05.01.01.01', 'Gaji Pokok', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.436', '2025-08-09 00:35:59.436'),
('cme3ixjkf0009tw3ka0cp3nzp', '05.01.01.01.01', 'Gaji Pokok Dosen Pegawai dari Dalam Negeri', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.440', '2025-08-09 00:35:59.440'),
('cme3ixjkj000btw3kaqgxydyo', '05.01.01.01.02', 'Gaji Pokok Dosen Pegawai dari Luar Negeri', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.443', '2025-08-09 00:35:59.443'),
('cme3ixjkn000dtw3kqakw2bb2', '05.01.01.02', 'Tunjangan Struktural', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.447', '2025-08-09 00:35:59.447'),
('cme3ixjkr000ftw3kyo52rqwt', '05.01.01.02.01', 'Tunjangan Struktural Dosen Pegawai dari Dalam Negeri', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.452', '2025-08-09 00:35:59.452'),
('cme3ixjkv000htw3kj2nuglby', '05.01.01.02.02', 'Tunjangan Struktural Dosen Pegawai dari Luar Negeri', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.456', '2025-08-09 00:35:59.456'),
('cme3ixjl0000jtw3kb6zipo5h', '05.01.01.03', 'Tunjangan Fungsional', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.460', '2025-08-09 00:35:59.460'),
('cme3ixjl3000ltw3k019gfph8', '05.01.01.03.01', 'Tunjangan Fungsional Dosen Pegawai dari Dalam Negeri', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.463', '2025-08-09 00:35:59.463'),
('cme3ixjl6000ntw3ke24se7q4', '05.01.01.03.02', 'Tunjangan Fungsional Dosen Pegawai dari Luar Negeri', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.466', '2025-08-09 00:35:59.466'),
('cme3ixjl9000ptw3kxb2to0gq', '05.01.01.04', 'Tunjangan Keluarga', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.469', '2025-08-09 00:35:59.469'),
('cme3ixjlc000rtw3kjq9v896d', '05.01.01.05', 'Tunjangan Kesejahteraan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.472', '2025-08-09 00:35:59.472'),
('cme3ixjlg000ttw3krt7iqqzj', '05.01.01.06', 'Tunjangan Beras', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.476', '2025-08-09 00:35:59.476'),
('cme3ixjlk000vtw3kawiekv5m', '05.01.02', 'Honorarium Upah', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.480', '2025-08-09 00:35:59.480'),
('cme3ixjln000xtw3k40r0ph9s', '05.01.02.01', 'Honorarium Kepanitiaan Tim', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.483', '2025-08-09 00:35:59.483'),
('cme3ixjlq000ztw3kcudx48uo', '05.01.02.05', 'Honorarium Mengajar', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.487', '2025-08-09 00:35:59.487'),
('cme3ixjlt0011tw3k32lhuzvd', '05.01.02.06', 'Honorarium Kegiatan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.490', '2025-08-09 00:35:59.490'),
('cme3ixjlw0013tw3k2ii45dtt', '05.01.02.07', 'Honorarium Non Pegawai', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.493', '2025-08-09 00:35:59.493'),
('cme3ixjm00015tw3knbq7lhh8', '05.01.02.08', 'Honorarium Peserta Kegiatan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.496', '2025-08-09 00:35:59.496'),
('cme3ixjm40017tw3kv54jqvib', '05.01.03', 'Uang Lembur', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.500', '2025-08-09 00:35:59.500'),
('cme3ixjm70019tw3kiim8kiax', '05.01.03.05', 'Uang Lembur Pegawai', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.504', '2025-08-09 00:35:59.504'),
('cme3ixjmb001btw3kw4q82dxr', '05.01.03.06', 'Uang Lembur Non Pegawai', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.507', '2025-08-09 00:35:59.507'),
('cme3ixjmd001dtw3k2tez7dc1', '05.01.04', 'Insentif', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.510', '2025-08-09 00:35:59.510'),
('cme3ixjmi001ftw3k8879dglq', '05.01.04.01', 'Insentif Pegawai', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.514', '2025-08-09 00:35:59.514'),
('cme3ixjmk001htw3kqt1ajluh', '05.01.04.02', 'Insentif Non Pegawai', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.517', '2025-08-09 00:35:59.517'),
('cme3ixjmo001jtw3kcvli24p3', '5.02', 'Belanja Barang dan Jasa', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.520', '2025-08-09 00:35:59.520'),
('cme3ixjmr001ltw3k10as6i0e', '05.02.01', 'Belanja Bahan Habis Pakai Kantor', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.523', '2025-08-09 00:35:59.523'),
('cme3ixjmu001ntw3ki5jxyvw1', '05.02.01.02', 'Biaya Alat Tulis', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.526', '2025-08-09 00:35:59.526'),
('cme3ixjmx001ptw3klzsmah64', '05.02.01.03', 'Biaya Perangko, Materai, dan Benda Pos Lainnya', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.530', '2025-08-09 00:35:59.530'),
('cme3ixjn0001rtw3k5vacl12v', '05.02.01.04', 'Balanja Peralatan Kebersihan dan Bahan Pembersih', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.533', '2025-08-09 00:35:59.533'),
('cme3ixjn4001ttw3kuz9k8swn', '05.02.01.05', 'Biaya Pengisian Tabung Pemadam Kebakaran', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.536', '2025-08-09 00:35:59.536'),
('cme3ixjn7001vtw3kha2yue0r', '05.02.01.06', 'Biaya Gas', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.539', '2025-08-09 00:35:59.539'),
('cme3ixjna001xtw3kefdqvumd', '05.02.01.07', 'Biaya Bahan Habis Pakai', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.542', '2025-08-09 00:35:59.542'),
('cme3ixjnd001ztw3kvv0y1dx5', '05.02.02', 'Biaya Operasional Kantor', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.545', '2025-08-09 00:35:59.545'),
('cme3ixjng0021tw3keyofxtco', '05.02.02.01', 'Biaya Listrik', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.549', '2025-08-09 00:35:59.549'),
('cme3ixjnj0023tw3k6j7yre8z', '05.02.02.02', 'Biaya Telepon', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.552', '2025-08-09 00:35:59.552'),
('cme3ixjnn0025tw3k3e90s98x', '05.02.02.03', 'Biaya Air', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.555', '2025-08-09 00:35:59.555'),
('cme3ixjnq0027tw3k4zko4byq', '05.02.02.04', 'Biaya Surat Kabar Majalah', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.558', '2025-08-09 00:35:59.558'),
('cme3ixjnt0029tw3kb615am4r', '05.02.02.05', 'Biaya Pembelian Bandwidth', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.561', '2025-08-09 00:35:59.561'),
('cme3ixjnx002btw3kaj7e67tj', '05.02.02.06', 'Biaya Paket Pengiriman', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.565', '2025-08-09 00:35:59.565'),
('cme3ixjo0002dtw3kki5u7bmd', '05.02.03', 'Biaya Cetak dan Penggandaan Keperluan Kantor', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.568', '2025-08-09 00:35:59.568'),
('cme3ixjo3002ftw3kdz7rwunr', '05.02.03.01', 'Biaya Cetak', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.572', '2025-08-09 00:35:59.572'),
('cme3ixjo6002htw3k3k03yibe', '05.02.03.02', 'Biaya Fotokopi', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.574', '2025-08-09 00:35:59.574'),
('cme3ixjo9002jtw3k7mcszv78', '05.02.04', 'Biaya Sewa', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.577', '2025-08-09 00:35:59.577'),
('cme3ixjoc002ltw3kokj3sio9', '05.02.04.01', 'Biaya Sewa Tempat   Gedung', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.581', '2025-08-09 00:35:59.581'),
('cme3ixjog002ntw3kf7xr7i2r', '05.02.04.02', 'Biaya Sewa Kendaraan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.584', '2025-08-09 00:35:59.584'),
('cme3ixjoj002ptw3kdyb5mws4', '05.02.04.03', 'Biaya Sewa Perlengkapan Kantor', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.588', '2025-08-09 00:35:59.588'),
('cme3ixjon002rtw3k2c7yu11q', '05.02.04.05', 'Biaya Sewa Harta', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.591', '2025-08-09 00:35:59.591'),
('cme3ixjoq002ttw3kboo4iv1v', '05.02.04.06', 'Biaya Sewa Tanah dan atau Bangunan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.594', '2025-08-09 00:35:59.594'),
('cme3ixjou002vtw3kqd7z96gu', '05.02.04.07', 'Biaya Sewa Meeting Room   Ballroom UMY Student Dormitory', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.598', '2025-08-09 00:35:59.598'),
('cme3ixjox002xtw3kjzdsi4wg', '05.02.05', 'Biaya Makan dan Minum Kantor', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.601', '2025-08-09 00:35:59.601'),
('cme3ixjp0002ztw3k0mmg7pdt', '05.02.05.01', 'Biaya Makan dan Minum Harian', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.604', '2025-08-09 00:35:59.604'),
('cme3ixjp30031tw3k4vr4dpzr', '05.02.05.02', 'Biaya Makan dan Minum Rapat', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.607', '2025-08-09 00:35:59.607'),
('cme3ixjp60033tw3ke2t27m5l', '05.02.05.03', 'Biaya Makan dan Minum Tamu', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.610', '2025-08-09 00:35:59.610'),
('cme3ixjp90035tw3k73vnegl8', '05.02.06', 'Biaya Pakaian', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.614', '2025-08-09 00:35:59.614'),
('cme3ixjpc0037tw3k9cgkyc1y', '05.02.06.01', 'Biaya Pakaian Dinas', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.617', '2025-08-09 00:35:59.617'),
('cme3ixjpg0039tw3kcvopevp2', '05.02.06.02', 'Biaya Pakaian non Dinas', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.620', '2025-08-09 00:35:59.620'),
('cme3ixjpj003btw3ku5hh141q', '05.02.08', 'Belanja Pemeliharaan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.623', '2025-08-09 00:35:59.623'),
('cme3ixjpm003dtw3kh8tfhp5r', '05.02.08.01', 'Biaya Pemeliharaan Bangunan gedung', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.626', '2025-08-09 00:35:59.626'),
('cme3ixjpp003ftw3kndl7on7d', '05.02.08.04', 'Biaya Pemeliharaan Alat alat Angkutan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.629', '2025-08-09 00:35:59.629'),
('cme3ixjps003htw3kna6lv82h', '05.02.08.08', 'Biaya Pemeliharaan Alat Kantor dan rumah Tangga', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.632', '2025-08-09 00:35:59.632'),
('cme3ixjpv003jtw3k9ca0jo9v', '05.02.08.11', 'Biaya Pemeliharaan Komputer', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.635', '2025-08-09 00:35:59.635'),
('cme3ixjpy003ltw3knboqd27c', '05.02.08.12', 'Biaya Pemeliharaan Alat Sarana Perkuliahan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.639', '2025-08-09 00:35:59.639'),
('cme3ixjq2003ntw3kdiorcdsp', '05.02.08.14', 'Biaya Pemeliharaan Alat Komunikasi', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.642', '2025-08-09 00:35:59.642'),
('cme3ixjq4003ptw3kp4nmx6cd', '05.02.09', 'Belanja Bahan Material', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.645', '2025-08-09 00:35:59.645'),
('cme3ixjq8003rtw3kr51rj6u1', '05.02.09.01', 'Biaya Alat Tulis Kantor yang Dikelola Universitas', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.649', '2025-08-09 00:35:59.649'),
('cme3ixjqe003ttw3kxwe9gvug', '05.02.09.02', 'Biaya Bahan Baku Bangunan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.654', '2025-08-09 00:35:59.654'),
('cme3ixjqh003vtw3k870imznb', '05.02.09.03', 'Biaya Bahan Obat Obatan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.658', '2025-08-09 00:35:59.658'),
('cme3ixjql003xtw3kdl0i0wip', '05.02.09.04', 'Biaya Bahan Percontohan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.661', '2025-08-09 00:35:59.661'),
('cme3ixjqo003ztw3k11vx70tp', '05.02.09.08', 'Biaya Dokumentasi', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.665', '2025-08-09 00:35:59.665'),
('cme3ixjqs0041tw3k7z83rtql', '05.02.09.09', 'Biaya Dekorasi', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.668', '2025-08-09 00:35:59.668'),
('cme3ixjqv0043tw3kkzofya2i', '05.02.09.10', 'Biaya Administrasi', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.671', '2025-08-09 00:35:59.671'),
('cme3ixjqy0045tw3kc0wwxp1c', '05.02.10', 'Sumbangan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.674', '2025-08-09 00:35:59.674'),
('cme3ixjr10047tw3kutk9babn', '05.02.10.01', 'Sumbangan sosial', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.677', '2025-08-09 00:35:59.677'),
('cme3ixjr50049tw3k7l44emv7', '05.02.10.03', 'Subsidi Rawat Inap', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.681', '2025-08-09 00:35:59.681'),
('cme3ixjr8004btw3k3v04ez8p', '05.02.11', 'Pajak', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.684', '2025-08-09 00:35:59.684'),
('cme3ixjrb004dtw3kuk14crr1', '05.02.11.01', 'Biaya Pajak Bumi dan Bangunan (PPB)', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.687', '2025-08-09 00:35:59.687'),
('cme3ixjre004ftw3khxljtrnh', '05.02.11.02', 'Biaya PPh 21', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.691', '2025-08-09 00:35:59.691'),
('cme3ixjrh004htw3ku7bh0y23', '05.02.11.03', 'Biaya PPh Badan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.694', '2025-08-09 00:35:59.694'),
('cme3ixjrl004jtw3knkdes237', '05.02.11.04', 'Biaya Pajak Sewa selain tanah dan Bangunan (PPH Pasal 23)', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.697', '2025-08-09 00:35:59.697'),
('cme3ixjrn004ltw3k5hsdybf4', '05.02.11.05', 'Pajak Sewa Tanah lapangan dan Gedung (PPH Pasal 4 ayat 2)', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.700', '2025-08-09 00:35:59.700'),
('cme3ixjrr004ntw3kf12j5h5q', '05.02.11.06', 'Biaya Pajak Daerah', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.703', '2025-08-09 00:35:59.703'),
('cme3ixjru004ptw3kpumz09h5', '05.02.13', 'Biaya Beasiswa', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.706', '2025-08-09 00:35:59.706'),
('cme3ixjry004rtw3ktdzk7i7r', '05.02.13.01', 'Biaya Beasiswa Studi Lanjut Dosen dan Tendik', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.710', '2025-08-09 00:35:59.710'),
('cme3ixjs1004ttw3kfk337yxd', '05.02.13.02', 'Biaya Beasiswa Mahasiswa', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.714', '2025-08-09 00:35:59.714'),
('cme3ixjs5004vtw3ktns7jz44', '05.02.14', 'Biaya Belanja Jasa Pihak Ketiga', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.717', '2025-08-09 00:35:59.717'),
('cme3ixjs8004xtw3km2wby8sl', '05.02.14.01', 'Biaya Jasa Pihak Ketiga', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.720', '2025-08-09 00:35:59.720'),
('cme3ixjsb004ztw3kss9fuk55', '05.02.14.01.01', 'Biaya Jasa Pihak Ketiga Badan - Imbalan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.724', '2025-08-09 00:35:59.724'),
('cme3ixjse0051tw3khg693uh8', '05.02.14.01.02', 'Biaya Jasa Pihak Ketiga Badan - Outsourcing', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.727', '2025-08-09 00:35:59.727'),
('cme3ixjsh0053tw3kd4gbfg84', '05.02.14.01.03', 'Biaya Jasa Pihak Ketiga Orang - Imbalan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.730', '2025-08-09 00:35:59.730'),
('cme3ixjsl0055tw3ki9isu7qc', '05.02.14.02', 'Biaya Iklan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.734', '2025-08-09 00:35:59.734'),
('cme3ixjsq0057tw3kyi0dk3eg', '05.02.14.02.01', 'Biaya PPN atas Iklan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.738', '2025-08-09 00:35:59.738'),
('cme3ixjss0059tw3k2vnxacru', '05.02.14.02.02', 'Biaya Jasa Agen Iklan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.741', '2025-08-09 00:35:59.741'),
('cme3ixjsw005btw3k7crv0anb', '05.02.14.02.03', 'Biaya Jasa Materi Iklan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.744', '2025-08-09 00:35:59.744'),
('cme3ixjsz005dtw3k8ragsggl', '05.02.15', 'Biaya Asuransi', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.747', '2025-08-09 00:35:59.747'),
('cme3ixjt2005ftw3kvdt0f52b', '05.02.15.01', 'Biaya Asuransi Gedung', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.751', '2025-08-09 00:35:59.751'),
('cme3ixjt6005htw3ke3c57m2w', '05.02.15.02', 'Biaya Asuransi Kendaraan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.754', '2025-08-09 00:35:59.754'),
('cme3ixjt9005jtw3kfe2zw5ad', '05.02.15.03', 'Biaya Asuransi Peralatan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.758', '2025-08-09 00:35:59.758'),
('cme3ixjtc005ltw3ka30i3qpc', '05.02.15.04', 'Biaya Asuransi Kesehatan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.761', '2025-08-09 00:35:59.761'),
('cme3ixjtf005ntw3k9v2fcg2q', '05.02.15.05', 'Biaya Asuransi Hari Tua Pensiun', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.764', '2025-08-09 00:35:59.764'),
('cme3ixjtj005ptw3kuf55o09w', '05.02.16', 'Biaya Transportasi non Sewa', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.768', '2025-08-09 00:35:59.768'),
('cme3ixjtm005rtw3kgp1nyo4n', '05.02.16.01', 'Biaya Transportasi (Tiket dan BBM)', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.771', '2025-08-09 00:35:59.771'),
('cme3ixjtp005ttw3kxykp905m', '05.02.16.02', 'Biaya Hotel Penginapan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.774', '2025-08-09 00:35:59.774'),
('cme3ixjtt005vtw3kq8zr3i91', '05.02.16.03', 'Biaya Penginapan UMY Student Dormitory', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.777', '2025-08-09 00:35:59.777'),
('cme3ixjtw005xtw3k3ksu4wmt', '05.02.17', 'Biaya Buku Pendidikan dan Keagamaan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.781', '2025-08-09 00:35:59.781'),
('cme3ixju0005ztw3kniy6qq4s', '05.02.17.01', 'Biaya Buku Pendidikan dan Keagamaan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.784', '2025-08-09 00:35:59.784'),
('cme3ixju30061tw3k075l4c1z', '05.02.98', 'Biaya Penyusutan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.788', '2025-08-09 00:35:59.788'),
('cme3ixju60063tw3kfje1m5uc', '05.02.98.01', 'Biaya Penyusutan Tanah', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.790', '2025-08-09 00:35:59.790'),
('cme3ixju90065tw3km1jwek5b', '05.02.98.02', 'Biaya Penyusutan Gedung', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.794', '2025-08-09 00:35:59.794'),
('cme3ixjuc0067tw3kr7wv20g4', '05.02.98.03', 'Biaya Penyusutan Alat Angkutan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.796', '2025-08-09 00:35:59.796'),
('cme3ixjuf0069tw3kt2zeniey', '05.02.98.04', 'Biaya Penyusutan Alat-alat Bengkel', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.799', '2025-08-09 00:35:59.799'),
('cme3ixjui006btw3kl8kcjlce', '05.02.98.05', 'Biaya Penyusutan Alat Kantor', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.802', '2025-08-09 00:35:59.802'),
('cme3ixjuk006dtw3kswzxenpz', '05.02.98.06', 'Biaya Penyusutan Mebelair', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.805', '2025-08-09 00:35:59.805'),
('cme3ixjuo006ftw3k7q8lo5a6', '05.02.98.07', 'Biaya Penyusutan Alat-alat Laboratorium', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.808', '2025-08-09 00:35:59.808'),
('cme3ixjuq006htw3kfdhgxv5u', '05.02.98.08', 'Biaya Penyusutan Buku Pustaka Terbitan Berkala', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.811', '2025-08-09 00:35:59.811'),
('cme3ixjut006jtw3k992pxe3f', '05.02.99', 'Biaya Lain Lain', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.814', '2025-08-09 00:35:59.814'),
('cme3ixjuw006ltw3kktnlixmm', '05.02.99.01', 'Biaya Taktis', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.816', '2025-08-09 00:35:59.816'),
('cme3ixjuz006ntw3kf84xzd6z', '05.02.99.99', 'Kerugian Kesalahan Periode Pencatatan', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.819', '2025-08-09 00:35:59.819'),
('cme3ixjv1006ptw3k2clqseff', '5.03', 'Belanja Aset', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.822', '2025-08-09 00:35:59.822'),
('cme3ixjv4006rtw3kmh9fosvt', '05.03.01', 'Belanja Aset Tanah', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.824', '2025-08-09 00:35:59.824'),
('cme3ixjv7006ttw3ksg06i4g1', '05.03.01.01', 'Belanja Aset Tanah', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.827', '2025-08-09 00:35:59.827'),
('cme3ixjva006vtw3k1fqub6p6', '05.03.02', 'Belanja Aset Gedung', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.831', '2025-08-09 00:35:59.831'),
('cme3ixjvi006xtw3kr9pcilze', '05.03.02.01', 'Belanja Aset Gedung', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.839', '2025-08-09 00:35:59.839'),
('cme3ixjvm006ztw3kcosdgvis', '05.03.03', 'Belanja Aset Alat Angkutan Darat', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.842', '2025-08-09 00:35:59.842'),
('cme3ixjvp0071tw3kr0iybsuc', '05.03.03.01', 'Belanja Aset Alat Angkutan Darat', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.845', '2025-08-09 00:35:59.845'),
('cme3ixjvs0073tw3kzolj5c19', '05.03.04', 'Belanja Aset Alat-Alat Bengkel', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.848', '2025-08-09 00:35:59.848'),
('cme3ixjvv0075tw3khhq4h59m', '05.03.04.01', 'Belanja Aset Alat-Alat Bengkel', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.851', '2025-08-09 00:35:59.851'),
('cme3ixjvx0077tw3k1ilrq35y', '05.03.05', 'Belanja Aset Alat Kantor', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.854', '2025-08-09 00:35:59.854'),
('cme3ixjw00079tw3ktwp3ea5a', '05.03.05.01', 'Belanja Aset Alat Kantor', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.857', '2025-08-09 00:35:59.857'),
('cme3ixjw3007btw3kcpsnuxcd', '05.03.06', 'Belanja Aset Mebelair', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.860', '2025-08-09 00:35:59.860'),
('cme3ixjw7007dtw3kre1sjy82', '05.03.06.01', 'Belanja Aset Mebelair', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.863', '2025-08-09 00:35:59.863'),
('cme3ixjwb007ftw3kyab9t19x', '05.03.07', 'Belanja Aset Alat-alat Laboratorium', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.867', '2025-08-09 00:35:59.867'),
('cme3ixjwe007htw3kudedngi5', '05.03.07.01', 'Belanja Aset Alat-alat Laboratorium', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.871', '2025-08-09 00:35:59.871'),
('cme3ixjwh007jtw3k8imu5hce', '05.03.08', 'Belanja Aset Buku Pustaka Terbitan Berkala', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.874', '2025-08-09 00:35:59.874'),
('cme3ixjwl007ltw3kzjbhuc7w', '05.03.08.01', 'Belanja Aset Buku Pustaka Terbitan Berkala', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.878', '2025-08-09 00:35:59.878'),
('cme3ixjwo007ntw3kqbxqd316', '05.03.09', 'Belanja Aset Konstruksi dalam Penyelesaian', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.881', '2025-08-09 00:35:59.881'),
('cme3ixjws007ptw3kg1siirbh', '05.03.09.01', 'Belanja Aset Konstruksi dalam Penyelesaian', 'cme2gxlka0011bytybi6qdwkh', '2025-08-09 00:35:59.885', '2025-08-09 00:35:59.885'),
('cme3iyscd0001twekesvyvxh8', '4', 'Pendapatan', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.469', '2025-08-09 00:36:57.469'),
('cme3iysco0003twekufv7i982', '4.01', 'Pendapatan Pengelolaan Universitas', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.480', '2025-08-09 00:36:57.480'),
('cme3iyscs0005twekpyrm5kc9', '04.01.01', 'Pendapatan SPP dan DPP', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.484', '2025-08-09 00:36:57.484'),
('cme3iyscv0007twekxtq9ramx', '04.01.01.01', 'Pendapatan SPP Mahasiswa', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.487', '2025-08-09 00:36:57.487'),
('cme3iyscz0009twekjasf8prw', '04.01.01.02', 'Pendapatan DPP', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.491', '2025-08-09 00:36:57.491'),
('cme3iysd2000btwekvv7nuwa0', '04.01.01.03', 'Pendapatan SPP Variabel', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.494', '2025-08-09 00:36:57.494'),
('cme3iysd5000dtwekjgl3xhbu', '04.01.01.04', 'Pendapatan SPP Transitoris', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.497', '2025-08-09 00:36:57.497'),
('cme3iysd8000ftweknoiz3rk7', '04.01.01.05', 'Pendapatan SPP Lain-lain', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.501', '2025-08-09 00:36:57.501'),
('cme3iysdc000htwektuv32eye', '04.01.02', 'Pendapatan Jasa Deposito', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.504', '2025-08-09 00:36:57.504'),
('cme3iysdf000jtwek1chvi6cf', '04.01.02.01', 'Pendapatan Jasa Deposito Tabungan Bank Syariah', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.508', '2025-08-09 00:36:57.508'),
('cme3iysdi000ltwekozyh980b', '04.01.02.02', 'Pendapatan Jasa Deposito Giro Bank Syariah', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.511', '2025-08-09 00:36:57.511'),
('cme3iysdl000ntwekp59k86sr', '04.01.02.03', 'Pendapatan Jasa Deposito Tabungan Bank Konvensional', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.513', '2025-08-09 00:36:57.513'),
('cme3iysdo000ptwekdvlojvxk', '04.01.02.04', 'Pendapatan Jasa Deposito Giro Bank Konvensional', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.517', '2025-08-09 00:36:57.517'),
('cme3iysdr000rtwekf3d3m8t1', '04.01.03', 'Pendapatan Jasa Bank', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.519', '2025-08-09 00:36:57.519'),
('cme3iysdu000ttwekgcd16yl8', '04.01.03.01', 'Pendapatan Jasa Bank Tabungan Bank Syariah', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.522', '2025-08-09 00:36:57.522'),
('cme3iysdw000vtweknn2r7b4t', '04.01.03.02', 'Pendapatan Jasa Bank Giro Bank Syariah', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.524', '2025-08-09 00:36:57.524'),
('cme3iysdz000xtwekgn03eq1z', '04.01.03.03', 'Pendapatan Jasa Bank Tabungan Bank Konvensional', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.527', '2025-08-09 00:36:57.527'),
('cme3iyse2000ztwek3dj4kcmq', '04.01.03.04', 'Pendapatan Jasa Bank Giro Bank Konvensional', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.531', '2025-08-09 00:36:57.531'),
('cme3iyse50011twektix848hn', '4.02', 'Pendapatan dari Pengelolaan non Universitas', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.533', '2025-08-09 00:36:57.533'),
('cme3iyse80013tweke0711uqp', '04.02.01', 'Kontribusi Holding Company', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.536', '2025-08-09 00:36:57.536'),
('cme3iysea0015twek4ki75g8t', '04.02.01.01', 'Kontribusi Holding Company', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.539', '2025-08-09 00:36:57.539'),
('cme3iysed0017twekg75qrv5b', '4.03', 'Pendapatan Hibah', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.541', '2025-08-09 00:36:57.541'),
('cme3iyseg0019twekbqcfepg8', '04.03.01', 'Pendapatan Hibah', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.544', '2025-08-09 00:36:57.544'),
('cme3iysei001btwekmpksdrc5', '04.03.01.01', 'Pendapatan Kontribusi BPH', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.546', '2025-08-09 00:36:57.546'),
('cme3iysel001dtwekl4iox0y1', '4.04', 'Pendapatan Lain', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.549', '2025-08-09 00:36:57.549'),
('cme3iysen001ftwekr9zv848t', '04.04.01', 'Pendapatan Lain', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.552', '2025-08-09 00:36:57.552'),
('cme3iyseq001htwekdol4j2v5', '04.04.01.01', 'Pendapatan Lain', 'cme3ii1wh0000twcwld0zijtn', '2025-08-09 00:36:57.554', '2025-08-09 00:36:57.554');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `review_umum` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tanggapan_akhir` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `review_umum2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `tahun` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`id`, `unit_id`, `review_umum`, `tanggapan_akhir`, `review_umum2`, `createdAt`, `updatedAt`, `tahun`) VALUES
('cm89l7f0p001h117xyyf7ea2u', 'cm6lgg7qi0007w6w3ndsjsk42', 'Secara Umum sudah oke hanya satu MA yang perlu perbaikan.', '', 'bagus', '2025-03-15 02:28:02.377', '2025-07-31 07:23:58.050', '2025');

-- --------------------------------------------------------

--
-- Table structure for table `review_program`
--

CREATE TABLE `review_program` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `proker_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `temuan` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `saran` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tanggapan` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `review_akhir` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rekomendasi` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `review_program`
--

INSERT INTO `review_program` (`id`, `proker_id`, `temuan`, `saran`, `tanggapan`, `review_akhir`, `rekomendasi`, `createdAt`, `updatedAt`) VALUES
('cmdr2hqts00bgjjccfiotafnj', 'cmdr1oqih00b0jjccf02yj5af', 'Peserta Workshop Seharusnya tidak mendapatkan Honor', 'Silahkan Diganti dengan Biaya Konsumsi', 'Terimakasih atas reviewnya, sudah sesuai.', '', 'Direkomendasikan', '2025-07-31 07:22:34.384', '2025-07-31 07:30:17.284'),
('cme2hdg44001gbytyem1gsj4q', 'cme2gvi0d000zbyty80puf21a', '', '', '', '', 'Direkomendasikan', '2025-08-08 07:04:36.050', '2025-08-08 07:04:50.503');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
('cm6la9qrq0008hge8wochocvw', 'Super Admin', '2025-01-31 21:35:44.583', '2025-01-31 21:35:44.583'),
('cm6lghqkz0009w6w3nwcwq0f0', 'Admin Perencanaan', '2025-02-01 00:29:55.283', '2025-02-01 00:29:55.283'),
('cm6lghzg4000bw6w3ksud7oh9', 'Reviewer', '2025-02-01 00:30:06.772', '2025-02-01 00:30:06.772'),
('cm6lgiau9000dw6w3qhxy7j3r', 'Admin Keuangan', '2025-02-01 00:30:21.537', '2025-08-08 06:16:44.187'),
('cm6lgiy3y000fw6w34akhlejn', 'Admin Unit Kerja', '2025-02-01 00:30:51.694', '2025-02-01 01:04:15.999'),
('cmcvi5bda0001c1rlbtjjgqpz', 'Admin Auditor', '2025-07-09 05:12:10.703', '2025-07-09 05:12:10.703'),
('cme2fi9b00005bytyovxr0q15', 'adminbpm', '2025-08-08 06:12:21.276', '2025-08-08 06:12:21.276');

-- --------------------------------------------------------

--
-- Table structure for table `spj`
--

CREATE TABLE `spj` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `proker_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_spj` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nominal_spj` int DEFAULT NULL,
  `status_persetujuan_biro` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `keterangan_biro` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tanggal_approval_biro` datetime(3) DEFAULT NULL,
  `status_persetujuan_bpm` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `keterangan_bpm` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tanggal_approval_bpm` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `spmu`
--

CREATE TABLE `spmu` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_spmu` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `tanggal` datetime(3) DEFAULT NULL,
  `biro_approval` tinyint(1) NOT NULL DEFAULT '0',
  `wr2_approval` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `periode_spmu_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tahun` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `spp_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `spmu`
--

INSERT INTO `spmu` (`id`, `no_spmu`, `status`, `tanggal`, `biro_approval`, `wr2_approval`, `createdAt`, `updatedAt`, `periode_spmu_id`, `tahun`, `spp_id`) VALUES
('cm89t5kfg0006p90wxncmysj9', '1/SPMU/X/2025', 0, '2025-03-27 01:01:13.606', 1, 1, '2025-03-15 06:10:33.004', '2025-03-27 01:01:18.100', 'cm89lacz8001m117xgm6xhljc', '2025', 'cm89t40gn0003p90wh7qail58'),
('cmdr40rwz00c5jjccqof4d5ek', '1/SPMU/X/2025', 0, '2025-07-31 08:05:31.645', 1, 1, '2025-07-31 08:05:21.874', '2025-07-31 08:05:35.516', 'cm89lacz8001m117xgm6xhljc', '2025', 'cmdr3kpw900c2jjccuz7bjnle');

-- --------------------------------------------------------

--
-- Table structure for table `spp`
--

CREATE TABLE `spp` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `periode_spmu_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_spp` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `otorisasi` tinyint(1) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `tahun` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `spp`
--

INSERT INTO `spp` (`id`, `periode_spmu_id`, `no_spp`, `otorisasi`, `status`, `createdAt`, `updatedAt`, `tahun`) VALUES
('cm89t40gn0003p90wh7qail58', 'cm89lacz8001m117xgm6xhljc', '1/SPP/TI-X/2025', 1, 1, '2025-03-15 06:09:20.471', '2025-03-15 06:10:19.790', '2025'),
('cmdr3kpw900c2jjccuz7bjnle', 'cm89lacz8001m117xgm6xhljc', '1/SPP/TI-X/2025', 1, 1, '2025-07-31 07:52:52.760', '2025-07-31 07:55:17.527', '2025');

-- --------------------------------------------------------

--
-- Table structure for table `units`
--

CREATE TABLE `units` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `created_by_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_unit` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `units`
--

INSERT INTO `units` (`id`, `name`, `category_id`, `created_at`, `updated_at`, `created_by_id`, `is_unit`) VALUES
('cm6lgfo3y0003w6w3ml9x6e8l', 'Fakultas Teknik', 'cm6lgf86d0001w6w3h72ea8z6', '2025-02-01 00:28:18.765', '2025-02-01 00:28:18.765', NULL, 1),
('cm6lgg7qi0007w6w3ndsjsk42', 'S1 Teknik Mesin', 'cm6lgf1ng0000w6w35eienond', '2025-02-01 00:28:44.203', '2025-02-01 00:28:44.203', NULL, 1),
('cm6lgk4ng000jw6w3lbhbqi84', 'S1 Teknik Sipil', 'cm6lgf1ng0000w6w35eienond', '2025-02-01 00:31:46.827', '2025-02-01 00:31:46.827', NULL, 1),
('cmdqvuk2z00agjjccx4f0tuox', 'Univ', 'cmdquitah000014ielkuvs4j2', '2025-07-31 04:16:34.859', '2025-07-31 04:16:34.859', NULL, 1),
('cme3lgikn0001twp83qbaww64', 'S1 Teknik Informatika', 'cm6lgf1ng0000w6w35eienond', '2025-08-09 01:46:43.831', '2025-08-09 01:46:43.831', NULL, 1),
('cme3lgxty0003twp8fecuowu7', 'S1 Manajemen', 'cm6lgf1ng0000w6w35eienond', '2025-08-09 01:47:03.621', '2025-08-09 01:47:03.621', NULL, 1),
('cme3lh9760005twp8y9quvpw6', 'S1 Akuntansi', 'cm6lgf1ng0000w6w35eienond', '2025-08-09 01:47:18.354', '2025-08-09 01:47:18.354', NULL, 1),
('cme3lhsdp0007twp8ryj0dns5', 'S1 Pendidikan Guru Sekolah Dasar', 'cm6lgf1ng0000w6w35eienond', '2025-08-09 01:47:43.212', '2025-08-09 01:47:43.212', NULL, 1),
('cme3li58y0009twp8nz00qp8u', 'S1 Sistem Informasi', 'cm6lgf1ng0000w6w35eienond', '2025-08-09 01:47:59.890', '2025-08-09 01:47:59.890', NULL, 1),
('cme3ligm2000btwp8citfrqav', 'Magister Manajemen', 'cm6lgf1ng0000w6w35eienond', '2025-08-09 01:48:14.618', '2025-08-09 01:48:14.618', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `salt` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `created_by_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `salt`, `role_id`, `created_at`, `updated_at`, `created_by_id`) VALUES
('cm6la9qqg0001hge8l5hdxg60', 'superadmin', '3ae485b008f9a065aa56ee213756c0f4f2efd5528222fafc6899ab7320ab1ff0391bb90bd26be7cc4612c20b27c7e81dfeb932618b4f8e07928380b069de9b77', '0a180930c2c8ca55e709f42ad9eeb855', 'cm6la9qrq0008hge8wochocvw', '2025-01-31 21:35:44.536', '2025-02-01 00:46:53.877', NULL),
('cm6lgjpzl000hw6w3j6b8mtfq', 'prodimesin', '3248552a44b01726d673da62117c253f060c0eea7d50628a065cce8ecb6269acd2b73f6b79bda74236bf39f35c6ff52cef48e2006f7bce73d21c615832b6f0c1', '4bbe2a13e5b71e7c80682d0479863dd1', 'cm6lgiy3y000fw6w34akhlejn', '2025-02-01 00:31:27.826', '2025-02-01 01:01:54.174', NULL),
('cm6lgktgs000lw6w3cpv86cu5', 'reviewer1', '6fbb306bf2d9e7102d50331aefe2bda5e98d72b89e301fafca161b065f3c6bd583d206b52d35abfcbd03329a0bb536a65e822368bcec35f973220e9051148a68', '83ace7180a4e2534a41b00249492d81b', 'cm6lghzg4000bw6w3ksud7oh9', '2025-02-01 00:32:18.988', '2025-02-01 00:32:18.988', NULL),
('cm6lglfmp000nw6w3la68c1tb', 'adminpenyusun', '14fd835da3ac979e5d38c028ce84b9d2f346213351568aaeb61520eed68c798f77c8732c92b96ba3dcd0dbd3fc4f420dbf8c2c5f01b4cfdae41add580db55c27', '4f02a5fc043f45be7215caac3641bcb1', 'cm6lghqkz0009w6w3nwcwq0f0', '2025-02-01 00:32:47.713', '2025-02-01 00:55:36.290', NULL),
('cm6lgmazt000pw6w3ec0hkn6c', 'adminkeuangan', '5b6f389163c09fb45c2ac5596d592e5d7b524558c0eff7792cad37e9b85d24e2cd5eabeadd862eafd684c35a7e164bd5e8bf9ab2116efaf1a43853a2cac2bf6d', 'ccb522788b821e0c8d36beb44904547d', 'cm6lgiau9000dw6w3qhxy7j3r', '2025-02-01 00:33:28.361', '2025-08-08 06:14:30.191', NULL),
('cmcvi5v9c0003c1rl3fj5ddcs', 'adminaudit', 'd8042634119b2a4fe2468d28d09abcde8d39e40760d3303d810610f8509f3ecdd1e34e47dfa737b67aa6a0e6462d83d5ea60cb39cce8a8538947194e2222204c', '58793b63e0d1d2f3e61d2fed1e8ef15e', 'cmcvi5bda0001c1rlbtjjgqpz', '2025-07-09 05:12:36.480', '2025-07-09 05:12:36.480', NULL),
('cmdqyp08f00aijjccr2xjesh8', 'univ', 'fce69dab5081b9bd6f7f9b7e92acfb92d896076c9531f9183f3b845b380256fd1a3a4215d9fb022f5f779ec9017d305e1713ad3b2161ea9af2f25dffcaa1ad98', '2df5ec4d02c6a04ce581e4d20c3b2718', 'cm6la9qrq0008hge8wochocvw', '2025-07-31 05:36:14.701', '2025-07-31 05:36:14.701', NULL),
('cme2fjr9s0007bytynkw3egx7', 'adminbpm', 'f56db54fe359a9707e93528ac9af79189191a71d87a394cf820281afac523b6635d132d887b19ca4c50d88ef7670e5c8a19cb435fe0111ce273e766bde7c7648', '3e01b01682442152a564cdf1781123a7', 'cme2fi9b00005bytyovxr0q15', '2025-08-08 06:13:31.215', '2025-08-08 06:13:31.215', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `visi_misi`
--

CREATE TABLE `visi_misi` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tahun` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `visi` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `misi` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tujuan` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `keterangan` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `created_by_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_maonkpi`
--

CREATE TABLE `_maonkpi` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kpi_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ma_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uraian` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `output` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` datetime(3) NOT NULL,
  `end_date` datetime(3) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `created_by_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status_biro_keu` tinyint(1) DEFAULT '0',
  `spp_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `anggaran_diminta` int DEFAULT '0',
  `anggaran` int DEFAULT '0',
  `telah_diterima` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_maonkpi`
--

INSERT INTO `_maonkpi` (`id`, `kpi_id`, `ma_id`, `unit_id`, `uraian`, `output`, `start_date`, `end_date`, `created_at`, `updated_at`, `created_by_id`, `status_biro_keu`, `spp_id`, `anggaran_diminta`, `anggaran`, `telah_diterima`) VALUES
('cmdr1oqih00b0jjccf02yj5af', 'cmdqvpci8005mjjccde77sexj', 'cmdr0yeqm00atjjccrqt2mckx', 'cm6lgg7qi0007w6w3ndsjsk42', 'Workshop Penulisan Tugas akhir bagi mahasiswa semester akhir', 'Laporan Kegiatan', '2025-07-29 17:00:00.000', '2026-01-30 17:00:00.000', '2025-07-31 07:00:00.952', '2025-07-31 07:55:04.827', NULL, 1, 'cmdr3kpw900c2jjccuz7bjnle', 5000000, 5000000, 0),
('cme2gvi0d000zbyty80puf21a', 'cmdqvszb4008ijjcch4vsp6r5', 'cme2go1zf000xbytynk5kfwco', 'cm6lgg7qi0007w6w3ndsjsk42', 'Bimbingan Teknis', 'Submit 3 lomba internasional', '2025-08-05 17:00:00.000', '2025-08-08 17:00:00.000', '2025-08-08 06:50:38.700', '2025-08-08 06:55:14.470', NULL, 0, NULL, 0, 5000000, 0);

-- --------------------------------------------------------

--
-- Table structure for table `_permissiontorole`
--

CREATE TABLE `_permissiontorole` (
  `A` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `B` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_permissiontorole`
--

INSERT INTO `_permissiontorole` (`A`, `B`) VALUES
('cm6la9qr00002hge83klib3dg', 'cm6la9qrq0008hge8wochocvw'),
('cm6la9qr30003hge8n27gsfas', 'cm6la9qrq0008hge8wochocvw'),
('cm6la9qr30004hge83bj08w7b', 'cm6la9qrq0008hge8wochocvw'),
('cm6la9qr40005hge8kritmu9g', 'cm6la9qrq0008hge8wochocvw'),
('cm6la9qr40006hge84c9x31np', 'cm6la9qrq0008hge8wochocvw'),
('cm6la9qr50007hge8wv0e4szv', 'cm6la9qrq0008hge8wochocvw'),
('cm6la9qr00002hge83klib3dg', 'cm6lghqkz0009w6w3nwcwq0f0'),
('cm6la9qr50007hge8wv0e4szv', 'cm6lghzg4000bw6w3ksud7oh9'),
('cm6la9qr30003hge8n27gsfas', 'cm6lgiau9000dw6w3qhxy7j3r'),
('cm6la9qr40005hge8kritmu9g', 'cm6lgiau9000dw6w3qhxy7j3r'),
('cm6la9qr40006hge84c9x31np', 'cm6lgiau9000dw6w3qhxy7j3r'),
('cm6la9qr40005hge8kritmu9g', 'cm6lgiy3y000fw6w34akhlejn'),
('cm6la9qr30004hge83bj08w7b', 'cmcvi5bda0001c1rlbtjjgqpz'),
('cm6la9qr00002hge83klib3dg', 'cme2fi9b00005bytyovxr0q15'),
('cm6la9qr30003hge8n27gsfas', 'cme2fi9b00005bytyovxr0q15'),
('cm6la9qr30004hge83bj08w7b', 'cme2fi9b00005bytyovxr0q15'),
('cm6la9qr40005hge8kritmu9g', 'cme2fi9b00005bytyovxr0q15'),
('cm6la9qr40006hge84c9x31np', 'cme2fi9b00005bytyovxr0q15');

-- --------------------------------------------------------

--
-- Table structure for table `_rekeningtounit`
--

CREATE TABLE `_rekeningtounit` (
  `A` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `B` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_unittouser`
--

CREATE TABLE `_unittouser` (
  `A` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `B` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_unittouser`
--

INSERT INTO `_unittouser` (`A`, `B`) VALUES
('cm6lgg7qi0007w6w3ndsjsk42', 'cm6la9qqg0001hge8l5hdxg60'),
('cm6lgg7qi0007w6w3ndsjsk42', 'cm6lgjpzl000hw6w3j6b8mtfq'),
('cm6lgg7qi0007w6w3ndsjsk42', 'cm6lgktgs000lw6w3cpv86cu5'),
('cm6lgg7qi0007w6w3ndsjsk42', 'cm6lglfmp000nw6w3la68c1tb'),
('cm6lgg7qi0007w6w3ndsjsk42', 'cm6lgmazt000pw6w3ec0hkn6c'),
('cm6lgg7qi0007w6w3ndsjsk42', 'cmcvi5v9c0003c1rl3fj5ddcs'),
('cmdqvuk2z00agjjccx4f0tuox', 'cmdqyp08f00aijjccr2xjesh8'),
('cm6lgg7qi0007w6w3ndsjsk42', 'cme2fjr9s0007bytynkw3egx7');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bidang`
--
ALTER TABLE `bidang`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `bidang_code_key` (`code`),
  ADD KEY `bidang_created_by_id_fkey` (`created_by_id`);

--
-- Indexes for table `category_unit`
--
ALTER TABLE `category_unit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_sub_unit`
--
ALTER TABLE `data_sub_unit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `data_sub_unit_unit_id_fkey` (`unit_id`),
  ADD KEY `data_sub_unit_data_unit_id_fkey` (`data_unit_id`);

--
-- Indexes for table `data_unit`
--
ALTER TABLE `data_unit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `data_unit_unit_id_fkey` (`unit_id`);

--
-- Indexes for table `file`
--
ALTER TABLE `file`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `File_pengalihan_id_key` (`pengalihan_id`),
  ADD KEY `File_filename_idx` (`filename`),
  ADD KEY `File_createdAt_idx` (`createdAt`),
  ADD KEY `File_persiapan_id_fkey` (`persiapan_id`),
  ADD KEY `File_pelaksanaan_id_fkey` (`pelaksanaan_id`),
  ADD KEY `File_laporan_id_fkey` (`laporan_id`);

--
-- Indexes for table `file_laporan`
--
ALTER TABLE `file_laporan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `file_laporan_filename_idx` (`filename`),
  ADD KEY `file_laporan_createdAt_idx` (`createdAt`),
  ADD KEY `file_laporan_laporan_id_fkey` (`laporan_id`);

--
-- Indexes for table `indikator_kinerja`
--
ALTER TABLE `indikator_kinerja`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `indikator_kinerja_kpi_code_key` (`kpi_code`),
  ADD KEY `indikator_kinerja_created_by_id_fkey` (`created_by_id`),
  ADD KEY `indikator_kinerja_primary_pic_id_fkey` (`primary_pic_id`),
  ADD KEY `indikator_kinerja_secondary_pic_id_fkey` (`secondary_pic_id`),
  ADD KEY `indikator_kinerja_bidang_id_fkey` (`bidang_id`);

--
-- Indexes for table `jadwal`
--
ALTER TABLE `jadwal`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `jadwal_unit_id_tahun_key` (`unit_id`,`tahun`);

--
-- Indexes for table `jadwal_laporan`
--
ALTER TABLE `jadwal_laporan`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `jadwal_laporan_unit_id_key` (`unit_id`);

--
-- Indexes for table `jadwal_pencairan`
--
ALTER TABLE `jadwal_pencairan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jadwal_pencairan_unit_id_fkey` (`unit_id`);

--
-- Indexes for table `jenis_rekening`
--
ALTER TABLE `jenis_rekening`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `jenis_rekening_code_key` (`code`);

--
-- Indexes for table `laporan`
--
ALTER TABLE `laporan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `laporan_indikator_id_fkey` (`indikator_id`);

--
-- Indexes for table `mata_anggaran`
--
ALTER TABLE `mata_anggaran`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mata_anggaran_created_by_id_fkey` (`created_by_id`),
  ADD KEY `mata_anggaran_indicator_id_fkey` (`indicator_id`);

--
-- Indexes for table `pagu_anggaran`
--
ALTER TABLE `pagu_anggaran`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pagu_anggaran_tahun_unit_id_key` (`tahun`,`unit_id`),
  ADD KEY `pagu_anggaran_unit_id_fkey` (`unit_id`);

--
-- Indexes for table `pembelian`
--
ALTER TABLE `pembelian`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pembelian_rekening_id_fkey` (`rekening_id`),
  ADD KEY `pembelian_proker_id_fkey` (`proker_id`),
  ADD KEY `pembelian_pagu_id_fkey` (`pagu_id`);

--
-- Indexes for table `periode_spmu`
--
ALTER TABLE `periode_spmu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `periode_spmu_jadwal_pencairan_id_fkey` (`jadwal_pencairan_id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_key` (`name`);

--
-- Indexes for table `progres_spj`
--
ALTER TABLE `progres_spj`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `progres_spj_proker_id_key` (`proker_id`);

--
-- Indexes for table `rekening`
--
ALTER TABLE `rekening`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rekening_jenis_id_fkey` (`jenis_id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `review_unit_id_fkey` (`unit_id`);

--
-- Indexes for table `review_program`
--
ALTER TABLE `review_program`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `review_program_proker_id_key` (`proker_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_key` (`name`);

--
-- Indexes for table `spj`
--
ALTER TABLE `spj`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `spj_proker_id_key` (`proker_id`);

--
-- Indexes for table `spmu`
--
ALTER TABLE `spmu`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `spmu_spp_id_key` (`spp_id`),
  ADD KEY `spmu_periode_spmu_id_fkey` (`periode_spmu_id`);

--
-- Indexes for table `spp`
--
ALTER TABLE `spp`
  ADD PRIMARY KEY (`id`),
  ADD KEY `spp_periode_spmu_id_fkey` (`periode_spmu_id`);

--
-- Indexes for table `units`
--
ALTER TABLE `units`
  ADD PRIMARY KEY (`id`),
  ADD KEY `units_created_by_id_fkey` (`created_by_id`),
  ADD KEY `units_category_id_fkey` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_key` (`username`),
  ADD KEY `users_role_id_fkey` (`role_id`),
  ADD KEY `users_created_by_id_fkey` (`created_by_id`);

--
-- Indexes for table `visi_misi`
--
ALTER TABLE `visi_misi`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `visi_misi_tahun_key` (`tahun`),
  ADD KEY `visi_misi_created_by_id_fkey` (`created_by_id`),
  ADD KEY `visi_misi_unit_id_fkey` (`unit_id`);

--
-- Indexes for table `_maonkpi`
--
ALTER TABLE `_maonkpi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `_maonkpi_created_by_id_fkey` (`created_by_id`),
  ADD KEY `_maonkpi_kpi_id_fkey` (`kpi_id`),
  ADD KEY `_maonkpi_ma_id_fkey` (`ma_id`),
  ADD KEY `_maonkpi_unit_id_fkey` (`unit_id`),
  ADD KEY `_maonkpi_spp_id_fkey` (`spp_id`);

--
-- Indexes for table `_permissiontorole`
--
ALTER TABLE `_permissiontorole`
  ADD UNIQUE KEY `_PermissionToRole_AB_unique` (`A`,`B`),
  ADD KEY `_PermissionToRole_B_index` (`B`);

--
-- Indexes for table `_rekeningtounit`
--
ALTER TABLE `_rekeningtounit`
  ADD UNIQUE KEY `_RekeningToUnit_AB_unique` (`A`,`B`),
  ADD KEY `_RekeningToUnit_B_index` (`B`);

--
-- Indexes for table `_unittouser`
--
ALTER TABLE `_unittouser`
  ADD UNIQUE KEY `_UnitToUser_AB_unique` (`A`,`B`),
  ADD KEY `_UnitToUser_B_index` (`B`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bidang`
--
ALTER TABLE `bidang`
  ADD CONSTRAINT `bidang_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `data_sub_unit`
--
ALTER TABLE `data_sub_unit`
  ADD CONSTRAINT `data_sub_unit_data_unit_id_fkey` FOREIGN KEY (`data_unit_id`) REFERENCES `data_unit` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `data_sub_unit_unit_id_fkey` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `data_unit`
--
ALTER TABLE `data_unit`
  ADD CONSTRAINT `data_unit_unit_id_fkey` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `file`
--
ALTER TABLE `file`
  ADD CONSTRAINT `File_laporan_id_fkey` FOREIGN KEY (`laporan_id`) REFERENCES `_maonkpi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `File_pelaksanaan_id_fkey` FOREIGN KEY (`pelaksanaan_id`) REFERENCES `_maonkpi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `File_pengalihan_id_fkey` FOREIGN KEY (`pengalihan_id`) REFERENCES `_maonkpi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `File_persiapan_id_fkey` FOREIGN KEY (`persiapan_id`) REFERENCES `_maonkpi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `file_laporan`
--
ALTER TABLE `file_laporan`
  ADD CONSTRAINT `file_laporan_laporan_id_fkey` FOREIGN KEY (`laporan_id`) REFERENCES `laporan` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `indikator_kinerja`
--
ALTER TABLE `indikator_kinerja`
  ADD CONSTRAINT `indikator_kinerja_bidang_id_fkey` FOREIGN KEY (`bidang_id`) REFERENCES `bidang` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `indikator_kinerja_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `indikator_kinerja_primary_pic_id_fkey` FOREIGN KEY (`primary_pic_id`) REFERENCES `category_unit` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `indikator_kinerja_secondary_pic_id_fkey` FOREIGN KEY (`secondary_pic_id`) REFERENCES `units` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `jadwal`
--
ALTER TABLE `jadwal`
  ADD CONSTRAINT `jadwal_unit_id_fkey` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `jadwal_laporan`
--
ALTER TABLE `jadwal_laporan`
  ADD CONSTRAINT `jadwal_laporan_unit_id_fkey` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `jadwal_pencairan`
--
ALTER TABLE `jadwal_pencairan`
  ADD CONSTRAINT `jadwal_pencairan_unit_id_fkey` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `laporan`
--
ALTER TABLE `laporan`
  ADD CONSTRAINT `laporan_indikator_id_fkey` FOREIGN KEY (`indikator_id`) REFERENCES `indikator_kinerja` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `mata_anggaran`
--
ALTER TABLE `mata_anggaran`
  ADD CONSTRAINT `mata_anggaran_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `mata_anggaran_indicator_id_fkey` FOREIGN KEY (`indicator_id`) REFERENCES `indikator_kinerja` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `pagu_anggaran`
--
ALTER TABLE `pagu_anggaran`
  ADD CONSTRAINT `pagu_anggaran_unit_id_fkey` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `pembelian`
--
ALTER TABLE `pembelian`
  ADD CONSTRAINT `pembelian_pagu_id_fkey` FOREIGN KEY (`pagu_id`) REFERENCES `pagu_anggaran` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `pembelian_proker_id_fkey` FOREIGN KEY (`proker_id`) REFERENCES `_maonkpi` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `pembelian_rekening_id_fkey` FOREIGN KEY (`rekening_id`) REFERENCES `rekening` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `periode_spmu`
--
ALTER TABLE `periode_spmu`
  ADD CONSTRAINT `periode_spmu_jadwal_pencairan_id_fkey` FOREIGN KEY (`jadwal_pencairan_id`) REFERENCES `jadwal_pencairan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `progres_spj`
--
ALTER TABLE `progres_spj`
  ADD CONSTRAINT `progres_spj_proker_id_fkey` FOREIGN KEY (`proker_id`) REFERENCES `_maonkpi` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `rekening`
--
ALTER TABLE `rekening`
  ADD CONSTRAINT `rekening_jenis_id_fkey` FOREIGN KEY (`jenis_id`) REFERENCES `jenis_rekening` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_unit_id_fkey` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `review_program`
--
ALTER TABLE `review_program`
  ADD CONSTRAINT `review_program_proker_id_fkey` FOREIGN KEY (`proker_id`) REFERENCES `_maonkpi` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `spj`
--
ALTER TABLE `spj`
  ADD CONSTRAINT `spj_proker_id_fkey` FOREIGN KEY (`proker_id`) REFERENCES `_maonkpi` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `spmu`
--
ALTER TABLE `spmu`
  ADD CONSTRAINT `spmu_periode_spmu_id_fkey` FOREIGN KEY (`periode_spmu_id`) REFERENCES `periode_spmu` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `spmu_spp_id_fkey` FOREIGN KEY (`spp_id`) REFERENCES `spp` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `spp`
--
ALTER TABLE `spp`
  ADD CONSTRAINT `spp_periode_spmu_id_fkey` FOREIGN KEY (`periode_spmu_id`) REFERENCES `periode_spmu` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `units`
--
ALTER TABLE `units`
  ADD CONSTRAINT `units_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category_unit` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `units_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `users_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `visi_misi`
--
ALTER TABLE `visi_misi`
  ADD CONSTRAINT `visi_misi_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `visi_misi_unit_id_fkey` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `_maonkpi`
--
ALTER TABLE `_maonkpi`
  ADD CONSTRAINT `_maonkpi_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `_maonkpi_kpi_id_fkey` FOREIGN KEY (`kpi_id`) REFERENCES `indikator_kinerja` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_maonkpi_ma_id_fkey` FOREIGN KEY (`ma_id`) REFERENCES `mata_anggaran` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_maonkpi_spp_id_fkey` FOREIGN KEY (`spp_id`) REFERENCES `spp` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `_maonkpi_unit_id_fkey` FOREIGN KEY (`unit_id`) REFERENCES `units` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `_permissiontorole`
--
ALTER TABLE `_permissiontorole`
  ADD CONSTRAINT `_PermissionToRole_A_fkey` FOREIGN KEY (`A`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_PermissionToRole_B_fkey` FOREIGN KEY (`B`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `_rekeningtounit`
--
ALTER TABLE `_rekeningtounit`
  ADD CONSTRAINT `_RekeningToUnit_A_fkey` FOREIGN KEY (`A`) REFERENCES `rekening` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_RekeningToUnit_B_fkey` FOREIGN KEY (`B`) REFERENCES `units` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `_unittouser`
--
ALTER TABLE `_unittouser`
  ADD CONSTRAINT `_UnitToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `units` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_UnitToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
