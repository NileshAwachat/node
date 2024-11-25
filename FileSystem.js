// Common File System Operations

// fs - filesystem


// Synchronous Read: Blocking, the code execution waits until the file is fully read.


const fs = require('fs');

// try { const data = fs.readFileSync('example.txt', 'utf8');
//      console.log('File content:', data); 
//     } 
//     catch (err) { console.error('Error reading file:', err); } 


// Asynchronous Read: Non-blocking, the callback is invoked once the file is read.



    // fs.readFile('example.txt', 'utf-8', (err, data) => {
    //      if (err) { console.error('Error reading file:', err);
    //      return;
    //      }
    //       console.log('File content:', data); 
    //     }); 


// Synchronous Write: Blocking, the file content is written and the code execution waits until it's done.



// try { fs.writeFileSync('createfile.txt','Hello, world!');
//      console.log('File written successfully'); } 
//      catch (err) { console.error('Error writing to file:', err); } 



    //  Asynchronous Write: Non-blocking, data is written to the file and the callback is invoked after the operation is complete.

    //  fs.writeFile('example.txt', 'Hello, world!', (err) => {
    //      if (err) { console.error('Error writing to file:', err); 
    //         return; } console.log('File written successfully'); }); 


            // 3. Appending to Files

// To append data to an existing file, you can use fs.appendFile() (asynchronous) or fs.appendFileSync() (synchronous).

// Synchronous Append:



// try { fs.appendFileSync('example.txt', ' Appending more text and so on....');
//      console.log('Text appended to file'); }
//       catch (err) { console.error('Error appending to file:', err); } 

// Asynchronous Append:

// javascript

// Copy code

// fs.appendFile('example.txt', ' continou', (err) => {
//      if (err) {
//          console.error('Error appending to file:', err); 
//         return; } 
//         console.log('Text appended to file'); }); 
