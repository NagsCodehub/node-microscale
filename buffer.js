// buffer object is used to work with binary streams of data
//represents lower level sequence of binary data

//once buffer is allocated it cannot be resized

//alloc creates filled buffer of certain size
var bufferalloc=Buffer.alloc(8);
console.log(bufferalloc);
//allocUnsafe will not fill the created buffer abd can have old and sensitive data
var mybuffer=Buffer.allocUnsafe(8);
console.log(mybuffer);
 mybuffer=Buffer.allocUnsafe(800).toString();
console.log(mybuffer);
//mybuffer.allocUnsafe(8).fill(); --fills the buffer

//buffer can be used to read image data from tcp stream/compressed file or any other form of binary data

