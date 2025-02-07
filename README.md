# IndexedDB 
- IndexedDB is a key-value database in the browser. It is a NoSQL Database. It is transactional i.e. if a particular action falls within a transaction, none of the actions of that transaction is applied. This ensures the database remains consistent.
- IndexedDB is a low-level API for storing significant amounts of structured data, including files and blobs(Binary large object), in a web browser.It is a NoSQL database that allows you to store and retrieve data using key-value pairs or indexes.
- IndexedDB is designed to work asynchronously, meaning it doesn't block the main thread of the browser, making it suitable for web applications that need to handle large amounts of data or work offline.

### Key Features of IndexedDB
1) Asynchronous: 
  All operations in IndexedDB are asynchronous, meaning they don't block the main thread. This ensures that the user interface remains responsive.
2) NoSQL Database:
  Unlike traditional relational databases (e.g., SQL), IndexedDB is a NoSQL database. It stores data as key-value pairs or objects, and there are no tables or rows.
3) Persistent Storage:
  Data stored in IndexedDB persists even after the browser is closed or the page is refreshed. It is designed for long-term storage.
4) Large Storage Capacity:
  IndexedDB can store significantly more data compared to other browser storage options like localStorage or sessionStorage. The exact limit dependson the browser, but it is typically in the range of hundreds of megabytes or more.
5) Indexed Data:
  You can create indexes on specific properties of the stored objects, allowing for efficient querying and retrieval of data.
6) Transaction-Based: 
  All operations in IndexedDB are performed within transactions. This ensures data integrity and consistency, even if multiple operations are happening simultaneously.
7) Cross-Origin Support :
  IndexedDB can be used across different origins (domains), but access is restricted by the same-origin policy for security reasons.

### How IndexedDB Works
1) Database: 
 Each IndexedDB database is unique to a specific origin (protocol + domain + port). For example, https://example.com and http://example.com are considered different origins and will have separate databases.
 2) Object Stores: 
  Data in IndexedDB is stored in object stores, which are similar to tables in relational databases. Each object store contains a collection of key-value pairs.
  3) Keys: Every record in an object store is identified by a unique key. Keys can be auto-generated (e.g., auto-incremented numbers) or explicitly provided.
  4) Indexes : Indexes allow you to query data based on specific properties of the stored objects. For example, if you store user objects, you can create an index on the email property to quickly find users by their email.


# Comparison with Other Browser Storage Options
| Feature          | IndexedDB                    | localStorage            | sessionStorage            | Cookies                  |
| :--------------- | :--------------------------- | :-----------------------| :------------------------ | :----------------------- |
| Storage Capacity | Large (hundreds of MB)       | Small (5-10 MB)         | Small (5-10 MB)           | Very Small (4 KB)        |
| Persistence      | Persistent                   | Persistent              | Session-only              | Persistent (with expiry) |
| Data Type        | Structured (objects, blobs)  | Persistent              | Session-only              | Persistent (with expiry) |
| Asynchronous     | Yes                          | No                      | No                        | NO                       |
| Use Case         | Large datasets, offline apps | Small key-value storage | Temporary session storage | NO                       |

