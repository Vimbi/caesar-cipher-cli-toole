# Ciphering CLI Tool
## CLI tool that encode and decode a text by 3 substitution ciphers:
* [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)
* [Atbash cipher](https://en.wikipedia.org/wiki/Atbash)
* [ROT-8 as variation of ROT-13](https://en.wikipedia.org/wiki/ROT13)

CLI tool accept 3 options (short alias and full name):

1.  **-c, --config**: config for ciphers
Config is a string with pattern `{XY(-)}n`, where:
  * `X` is a cipher mark:
    * `C` is for Caesar cipher (with shift 1)
    * `A` is for Atbash cipher
    * `R` is for ROT-8 cipher
  * `Y` is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
    * `1` is for encoding
    * `0` is for decoding
2.  **-i, --input**: a path to input file (set path relative to the root directory)
3.  **-o, --output**: a path to output file (set path relative to the root directory)

For example, config `C1-C1-R0-A` means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"

## Details:

1. The task solved using only **pure Node.js**.
2. `Config` option is required and must match the pattern `{XY(-)}n`. In case of invalid confing **human-friendly** error would be printed in `stderr` and the process would exit with non-zero status code.
3. If any option is duplicated (i.e. `$ node index.js -c C1-C1-A-R0 -c C0`) then **human-friendly** error would be printed in `stderr` and the process would exit with non-zero status code.
4. If the input file option is missed - would used `stdin` as an input source.
5. If the output file option is missed - would used `stdout` as an output destination.
6. If the input and/or output file is given but doesn't exist or you can't access it (e.g. because of permissions or it's a directory) - **human-friendly** error would be printed in `stderr` and the process would exit with non-zero status code.
7. If passed params are fine the output (file or `stdout`) would contain transformed content of input (file or `stdin`).
8. For encoding/decoding **would used only the English alphabet**, all other characters would be kept untouched.
9. Used `streams` for reading, writing and transformation of text.
10. Each cipher is implemented in the form of a **transform stream**.
11. Streams are piped inside each other according to `config` (used `pipeline`)
12. Root file - `index.js`

**Usage example:**

```bash
$ node index.js -c C1-C1-R0-A -i input.txt -o output.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!`