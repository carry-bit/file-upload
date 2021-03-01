const { globals, optionsDefault } = require('./variables');

/*
* First we have to extract all extensions
* from global.types array and then mimeTypes
* then find _extension in the new extracted
* extensions array's index then return
* them. */
function searchInExtensions(_extension) {
    let returnValue = false;

    // extract all extensions
    globals.types.forEach((type) => {
        console.log(type);
        type.mimeTypes.forEach((mimeType) => {
            if (mimeType.extension === _extension)
                returnValue = mimeType;
        })
    })

    return returnValue
 }

function organizeRules(_rules) {
    const rules = _rules.slice();
    const rulesCount = rules.count;

    rules.forEach((_rule) => {
        _rule.size.forEach((_size) => {
            let mimeType = searchInExtensions(_size.extension);
            if (mimeType !== false)
                return {
                    extension: mimeType.extension,
                    mimeType: mimeType.mimeType,
                    size: _size.size
                }
        })
    })
}

function parse(_options = null) {
    if (_options === null)
        return optionsDefault;

    // now we should parse options that user passed
    // and replace with default options if an option
    // does not exists.

    let tempOptions = {
        rules: [
            {
                type: "image",
                size: [
                    {
                        extension: "jpg",
                        size: 10
                    },
                    {
                        extension: "png",
                        size: 8
                    },
                    {
                        extension: "*",
                        size: 100
                    }
                ]
            }
        ]
    }

    organizeRules(tempOptions.rules);
}

exports.parse = parse;