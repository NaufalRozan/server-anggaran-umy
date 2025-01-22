import { Readable } from "stream";

export function fileToReadable(file: File): Readable {
    const readable = new Readable();
    readable._read = () => {}; // No-op
    readable.push(file);
    readable.push(null); // End the stream
    return readable;
}
