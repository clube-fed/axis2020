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

//object constructor for file objects
function fileObject(filename,s3Path,localfilepath,type) {
    this.filename = filename;
    this.s3Path = s3Path;
    this.localfilepath = localfilepath;

    if (type === 'css') {
        this.contentType = 'text/css',
        this.type = 'css'
    } 
    
    if (type === 'js') {
        this.contentType = 'application/javascript',
        this.type = 'js'
    }

}
//generate file array for s3
function genS3ArgArray(args) {
    const fileArray = [];
    if (args.length<=0) {
        let fileCSS = new fileObject(process.env.CSS_FILENAME,process.env.CSS_S3_PATH,process.env.CSS_LOCAL_PATH,'css');
        let fileJS = new fileObject(process.env.JS_FILENAME,process.env.JS_S3_PATH,process.env.JS_LOCAL_PATH,'js');
        let fileLogin = new fileObject('loginbundle.js',process.env.JS_S3_PATH,process.env.JS_LOCAL_PATH,'js');
        fileArray.push(fileCSS, fileJS, fileLogin);
    } else {
        //nothing = akk //css = cssfile //axisbundle = axisbundlejs // loginbundle = loginbundlejs // axis = css and axisbundle
        args.forEach(function (val) {
            switch(val) {
                case 'css': {
                    let file = new fileObject(process.env.CSS_FILENAME,process.env.CSS_S3_PATH,process.env.CSS_LOCAL_PATH,'css');
                    fileArray.push(file);
                    }
                break;
                case 'axisbundle': {
                    let file = new fileObject(process.env.JS_FILENAME,process.env.JS_S3_PATH,process.env.JS_LOCAL_PATH,'js');
                    fileArray.push(file);
                } 
                break;
                case 'loginbundle': {
                    let file = new fileObject('loginbundle.js',process.env.JS_S3_PATH,process.env.JS_LOCAL_PATH,'js');
                    fileArray.push(file);
                }
                break;
                case 'axis': {
                    let fileCSS = new fileObject(process.env.CSS_FILENAME,process.env.CSS_S3_PATH,process.env.CSS_LOCAL_PATH,'css');
                    let fileJS = new fileObject(process.env.JS_FILENAME,process.env.JS_S3_PATH,process.env.JS_LOCAL_PATH,'js');
                    fileArray.push(fileCSS, fileJS);
                }
                break; 
                default: {
                    let fileCSS = new fileObject(process.env.CSS_FILENAME,process.env.CSS_S3_PATH,process.env.CSS_LOCAL_PATH,'css');
                    let fileJS = new fileObject(process.env.JS_FILENAME,process.env.JS_S3_PATH,process.env.JS_LOCAL_PATH,'js');
                    let fileLogin = new fileObject('loginbundle.js',process.env.JS_S3_PATH,process.env.JS_LOCAL_PATH,'js');
                    fileArray.push(fileCSS, fileJS, fileLogin);
                }
            }
        });
    }
    //console.log(fileArray);
    return fileArray
}

//set args
const args = process.argv.slice(2);
//set array of files
const fileArray = genS3ArgArray(args);

//function to upload array of files
fileArray.map(file => {
    const fileContent = fs.readFileSync(file.localfilepath+'/'+file.filename);
    
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