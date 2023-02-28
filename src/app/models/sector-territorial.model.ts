import { Base } from './base.model';
import { IdTextPair } from './idtextpair.model';
import {CantidadComoIdTextPair, newCantidadComoIdTextPair,} from './cantidad.model';

export interface SectorTerritorial extends Base {
    organizacion: IdTextPair | null;
    sectorTerritorial: IdTextPair | null;
    clasificacion: IdTextPair | null;
    hc: CantidadComoIdTextPair;
}

export const newSectorTerritorial = (valores?: {
    id?: number;
    organizacion?: IdTextPair;
    hc?: CantidadComoIdTextPair;
    sectorTerritorial: IdTextPair;
    clasificacion: IdTextPair;
}): SectorTerritorial => {
    return {
        id: valores?.id ?? 0,
        organizacion: valores?.organizacion ?? null,
        sectorTerritorial: valores?.sectorTerritorial ?? null,
        clasificacion: valores?.clasificacion ?? null,
        hc: valores?.hc ?? newCantidadComoIdTextPair(),
    };
};