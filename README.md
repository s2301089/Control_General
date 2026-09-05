# Control_General  

- [https://s2301089.github.io/Control_General/book/](https://s2301089.github.io/Control_General/book/)  

## version  

バージョンは[tool.sh](./tool.sh)上部に記載。  
`cargo`の事前インストールは必須。`mdbook`等のインストールは`./tool.sh setup`で行う。  

```bash
cargo install --root "$TOOL_ROOT" --locked mdbook --version "$MDBOOK_VERSION"
cargo install --root "$TOOL_ROOT" --locked mdbook-admonish --version "$MDBOOK_ADMONISH_VERSION"
cargo install --root "$TOOL_ROOT" --locked mdbook-codename --version "$MDBOOK_CODENAME_VERSION"
cargo install --root "$TOOL_ROOT" --locked mdbook-image-size --version "$MDBOOK_IMAGE_SIZE_VERSION"
```  

## build and serve  

`build`や`serve`はすべて`./tool.sh`で行う。  

```bash
# build
./tool.sh build

# serve
./tool.sh serve

./tool.sh serve --open

# setup
./tool.sh setup
```  
