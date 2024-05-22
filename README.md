Challenges I faced.

httpmodule
Initial Check for Product ID:

```
const id = query.id ? Number(query.id) : null;
```

checks if the query parameter id is provided and converts it to a number. If not, id is set to null.
The query.id always returns a string so convert to the required datatype
