#!/usr/bin/env bash

set -e

FILE_NAME=$0
# 0.5.4はadmonishもなければcodenameもimage-sizeも対応していないからバージョンアップは断念 20260905
# MDBOOK_VERSION="0.5.4"
MDBOOK_VERSION="0.4.51"
# mdbook-admonish is suppoerted in mdbook 0.5.4
MDBOOK_ADMONISH_VERSION="1.20.0"
MDBOOK_CODENAME_VERSION="0.0.1"
MDBOOK_IMAGE_SIZE_VERSION="0.2.1"

PROJECT_ROOT="$(cd "$(dirname "$0")" && pwd)"
TOOL_ROOT="$PROJECT_ROOT/.tools/mdbook"

export PATH="$TOOL_ROOT/bin:$PATH"

check_version() {
    if ! command -v "$1" >/dev/null 2>&1; then
        return 1
    fi

    local required_version
    case "$(basename "$1")" in
        mdbook)
            required_version=v"$MDBOOK_VERSION"
            ;;
        mdbook-admonish)
            required_version="$MDBOOK_ADMONISH_VERSION"
            ;;
        mdbook-codename)
            required_version="$MDBOOK_CODENAME_VERSION"
            ;;
        mdbook-image-size)
            required_version=v"$MDBOOK_IMAGE_SIZE_VERSION"
            return 0  # mdbook-image-size does not support version check
            ;;
        *)
            echo "Unknown command: $1"
            return 1
            ;;
    esac

    local version
    version=$("$1" --version | awk '{print $2}')

    [ "$version" = "$required_version" ]
}

setup() {
    mkdir -p "$TOOL_ROOT"

    cargo install --root "$TOOL_ROOT" --locked mdbook --version "$MDBOOK_VERSION"
    cargo install --root "$TOOL_ROOT" --locked mdbook-admonish --version "$MDBOOK_ADMONISH_VERSION"
    cargo install --root "$TOOL_ROOT" --locked mdbook-codename --version "$MDBOOK_CODENAME_VERSION"
    cargo install --root "$TOOL_ROOT" --locked mdbook-image-size --version "$MDBOOK_IMAGE_SIZE_VERSION"

    echo ""
    echo "Setup completed."
    echo ""
}


check_environment() {
    if ! check_version "$TOOL_ROOT/bin/mdbook"; then
        echo "Error: mdBook $MDBOOK_VERSION is required. Now mdBook $($TOOL_ROOT/bin/mdbook --version | awk '{print $2}') is installed."
        echo "Run: $FILE_NAME setup"
        exit 1
    else
        echo "mdBook version is correct."
    fi

    if ! check_version $TOOL_ROOT/bin/mdbook-admonish; then
        echo "Error: mdbook-admonish $MDBOOK_ADMONISH_VERSION is required. Now mdbook-admonish $($TOOL_ROOT/bin/mdbook-admonish --version | awk '{print $2}') is installed."
        echo "Run: $FILE_NAME setup"
        exit 1
    else
        echo "mdbook-admonish version is correct."
    fi

    if ! check_version $TOOL_ROOT/bin/mdbook-codename; then
        echo "Error: mdBook-codename $MDBOOK_CODENAME_VERSION is required. Now mdBook-codename $($TOOL_ROOT/bin/mdbook-codename --version | awk '{print $2}') is installed."
        echo "Run: $FILE_NAME setup"
        exit 1
    else
        echo "mdBook-codename version is correct."
    fi

    # image-sizeは--versionがないのでバージョンチェック不可

    if ! check_version $TOOL_ROOT/bin/mdbook-image-size; then
        echo "Error: mdBook-image-size $MDBOOK_IMAGE_SIZE_VERSION is required. Now mdBook-image-size $($TOOL_ROOT/bin/mdbook-image-size --version | awk '{print $2}') is installed."
        echo "Run: $FILE_NAME setup"
        exit 1
    else
        echo "mdBook-image-size version is correct."
    fi

    cd "$PROJECT_ROOT"
    echo "changed current directory to $PROJECT_ROOT"
    echo ""
}

case "$1" in
    setup)
        setup
        ;;
    build)
        check_environment
        $TOOL_ROOT/bin/mdbook build
        ;;
    serve)
        check_environment
        $TOOL_ROOT/bin/mdbook serve $2
        ;;
    *)
        echo "Usage: $0 {setup|build|serve}"
        exit 1
        ;;
esac
