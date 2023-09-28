/*The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
*/
class movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
var obj=new movie("aaaa","studio-1")
console.log(obj.rating)