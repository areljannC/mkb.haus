# Based on this guide: https://mechanicalkeyboards.com/switches/
# Note that this my first time doing web scraping... ever.
# I'm not an expert. I just do what I need to do.

import json
from bs4 import BeautifulSoup
from urllib.request import urlopen

# This is the web page you want to parse.
url = "http://mechanicalkeyboards.com/switches/"

# Open the web page.
page = urlopen(url)

# Read the page and decode to an HTML; don't know how this really works.
html = page.read().decode("utf-8")

# Parse HTML with BeatifulSoup.
soup = BeautifulSoup(html, "html.parser")

# Define key switch classes


class KeySwitch:
  def __init__(self, id, name, type, accentuationForce):
    self.id = id
    self.name = name
    self.type = type
    self.accentuationForce = accentuationForce


# Get the rows of mechanical switches.
key_switches_list = soup.find("div", class_="container switch_list")
key_switches_list_rows = key_switches_list.find_all("div", class_="row")

# Parse rows, create switch objects and add to switches list.
key_switches = []
for index, row in enumerate(key_switches_list_rows):
  list_items = list(filter(lambda s: s != '\n', row.div.ul.children))
  key_switch = KeySwitch(index, row.div.h2.string,
                         list_items[0].string, list_items[1].string)
  key_switches.append(key_switch)

key_switches_json = json.dumps(key_switches, default=lambda o: o.__dict__)

# Open/create `keySwitches.ts` file and push scraped data as an array.
key_switches_file = open(
    "./../../client/src/containers/BuildPage/components/Builder/data/keySwitches.ts", "w")
write = f"""import type {{ KeySwitchType }} from '../types'

  export const keySwitches: KeySwitchType[] = {key_switches_json}
"""
key_switches_file.write(write)
key_switches_file.close()