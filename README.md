# Discord Emotes Downloader
This repository contains 2 scripts for downloading emojis from Discord servers. The scripts does not involve Discord API calls but rather rely solely on the Inspector function of the Desktop Discord client. This repository is licensed under MIT. 

# Dependency
## JS
- None
## Python ([Python 3](https://www.python.org/downloads/))

- requests

You can install by running `pip install requests` or `pip install -r requirements.txt` whichever fits you.

# Usage
1. In the Discord client, press `Ctrl + Shit + I` to open the Inspector. *(__Optional__: Press the vertical triple elipses, and on "Dock Side" choose the first one for a better experience)*
2. Navigate to "Console". Copy and paste the `emoji_dump.js` file's content. **__DO NOT HIT `ENTER` JUST YET__**
3. Inside the "Critical" block, specify the account on your desktop client's Nitro status. Now you can press `Enter`
4. In anywhere, open the emoji selector. Then open the Inspector again. 
5. Type `emoji_dump(result)`, hit `Enter`, repeat again for certainty, then scroll down two notches, and repeat. You can quickly recall the lass executed commands by pressing `Up`.
6. Repeat until you have gotten everything you want.
7. Type `print_result()`, hit `Enter`. It may lag for a second. Afterward give it a quick check if anything's missing. After checking, right click in the console, and choose `Save as...`, and save the file in the same folder as the scripts. 

and we're half way done. For the next steps, I recommend using [Notepad++](https://notepad-plus-plus.org/download/) rather thank using stock Notepad` due to display issues I've had with Notepad.

8. Open the log file in Notepad++. Remove any lines that doesn't have any relevance to the links (eg. "Console was cleared", "Done", "undefined", etc.) at the beginning and end of the log file.
9. Replace whatever garbo left with nothing (Leave the Replace field blank (In my case it's `c798872….js:49`)).
10. Save the log file. Don't forget to save.
11. In the script folder's window, type `cmd` into the address bar. This will open Command Prompt right at the current directory.
12. Type `python DiscordEmojiDownload.py` and follow the program. Images should start piling up. Note that you'll need to keep an eye on the script, as any error will result in the program terminating. In that case, remove all emoji downloaded from the log (using the Python script's output as reference)

# Legality 
<p align="center">
<img src="https://github.com/PythonTryHard/Discord_Emote_Downloader/blob/master/Screenshot_2019-06-20-07-09-19_1.png" width=360 height=192><br>
<i>Excerpt from the CS ticket regarding legality</i>
</p>

Due to concern of Discord's Terms of Service violation, I emailed their customer service with the script asking whether or not the use or the scripts are allowed. The result is ambiguous, as CS did not respond on whether or not it is against ToS to use the scripts, but they mentioned copyright infringement (possibly of the emotes) so please do not blame me or my code because of your wrong-doing because you have been personally warned and also been legally bound to follow MIT license.
