import { glumacDTO, glumciFilmDTO } from "../glumci/glumacCreationModel";
import { kinoDTO } from "../kino/kino-forma/kino-model";
import { projekcijaDTO } from "../projekcija/projekcija-model";
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
    kinoProjekcije:number[];
    
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
    kinoProjekcije:projekcijaDTO[];

       
}


export interface filmPostGetDTO{
   zanrovi: zanrDTO[];
   kina: kinoDTO[];
   kinoProjekcije:projekcijaDTO[];
       
}

export interface FilmPutGetDTO {
    film: filmDTO;
    odabraniZanrovi: zanrDTO[];
    neOdabraniZanrovi: zanrDTO[];
    odabranaKina: kinoDTO[];
    neOdabranaKina: kinoDTO[];
    glumci: glumciFilmDTO[];
    odabraneKinoProjekcije:projekcijaDTO[];
    neOdabraneKinoProjekcije:projekcijaDTO[];
}

export interface homeDTO {
    prikazuje_se: filmDTO[];
    uskoro: filmDTO[];
}