from pathlib import Path

import os
import subprocess

def check_for_dockerignore():
    return Path("./.dockerignore").exists()

def generate_dockerignore():
    gitignoreText, customDockerignoreText = "", ""

    try:
        with open("./.gitignore", "r") as gitignoreFile:
            gitignoreText = gitignoreFile.read()
        with open("./custom.dockerignore", "r") as customDockerignoreFile:
            customDockerignoreText = customDockerignoreFile.read()

        dockerignoreText = customDockerignoreText + os.linesep + gitignoreText

        with open("./.dockerignore", "w") as dockerignoreFile:
            dockerignoreFile.write(dockerignoreText)
    except OSError as e:
        print("File: \"" + e.filename + "\" does not exist!")

def dockerignore_interactive():
    if check_for_dockerignore():
        dockerignoreFeedback = input("File: \"./.dockerignore\" already exists. Would you like to delete and regenerate it? [y/n] ")
        if dockerignoreFeedback.lower() == "y":
            generate_dockerignore()
        elif dockerignoreFeedback.lower() == "n":
            return
        else:
            print("Invalid token!")
    else:
        generate_dockerignore()

def dockercompose_run():
    subprocess.run([ "docker-compose", "build", "--no-cache" ])
    subprocess.run([ "docker-compose", "up", "--no-build", "-d" ])

def dockercompose_interactive():
    dockercomposeRunFeedback = input("Would you like to run the application? [y/n] ")
    if dockercomposeRunFeedback.lower() == "y":
        dockercompose_run()
    elif dockercomposeRunFeedback.lower() == "n":
        pass
    else:
        print("Invalid token!")

def main():
    dockerignore_interactive()
    dockercompose_interactive()

if __name__ == "__main__":
    main()
