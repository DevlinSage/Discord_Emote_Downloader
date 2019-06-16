# Discord Emotes Downloader
This repository contains 2 scripts for downloading emojis from Discord servers. The scripts does not involve Discord API calls but rather rely solely on the Inspector function of the Desktop Discord client. This repository is not licensed.

# Dependency
## JS
- None
## Python
- Python 3
- requests

# Usage
In the Discord client, press `Ctrl + Shift + I` to open up the Inspector (preferably you can undock the Inspector for a better experience). Navigate to the Console tab, enter `result = []`, open the JS script in notepad and `Copy-Paste` the entirety into the Console without **NO** modification, and run . Then, open up the emoji selector in the chat box, and run `emoji_dump()` in the Console. Because Discord only loads around 70 emojis at a time, after running `emoji_dump()`, user must scroll down the emoji selector **slowly** and rerun the command. It is advised to run the command twice before moving on as it may miss an emoji. In case of `Error 415`, that error is server-side so there's nothing you can do. For any other error, please panic. After finishing, run `clear()` then `for (i in result) {console.log(result[i]}` then save the Console's log to a file.

The user **MUST** clean up the log from any un-related lines at the start and end of the log file. This is critical as the program does not sanitize input.

Next, open a terminal and navigate to the folder of the scripts, and enter `pip install -U requests` to install the `requests` dependency. After everything has finished, run the script by typing `python DiscordEmojiDownload.py` and enter the log's location. The program will download everything automatically, however any exception will not be caught and if so, the program will exit prematurely. Note that the Python script will download to the directory of said script.