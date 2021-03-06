//  ---------------------------------
// |    Discord Emoji Downloader     |
// |     (Discord desktop side)      |
// |                                 |
// | Author: PythonTryHard           |
// | Dependency: None                |
// |                                 |
// | Note: Copy-paste without        |
// |       modifying anything.       |
//  ---------------------------------

// This function search for an array in a bigger array of arrays because in JS, [1,2] !== [1,2] because not reffing the same object
// Code pulled from StackOverflow (https://stackoverflow.com/questions/19543514/check-whether-an-array-exists-in-an-array-of-arrays)
function searchForArray(haystack, needle){
    var i, j, current;
    for(i = 0; i < haystack.length; ++i){
      if(needle.length === haystack[i].length){
        current = haystack[i];
        for(j = 0; j < needle.length && needle[j] === current[j]; ++j);
        if(j === needle.length)
          return i;
      }
    }
    return -1;
  }

// Prepare the result array and nitro status conversion
var result = []

// The main function.
function emoji_dump(result_array){
  // The emojis are stored under "emojiItem-109bjA".
  var emoji_list = document.documentElement.getElementsByClassName("emojiItem-109bjA")
  // Variable for deltaing the number of emoji dumped.
  var previous_length = result_array.length
  // Loop through all the emojis and grab the link and name.
  for (i in emoji_list){
	  // For some bizarre reason getting the link and name will always throw an error once the end of the list is reached.
    // I don't know, but for the UI/UX let's ignore the error for now.
    try{
        emoji_link = emoji_list[i]["style"]["background-image"].slice(5, -6)
    }
    catch(TypeError){
    	// Empty block of catch for professionally ignoring errors.
    }
    try{
        emoji_name = String(emoji_list[i]["__reactInternalInstance$"]["key"]).split("-")[0]
    }
    catch(TypeError){
        // Empty block of catch for professionally ignoring errors.
    }
    // Concatenate result into a smaller array rather than object because arrays are nicer after console.log()-ing
    emoji = [emoji_link, emoji_name]
    // If the emoji's link we got from above is a link to cdn, it will be kept as it's custom emote. Also a check to prevent duplication.
    if ((emoji_link.slice(0,11) == "https://cdn") && !(searchForArray(result_array, emoji) >= 0)){
        result_array.push(emoji)
    }
  }
  // More deltating
  var current_length = result_array.length
  var delta = current_length - previous_length
  // Return
  return "Completed. Added " + delta + " emojis."
}

// Final function to print everything.
function print_result(result_array)
{
  clear()
  for (i in result_array)
  {
    console.log(result_array[i])
  }
  return
}
