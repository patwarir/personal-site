from pathlib import Path

import os
import subprocess

def check_for_dockerignore():
    return Path("./.Dockerignore").exists()

def generate_dockerignore():
    gitignoreText, customDockerignoreText = "", ""

    try:
        with open("./.gitignore", "r") as gitignoreFile:
            gitignoreText = gitignoreFile.read()
        with open("./custom.Dockerignore", "r") as customDockerignoreFile:
            customDockerignoreText = customDockerignoreFile.read()

        dockerignoreText = customDockerignoreText + os.linesep + gitignoreText

        with open("./.Dockerignore", "w") as dockerignoreFile:
            dockerignoreFile.write(dockerignoreText)
    except OSError as e:
        print("File: \"" + e.filename + "\" does not exist!")

def dockerignore_interactive():
    if check_for_dockerignore():
        dockerignoreFeedback = input("File: \"./.Dockerignore\" already exists. Would you like to delete and regenerate it? [y/n] ")
        if dockerignoreFeedback.lower() == "y":
            generate_dockerignore()
        elif dockerignoreFeedback.lower() == "n":
            return
        else:
            print("Invalid token!")
    else:
        generate_dockerignore()

def dockercompose_run():
    subprocess.run([ "docker", "compose", "up", "-d" ])

def main():
    dockerignore_interactive()
    dockercompose_run()

if __name__ == "__main__":
    main()
