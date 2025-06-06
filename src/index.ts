export class BinaryReader<T extends Buffer | Uint8Array = Buffer> {
  binary: T
  offset: number = 0

  constructor(binary: T) {
    this.binary = binary
  }

  readUint8() {
    return this.binary[this.offset++].valueOf()
  }

  readUint8AsString() {
    return String.fromCharCode(this.binary[this.offset++].valueOf())
  }

  readUint8AsBool() {
    return this.binary[this.offset++].valueOf() !== 0
  }

  readUint16() {
    const v = new DataView(this.binary.buffer, this.binary.byteOffset + this.offset, 2).getUint16(0, true)
    this.offset += 2
    return v
  }

  readUint32() {
    const v = new DataView(this.binary.buffer, this.binary.byteOffset + this.offset, 4).getUint32(0, true)
    this.offset += 4
    return v
  }

  readUint64() {
    const v = new DataView(this.binary.buffer, this.binary.byteOffset + this.offset, 8).getBigUint64(0, true)
    this.offset += 8
    return v
  }

  readInt8() {
    const v = new DataView(this.binary.buffer, this.binary.byteOffset + this.offset, 1).getInt8(0)
    this.offset += 1
    return v
  }

  readInt16() {
    const v = new DataView(this.binary.buffer, this.binary.byteOffset + this.offset, 2).getInt16(0, true)
    this.offset += 2
    return v
  }

  readInt32() {
    const v = new DataView(this.binary.buffer, this.binary.byteOffset + this.offset, 4).getInt32(0, true)
    this.offset += 4
    return v
  }

  readInt64() {
    const v = new DataView(this.binary.buffer, this.binary.byteOffset + this.offset, 8).getBigInt64(0, true)
    this.offset += 8
    return v
  }

  readFloat32() {
    const v = new DataView(this.binary.buffer, this.binary.byteOffset + this.offset, 4).getFloat32(0, true)
    this.offset += 4
    return v
  }

  readFloat64() {
    const v = new DataView(this.binary.buffer, this.binary.byteOffset + this.offset, 8).getFloat64(0, true)
    this.offset += 8
    return v
  }

  readUint8Array(length: number) {
    return this.binary.subarray(this.offset, (this.offset += length))
  }

  readArrayAsString(length: number) {
    return this.binary.toString('utf8', this.offset, (this.offset += length))
  }
}
