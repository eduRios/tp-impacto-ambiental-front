import { Base } from './base.model';
import { IdTextPair } from './idtextpair.model';

export interface Direccion extends Base {
    calle: string;
    altura: string;
    localidad: IdTextPair | null;
}

export const newDireccion = (valores?: {
    id?: number;
    calle?: string;
    altura?: string;
    localidad?: IdTextPair;
}): Direccion => {
    return {
        id: valores?.id ?? 0,
        calle: valores?.calle ?? '',
        altura: valores?.altura ?? '',
        localidad: valores?.localidad ?? null,
    };
};