/*The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
*/

class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
     static getPG(){
      return arr.filter(movie => movie.rating=="PG")
    }
}
var arr=[new movie("a","studio-1","PG"),
         new movie("b","studio-2","PG13"),
         new movie("c","studio-3","R"),
         new movie("d","studio-4","PG")]
         console.log(movie.getPG(arr))