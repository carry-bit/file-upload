/*
* Program's global variables
*/
let globals = {
    types: [
        {
            type: "image",
            mimeTypes: [
                {
                    extension: "bmp",
                    mimeType: "image/bmp"
                },
                {
                    extension: "gif",
                    mimeType: "image/gif"
                },
                {
                    extension: "ico",
                    mimeType: "image/vnd.microsoft.icon"
                },
                {
                    extension: "jpg",
                    mimeType: "image/jpeg"
                },
                {
                    extension: "jpeg",
                    mimeType: "image/jpeg"
                },
                {
                    extension: "png",
                    mimeType: "image/png"
                },
                {
                    extension: "svg",
                    mimeType: "image/svg+xml"
                },
                {
                    extension: "tif",
                    mimeType: "image/tiff"
                },
                {
                    extension: "tiff",
                    mimeType: "image/tiff"
                },
                {
                    extension: "webp",
                    mimeType: "image/webp"
                }
            ]
        },
        {
            type: "audio",
            mimeTypes: [
                {
                    extension: "aac",
                    mimeType: "audio/aac"
                },
                {
                    extension: "mid",
                    mimeType: "audio/midi"
                },
                {
                    extension: "midi",
                    mimeType: "audio/midi"
                },
                {
                    extension: "mp3",
                    mimeType: "audio/mpeg"
                },
                {
                    extension: "oga",
                    mimeType: "audio/ogg"
                },
                {
                    extension: "opus",
                    mimeType: "audio/opus"
                },
                {
                    extension: "wav",
                    mimeType: "audio/wav"
                },
                {
                    extension: "weba",
                    mimeType: "audio/webm"
                }
            ]
        },
        {
            type: "*",
            mimeTypes: [
                {
                    extension: "*",
                    mimeType: "application/octet-stream"
                }
            ]
        }
    ]
}

/*
* If no options passed by user this would be
* used as default options
*/
let optionsDefault = {
    method: "POST", // only POST or PUT
    fileName: null,
    headers: {
        "Content-Type": "multipart/form-data"
    },
}

exports.globals = globals;
exports.optionsDefault = optionsDefault;