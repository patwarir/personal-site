from pathlib import Path
from os import linesep

dockerignorePath = "./.dockerignore"
customDockerignorePath = "./custom.dockerignore"
gitignorePath = "./.gitignore"

def check_for_dockerignore() -> bool:
    return Path(dockerignorePath).exists()

def generate_dockerignore() -> None:
    def process_lines(lines: list[str]) -> list[str]:
        return_lines: list[str] = []
        for line in lines:
            if len(line) > 0 and not (line.isspace() or line.startswith("#")):
                return_lines.append("**/" + line)
            else:
                return_lines.append(line)
        return return_lines

    try:
        with open(gitignorePath, "r") as gitignoreFile:
            gitignoreLines = process_lines(gitignoreFile.readlines())
        with open(customDockerignorePath, "r") as customDockerignoreFile:
            customDockerignoreLines = process_lines(customDockerignoreFile.readlines())

        dockerignoreLines: list[str] = []
        dockerignoreLines.extend(customDockerignoreLines)
        dockerignoreLines.append(linesep)
        dockerignoreLines.extend(gitignoreLines)

        with open(dockerignorePath, "w") as dockerignoreFile:
            dockerignoreFile.writelines(dockerignoreLines)

    except OSError as e:
        print("File: \"" + e.filename + "\" does not exist!")

def main() -> None:
    if check_for_dockerignore():
        print("File: \"" + dockerignorePath + "\" already exists!")
        regenerateInput = input("Would you like to regenerate it? [y/N] ")
        if regenerateInput == "y":
            generate_dockerignore()
    else:
        generate_dockerignore()

if __name__ == "__main__":
    main()
