import { Base } from './base.model';
import { Direccion } from './direccion.model';

export interface Espacio extends Base {
    nombre: string;
    tipoEspacio: string;
    direccion: Direccion | null;
}

export const newEspacio = (valores?: {
    id?: number;
    nombre?: string;
    tipoEspacio?: string;
    direccion?: Direccion;
}): Espacio => {
    return {
        id: valores?.id ?? 0,
        nombre: valores?.nombre ?? '',
        tipoEspacio: valores?.tipoEspacio ?? '',
        direccion: valores?.direccion ?? null,
    };
};
