
# Comparison with Other Browser Storage Options
| Feature          | IndexedDB                    | localStorage            | sessionStorage            | Cookies                  |
| Storage Capacity | Large (hundreds of MB)       | Small (5-10 MB)         | Small (5-10 MB)           | Very Small (4 KB)        |
| Persistence      | Persistent                   | Persistent              | Session-only              | Persistent (with expiry) |
| Data Type        | Structured (objects, blobs)  | Persistent              | Session-only              | Persistent (with expiry) |
| Asynchronous     | Yes                          | No                      | No                        | NO                       |
| Use Case         | Large datasets, offline apps | Small key-value storage | Temporary session storage | NO                       |