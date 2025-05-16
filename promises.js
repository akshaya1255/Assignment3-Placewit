// task2 - using Promises
function download_data(url){
    console.log(`Starting downloading data form ${url}..`);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Downloading completed!");
            resolve(`Data from ${url}`);
        }, 2000);
    });
}

function write(data){
    console.log("Starting to write data into the file..");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Writing completed!");
            resolve("file.txt");
        }, 2000);
    });
}

function upload(filename, destination){
    console.log(`Uploading ${filename} to ${destination}..`);
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Uploading completed!");
            resolve("Success");
        }, 2000);
    })
}

download_data("https://download.com").then(data => write(data)).then(filename => upload(filename, "https://upload.com")).then(result => console.log(`All operations completed: ${result}`));
