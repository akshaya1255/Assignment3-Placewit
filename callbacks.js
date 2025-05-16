// task 1 - using callbacks
function download_data(url, callback){
    console.log(`starting download from ${url}..`);
    setTimeout(() => {
        const data = `Data from ${url}`;
        console.log("Download complete.");
        callback(null, data);
    }, 2000);
}

function write(data, callback){
    console.log("Starting to write data to file..");
    setTimeout(() => {
        const filename = "file.txt";
        console.log("Writing complete.");
        callback(null, filename);
    }, 2000);
}
function upload(filename, destination, callback){
    console.log(`Uploading ${filename} to ${destination}..`);
    setTimeout(() => {
        console.log("Upload Completed");
        callback(null, "success");
    }, 2000);
}

download_data("https://download.com", (err, data) => {
    if(err)return HTMLFormControlsCollection.error(err);
    write(data, (err, filename) => {
        if(err)return console.error(err);
        upload(filename, "https://upload.com", (err, result) => {
            if(err)return console.error(err);
            console.log(`All operations completed:${result}`);
        });
    });
});