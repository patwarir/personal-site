from pathlib import Path
from os import linesep
from typing import List

def check_for_dockerignore() -> bool:
    return Path("./src/site/.dockerignore").exists()

def generate_dockerignore() -> None:
    def process_lines(lines: List[str]) -> List[str]:
        return_lines: List[str] = []
        for line in lines:
            if len(line) > 0 and not line.isspace() and not line.startswith("#"):
                return_lines.append("**/" + line)
            else:
                return_lines.append(line)
        return return_lines

    try:
        with open("./.gitignore", "r") as gitignoreFile:
            gitignoreLines = process_lines(gitignoreFile.readlines())
        with open("./custom.dockerignore", "r") as customDockerignoreFile:
            customDockerignoreLines = process_lines(customDockerignoreFile.readlines())

        dockerignoreLines: List[str] = []
        dockerignoreLines.extend(customDockerignoreLines)
        dockerignoreLines.append(linesep)
        dockerignoreLines.extend(gitignoreLines)

        with open("./src/site/.dockerignore", "w") as dockerignoreFile:
            dockerignoreFile.writelines(dockerignoreLines)

    except OSError as e:
        print("File: \"" + e.filename + "\" does not exist!")

def main() -> None:
    if check_for_dockerignore():
        print("File: \"./src/site/.dockerignore\" already exists!")
        regenerateInput = input("Would you like to regenerate it? [y/n] ")
        if regenerateInput == "y":
            generate_dockerignore()
        elif regenerateInput != "n":
            print("Invalid token!")
    else:
        generate_dockerignore()

if __name__ == "__main__":
    main()
