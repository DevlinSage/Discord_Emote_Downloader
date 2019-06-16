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

function emoji_dump(){
    var previous_length = result.length
    for (i in document.documentElement.getElementsByClassName("emojiItem-109bjA")){
        // Getting emoji's link
        emoji_link = String(document.documentElement.getElementsByClassName("emojiItem-109bjA")[i]["outerHTML"]).slice(65,121);
        // Try to get name, if it's the error due to sth sth ignore
        try
        {
            emoji_name = String(document.documentElement.getElementsByClassName("emojiItem-109bjA")[i]["__reactInternalInstance$"]["key"]).split("-")[0]
        }
        catch(TypeError)
        {
            // Just ignore it
        }
        // Concatenate result into a smaller array
        emoji = [emoji_link, emoji_name]
        if ((emoji_link.slice(0,11) == "https://cdn") && !(searchForArray(result, emoji) >= 0))
        {
            result.push(emoji)
        }
    }
    var current_length = result.length
    var delta = current_length - previous_length
    return "Completed. Added " + delta + " emojis."
}