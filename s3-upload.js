require('dotenv').config({path: 'variables.env'});
const fs = require('fs');
const AWS = require('aws-sdk');
// Set the Region 
AWS.config.update({
    region: 'us-east-1'
});


//config AWS SDK
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

//set array of files
const fileArray = [
    {
        filename: process.env.CSS_FILENAME,
        s3Path: process.env.CSS_S3_PATH, 
        localfilepath: process.env.CSS_LOCAL_PATH, 
        contentType: 'text/css',
        type: 'css'
    },
    {
        filename: process.env.JS_FILENAME, 
        s3Path: process.env.JS_S3_PATH,
        localfilepath: process.env.JS_LOCAL_PATH,
        contentType: 'application/javascript',
        type: 'js'
    },
    {
        filename: 'loginbundle.js', 
        s3Path: process.env.JS_S3_PATH,
        localfilepath: './public/js/loginbundle.js',
        contentType: 'application/javascript',
        type: 'js'
    }
]

//function to upload array of files
fileArray.map(file => {
    const fileContent = fs.readFileSync(file.localfilepath);
    
    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: file.s3Path + '/' + file.filename,
        Body: fileContent,
        ACL:'public-read',
        ContentType: file.contentType
    }

    //upload to s3
    s3.upload(params, function (err, data) {
        if (err) {
            throw err
        }
        console.log(`Your file has been uploaded successfully. ${data.Location}`);
    })

})