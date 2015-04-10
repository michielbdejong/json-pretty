# Simple module for producing nice JSON.

Similar to the https://www.npmjs.com/package/json-prettify CLI tool, except you can require this
one in your projects.

It also alphabetizes keys, which is useful for producing meaningful diffs.

If there are JSON files in your project, it makes sense to normalize them with this module, to
make version control easier.

# Usage

````js
> var jsonStringify = require('json-pretty');
undefined
> jsonStringify({a: 'b'})
'{\n  "a": "b"\n}'
> 
````
