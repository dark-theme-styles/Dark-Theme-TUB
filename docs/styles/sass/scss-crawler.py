#python3
import os

valid_file_endings = ["scss"]

with open("main.scss", "w") as scssFile:
    for dirpath, dirs, files in os.walk("."):
        # ignore the current path where the script is placed
        if not dirpath == ".":
            # change the dir seperator
            dirpath = dirpath.replace("\\", "/")

            currentDir = dirpath.split("/")[-1]
            # filter out the valid ending scss
            commentPrinted = False
            for file in files:
                # if there is a file with more dots just focus on the last part
                fileEnding = file.split(".")[-1]
                if fileEnding in valid_file_endings:
                    if not commentPrinted:
                        print("/* {} */".format(currentDir))
                        print("/* {0} */".format(currentDir), file = scssFile)
                        commentPrinted = True
                    print("@import '{}/{}';".format(dirpath, file.split(".")[0][1:]))
                    print("@import '{0}/{1}';".format(dirpath, file.split(".")[0][1:]), file = scssFile)
