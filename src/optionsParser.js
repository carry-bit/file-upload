const {globals, optionVars} = require('./variables');

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
        type.mimeTypes.forEach((mimeType) => {
            if (mimeType.extension === _extension)
                returnValue = mimeType;
        })
    })

    return returnValue
}

function organizeRules(_rules) {
    const rules = _rules.slice();
    let returnValue = Array();

    rules.forEach((_rule) => {
        _rule.size.forEach((_size) => {
            let mimeType = searchInExtensions(_size.extension);
            if (mimeType !== false)
                returnValue.push({
                    extension: mimeType.extension,
                    mimeType: mimeType.mimeType,
                    size: _size.size
                });
        })
    })

    return returnValue;
}

function addToOption(_option) {
    optionVars[_option.key] = _option.value;
}

function organizeOptions(_options) {
    const options = {..._options};
    let returnValue = Object();

    console.log(Object.keys(options), Object.values(options))
}

function parse(_options = null) {
    if (_options === null)
        return optionVars;

    // now we should parse options that user passed
    // and replace with default options if an option
    // does not exists.

    let tempOptions = {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data"
        },
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

    const test = organizeRules(tempOptions.rules);

    organizeOptions(tempOptions)
}

exports.parse = parse;