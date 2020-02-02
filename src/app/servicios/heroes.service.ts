
import {Injectable}from'@angular/core';

@Injectable()
export class HeroesService{
    private heroes:Heroe[]=[
        {
          nombre: "Bad",
          bio: "Bad es el séptimo álbum de estudio del artista estadounidense Michael Jackson, publicado el 31 de agosto de 1987, con más de 34 millones de copias vendidas y cinco números uno en las listas de Estados Unidos (Billboard Hot 100), lo que lo hace uno de los álbumes más vendidos de todos los tiempos.",
          img: "assets/img/bad.jpg",
          aparicion: "1987-08-31",
          casa:"DC"
        },
        {
          nombre: "Michael",
          bio: "Michael es el primer álbum póstumo que contiene temas inéditos del cantante estadounidense Michael Jackson.1​2​3​4​ Es su séptimo álbum lanzado a través de Epic Records, el 10 de diciembre de 2010 en los Estados Unidos junto con Sony Music Entertainment.",
          img: "assets/img/michael.jpg",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Xscape",
          bio: "Xscape es el segundo póstumo, (y decimotercero en general) álbum de estudio de temas inéditos del cantante estadounidense Michael Jackson. Es su octavo álbum de estudio lanzado por Epic Records. Fue lanzado el 13 de mayo de 2014 en Epic Records y MJJ Music. ",
          img: "assets/img/xscape.jpg",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "History",
          bio: "HIStory: Past, Present and Future, Book I es el noveno álbum de estudio del cantante, compositor y bailarín estadounidense Michael Jackson, publicado el 20 de junio de 1995; actualmente es el disco doble más vendido de la historia, con más de 40 millones de copias en circulación.",
          img: "assets/img/history.jpg",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Dangerous",
          bio: "Dangerous es el octavo álbum de estudio del cantante estadounidense Michael Jackson, publicado el 26 de noviembre de 1991. Es el primer álbum tras el reinado de Quincy Jones como productor de Michael Jackson. Después de Quincy Jones, quedó fuera el interés por la melodía: Michael Jackson se centró en el ritmo.",
          img: "assets/img/dangerous.jpg",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "This Is It",
          bio: "Michael Jackson's This Is It (o simplemente This Is It) es una banda sonora de dos discos (publicada de manera póstuma) del cantante estadounidense Michael Jackson. Lanzado por MJJ Music el 26 de octubre de 2009,2​ This Is It presenta música lanzada anteriormente, así como seis grabaciones inéditas de Michael Jackson.",
          img: "assets/img/thisisit.jpg",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Invincible",
          bio: "Invincible es el décimo primer y último álbum de estudio en vida de Michael Jackson lanzado el 30 de octubre de 2001. El álbum cuenta con 16 canciones de las cuales You Rock My World y Butterflies son las canciones más reconocidas del álbum. Tiene el récord al disco con más dinero invertido en su producción, pues, Sony Music le pagó a Michael, 40 millones de dólares para su elaboración, y otros 25 millones de dólares para promocionarlo, pero Michael, desconoció que fue lo que pasó con ese dinero, ya que la promoción para el álbum fue demasiado pobre.",
          img: "assets/img/invincible.jpg",
          aparicion: "1974-11-01",
          casa: "Marvel"
        }
      ];
    
    
    constructor(){
        console.log("Servicio listo para usarse!!!!");
    }

    getHeroes():Heroe[]{
        return this.heroes;
    }
    getHeroe(idx:string){
      return this.heroes[idx];
    }


    buscarHeroes(termino:string){
      let heroesArr:Heroe[]=[];
      termino=termino.toLowerCase();

      for(let heroe of this.heroes){
        let nombre = heroe.nombre.toLowerCase();
        if(nombre.indexOf(termino)>=0 ){
          heroesArr.push(heroe)
        }
      }
      return heroesArr;
    }
}

export interface Heroe{
    nombre:string;
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
};