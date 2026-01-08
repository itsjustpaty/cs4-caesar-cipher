console.log("script started");

const alpha = ["a","b","c","d","e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


function encrypt() {
    console.log("encrypt");
    //get messagetext style
    const messagetext = document.getElementById("messageInput").value;

    //get key value
    const key = document.getElementById("key").value;

    //create empty result string
    let result = "";
    //look through message characters
    for (let i = 0; i < alpha.length; i++)
        //get the current character (.charAt(i))

        //convert to lowercase (.toLowerCase())

        //convert to a number (alpha.indexOf(currentChar))

        //apply formula

        //convert new char number into character alpha[encryptedValue]
        

        //add encrypted character to a resut string

    //set encrypted message result text on string
}

function decrypt(){
    console.log("decrypt");
}