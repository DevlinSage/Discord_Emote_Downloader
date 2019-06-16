#  ---------------------------------
# |     Discord Emoji Downloader    |
# |         (Downloder side)        |
# |                                 |
# | Author: Larry Consola (PTH)     |
# | Dependency: requests (latest)   |
# |                                 |
# | Note: Before running the console|
# |       log obtained from the     |
# |       Inspector must be cleaned |
# |       of anything none-related  |
# |       as this script does not   |
# |       sanitize the input. Only  |
# |       leaving the brackets with |
# |       emoji link and name.      |
#  ---------------------------------

import requests
import time

# This simply GET the url and save it under name plus the url's extension. Phrasing.
def download_file(url, name):
    path = url
    local_filename = name + url.split('/')[-1][-4:]
    # NOTE the stream=True parameter below
    with requests.get(path, stream=True) as r:
        r.raise_for_status()
        with open(local_filename, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192): 
                if chunk: # filter out keep-alive new chunks
                    f.write(chunk)
                    # f.flush()
    return local_filename

# Ask user for the log file obtained from the Inspector
file = input("Please input the location of the Inspector log file: ")

# Opening the file and clean up the input for downloading
with open(file) as f:
    raw = f.readlines()
data = []
for i in raw:
    data.append(i.replace("\n", "").replace("[", "").replace("]", "").replace("\"", "").replace(" ", "").split(","))

# Main loop, download all emojis from the log file. Any error here will not be caught, therefore user must keep an eye on the script.
for i in data:
    download_file(i[0], i[1])
    print("Downloaded {}{}".format(i[1], i[0].split('/')[-1][-4:]) )
    time.sleep(0.05)
