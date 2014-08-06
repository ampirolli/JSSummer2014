/* 
 Create a simple Ad that will display on the page as just text in a div. 
 The Ad will be random using Math.random from the array length.

Requirements:
1. Create an array that has 5 ad JSON objects.
2. Use Math.random() with the array.length to get a random index.
3. Display the ad using innerHTML.
4. Replace the document.title with the ad followed by three periods …
5. Please add comments to explain how the code works and what it’s doing.
   Hint: No need to go crazy, just general things on the flow, one line
         comments are fine.

 */
var ads = [];

ads.push({"title" : "boats","desc" : "boats boats boats!"});
ads.push({"title" : "Tubeman","desc" : "Wacky Waving Inflatable Arm-Flailing Tubeman!"});
ads.push({"title" : "Covergirl","desc" : "Easy Breezy Beautiful Covergirl"});
ads.push({"title" : "Crystal Meth" ,"desc" : "Crystal Meth: not even once."});
ads.push({"title" : "Trix", "desc" : "Silly Rabbit! Trix are for kids!!"});

function dotdotdot( title )
{
    document.title = title + "...";
}

function random(max)
{
   return Math.floor(Math.random()*max);
}

var randIndex = random(ads.length);
console.log(randIndex);

dotdotdot(document.title = ads[randIndex].title);
div.innerHTML = ads[randIndex].desc;
