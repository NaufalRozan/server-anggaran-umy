import { FastifyInstance } from "fastify";
import { userSchema } from "./modules/user/user.schema";
import { unitSchema } from "./modules/unit/unit.schema";
import { permissionSchema } from "./modules/permission/permission.schema";
import { roleSchema } from "./modules/role/role.schema";
import { vmSchema } from "./modules/visi-misi/vm.schema";
import { kpiSchema } from "./modules/indikator-kinerja/kpi.schema";
import { maSchema } from "./modules/mata-anggaran/ma.schema";
import { rekeningSchema } from "./modules/rekening/rekening.schema";
import { pembelianSchema } from "./modules/pembelian/pembelian.schema";
import { dataUnitSchema } from "./modules/data-unit/du.schema";
import { bidangSchema } from "./modules/bidang/bidang.schema";
import { jrSchema } from "./modules/jenis-rekening/jr.schema";
import { authRoutes, userRoutes } from "./modules/user/user.route";
import unitRoutes from "./modules/unit/unit.route";
import bidangRoutes from "./modules/bidang/bidang.route";
import permissionRoutes from "./modules/permission/permission.route";
import roleRoutes from "./modules/role/role.route";
import vmRoutes from "./modules/visi-misi/vm.route";
import kpiRoutes from "./modules/indikator-kinerja/kpi.route";
import { maRoutes, matoIndicatorRoutes } from "./modules/mata-anggaran/ma.route";
import { rekeningRoutes } from "./modules/rekening/rekening.route";
import { pembelianRoutes } from "./modules/pembelian/pembelian.route";
import dataUnitRoutes from "./modules/data-unit/du.route";
import { jenisRekeningRoutes } from "./modules/jenis-rekening/jr.route";

export async function serverRoutes(server: FastifyInstance) {
    for (const schema of [
        ...userSchema,
        ...unitSchema,
        ...permissionSchema,
        ...roleSchema,
        ...vmSchema,
        ...kpiSchema,
        ...maSchema,
        ...rekeningSchema,
        ...pembelianSchema,
        ...dataUnitSchema,
        ...bidangSchema,
        ...jrSchema,
    ]) {
        server.addSchema(schema)
    }

    server.register(authRoutes, { prefix: 'api/v1/auth' })
    server.register(userRoutes, { prefix: 'api/v1/users' })
    // server.register(subUnitRoutes, { prefix: 'api/v1/sub-unit' })
    server.register(unitRoutes, { prefix: 'api/v1/unit' })
    server.register(bidangRoutes, { prefix: 'api/v1/bidang' })
    server.register(permissionRoutes, { prefix: 'api/v1/permissions' })
    server.register(roleRoutes, { prefix: 'api/v1/roles' })
    server.register(vmRoutes, { prefix: 'api/v1/visi-misi' })
    server.register(kpiRoutes, { prefix: 'api/v1/indicator' })
    server.register(maRoutes, { prefix: 'api/v1/mata-anggaran' })
    server.register(matoIndicatorRoutes, { prefix: 'api/v1/ma-to-indicator' })
    server.register(rekeningRoutes, { prefix: 'api/v1/rekening' })
    server.register(jenisRekeningRoutes, { prefix: 'api/v1/jenis-rekening' })
    server.register(pembelianRoutes, { prefix: 'api/v1/pembelian' })
    server.register(dataUnitRoutes, { prefix: 'api/v1/data-unit' })
}