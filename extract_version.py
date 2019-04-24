import re
import json


def extract_version(filename): # str -> str
    with open(filename, "r") as file_obj:
        filecontent = file_obj.read()
    capture = re.search(r"\@version.*(?P<version>\d.\d.\d)", filecontent)
    return capture.group("version")


version_isis = extract_version("dark-theme-isis-tub.user.css")
version_moses = extract_version("dark-theme-moses-tub.user.css")

versions = {
    "versionDarkThemeIsisTub": version_isis,
    "versionDarkThemeMosesTub": version_moses
}

with open("versions.json", "w") as file_obj:
    json.dump(versions, file_obj, indent=4)
