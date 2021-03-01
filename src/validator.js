const { globals } = require('./variables');

function validFileType(_fileType) {
    if (globals.acceptedFileTypes)
        return globals.acceptedFileTypes.includes(_fileType);
    else
        return true;
}

function validFileExtension(_fileExtension) {
    if (globals.acceptedFileExtensions)
        return globals.acceptedFileExtensions.includes(_fileExtension);
    else
        return true;
}

function validFileSize(_fileSize) {
    if (globals.acceptedFileSizes)
        return globals.acceptedFileSizes.includes(_fileSize);
    else
        return true;
}

exports.validFileType = validFileType;
exports.validFileExtension = validFileExtension;
exports.validFileSize = validFileSize;