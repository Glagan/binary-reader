# Binary Reader for JavaScript/TypeScript

[![npm](https://img.shields.io/npm/v/@glagan/binary-reader)](https://www.npmjs.com/package/@glagan/binary-reader)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@glagan/binary-reader)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/glagan/binary-reader/.github/workflows/main.yml?branch=main)](https://github.com/glagan/binary-reader/actions)

Tool for reading binary data sequentially in JavaScript / TypeScript

Requires [DataView.getBigInt64 support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getBigInt64#browser_compatibility) for Int64/Uint64

## Installation

```bash
npm install @glagan/binary-reader
```

## Usage

```ts
import { BinaryReader } from '@glagan/binary-reader'

const data = new BinaryReader(uint8Array)

const version = data.readUint32()
const nameLen = data.readUint8()
const name = data.readArrayAsString(nameLen)
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](/LICENSE)
