import { glumacDTO, glumciFilmDTO } from "../glumci/glumacCreationModel";
import { kinoDTO } from "../kino/kino-forma/kino-model";
import { zanrDTO } from "../zanrovi/zanr.model";

export interface filmCreationDTO{
    naziv:string;
    opis:string;
    poster:File;
    prikazujeSe:boolean;
    datumIzalska:Date;
    trailer:string;
    zanrovi: number[],
    kina: number[],
    glumci: glumciFilmDTO[];
    
    }
export interface filmDTO{
    id:number;
    naziv:string;
    opis:string;
    poster:File;
    prikazujeSe:boolean;
    datumIzalska:Date;
    trailer:string;
    zanrovi: zanrDTO[],
    kina: kinoDTO[],
    glumci: glumciFilmDTO[];

       
}


export interface filmPostGetDTO{
   zanrovi: zanrDTO[];
   kina: kinoDTO[];
       
}

export interface FilmPutGetDTO {
    film: filmDTO;
    odabraniZanrovi: zanrDTO[];
    neOdabraniZanrovi: zanrDTO[];
    odabranaKina: kinoDTO[];
    neOdabranaKina: kinoDTO[];
    glumci: glumciFilmDTO[];
}

export interface homeDTO {
    prikazuje_se: filmDTO[];
    uskoro: filmDTO[];
}