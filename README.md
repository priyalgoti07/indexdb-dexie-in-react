# IndexedDB 
- IndexedDB is a key-value database in the browser. It is a NoSQL Database. It is transactional i.e. if a particular action falls within a transaction, none of the actions of that transaction is applied. This ensures the database remains consistent.
  
- IndexedDB is a low-level API for storing significant amounts of structured data, including files and blobs(Binary large object), in a web browser.It is a NoSQL database that allows you to store and retrieve data using key-value pairs or indexes.

- IndexedDB is designed to work asynchronously, meaning it doesn't block the main thread of the browser, making it suitable for web applications that need to handle large amounts of data or work offline.

- IndexedDB or Indexed Data Base is a web-based storage system that allows you to store and retrieve large amounts of structured data, primarily within web browsers.

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
| Asynchronous     | Yes                          | No                      | No                        | No                       |
| Use Case         | Large datasets, offline apps | Small key-value storage | Temporary session storage | No                       |

### When to Use IndexedDB
1) Offline-First Applications:
- IndexedDB is ideal for Progressive Web Apps (PWAs) that need to work offline and sync data when online.

2) Large Datasets:
- Use IndexedDB when you need to store large amounts of structured data in the browser.

3) Complex Queries:
- If your application requires complex queries or indexing, IndexedDB is a better choice than localStorage or sessionStorage.

4) File Storage: 
- IndexedDB can store binary data (e.g., files, blobs), making it suitable for applications that need to handle file uploads or media.

### Limitations of IndexedDB
1) Complex API:
- The IndexedDB API is low-level and can be verbose and difficult to use directly. Libraries like Dexie simplify its usage.

2) Browser Support:
- While IndexedDB is supported in all modern browsers, older browsers (e.g., Internet Explorer) may have limited or no support.

3) Storage Limits:
- The storage limit varies by browser and can be affected by user settings or device storage.

### Libraries to Simplify IndexedDB
To make working with IndexedDB easier, you can use libraries like:

- **Dexie**:  A wrapper around IndexedDB that provides a simpler, more intuitive API.
- **localForage**: A library that provides a localStorage-like API but uses IndexedDB under the hood.
- **PouchDB**: A database that syncs with CouchDB and uses IndexedDB for local storage.

In summary, IndexedDB is a powerful tool for web developers who need to store large amounts of structured data in the browser. It is particularly useful for offline-first applications, PWAs, and scenarios where traditional browser storage options like localStorage are insufficient.

# Dexie
- Dexie.js is a wrapper library for IndexedDB, designed to make it easier and more intuitive to work with IndexedDB in web applications. IndexedDB is a powerful but low-level API, and its raw usage can be verbose and complex. Dexie simplifies this by providing a clean, promise-based API that abstracts away much of the complexity of IndexedDB.

#### Key Features of Dexie
1) **Simplified API:**
- Dexie provides a more intuitive and developer-friendly API compared to the raw IndexedDB API.
- It uses promises for asynchronous operations, making it easier to work with compared to IndexedDB's event-based model
2) **Schema Definition:** 
- Dexie allows you to define a schema for your database, including tables (object stores), indexes, and versioning.
3) **CRUD Operations:**
- Dexie simplifies common database operations like Create, Read, Update, and Delete (CRUD) with easy-to-use methods.
4) **IndexedDB Features:**
- Dexie fully supports IndexedDB features like indexes, transactions, and cursors, but with a simpler API.
5) **Lightweight:**
- Dexie is lightweight and has no external dependencies.
6) **TypeScript Support:**
- Dexie has built-in TypeScript support, making it a great choice for TypeScript projects.
7) **Observable Queries:**
- Dexie supports live queries, which allow you to observe changes to the database in real-time.
8) **Cross-Browser Support:**
- Dexie works in all modern browsers that support IndexedDB.

### How Dexie Works
Dexie acts as a middle layer between your application and IndexedDB. It provides a higher-level abstraction while still leveraging the full power of IndexedDB.

#### Why Use Dexie?
1) **Ease of Use:**
- Dexie's API is much simpler and more intuitive than the raw IndexedDB API.

2) **Productivity:**
- Dexie reduces the amount of boilerplate code required to work with IndexedDB.

3) **Powerful Features:**
- Dexie supports advanced features like transactions, live queries, and schema upgrades.

4) Cross-Browser Compatibility:
- Dexie works in all modern browsers that support IndexedDB.

5) TypeScript Support:
- Dexie is a great choice for TypeScript projects.

#### Comparison: Dexie vs Raw IndexedDB
| Feature            | Dexie                       | 	Raw IndexedDB              | 
| :----------------- | :-------------------------- | :-------------------------- | 
| API Complexity     | Simple and intuitive        | Verbose and complex         | 
| Asynchronous Model | Promises                    | Event-based                 | 
| Schema Definition  | Easy and declarative        | Manual and error-prone      |
| Transactions       | Simplified with transaction | Manual transaction handling |
| Live Queries       | Supported                   | Not supported               |
| TypeScript Support | Built-in	                   | Manual type definitions     |

### When to Use Dexie
- You need to work with IndexedDB but want a simpler and more intuitive API.
- You want to handle schema upgrades and transactions easily.
- You need real-time updates (live queries) in your application.
- You are using TypeScript and want built-in type safety.

### Use Case for Offline Task Management Application
Imagine you’re building a web-based task management application. Users want to be able to create, update, and delete tasks, even when they’re not connected to the internet. IndexedDB can play a crucial role in making this happen.

1) **Offline Access:** When the user goes offline, they can still access and manage their tasks because the data is stored locally in IndexedDB. This means they can view, update, and delete tasks without an internet connection.

2) **Storing Task Data:** When users add tasks to your application, IndexedDB can be used to store these tasks on the user’s device. Each task could be represented as an object in the IndexedDB database. This allows the application to keep track of the tasks even when there’s no internet connection.

3) **Synchronization:** When the user comes back online, you can implement synchronization logic to update the remote server with the changes made while offline. IndexedDB provides a way to track changes that need to be synchronized with the server.

4) **Performance** IndexedDB is optimized for handling large amounts of data efficiently, making it suitable for applications that need to store and retrieve significant amounts of structured data quickly.

5) **Privacy:** data is stored locally on the user’s device, it provides a level of privacy and control to the user, as their data isn’t constantly transmitted to a remote server.

6) **Reduced Network Usage:** Storing data locally in IndexedDB reduces the need for frequent server requests, which can lead to a more responsive and efficient application, especially in situations with a slow or unreliable internet connection.

##### Implementation of IndexedDB with Dexie.js :

First let see what is Dexie.js and why it is important for IndexedDB implementation

implementation
Dexie.js is a JavaScript library that provides a higher-level, easier-to-use API for working with IndexedDB, the web-based storage system I mentioned earlier. IndexedDB itself can sometimes be complex and verbose to work with directly, so Dexie.js aims to simplify the process of working with IndexedDB by offering a more intuitive and developer-friendly interface.

###### Let perform crud operation using this dexie.js with React.js web application .

1) **Createtion** of react web app : you have to hit the command to create react web app here indexdb_dexie_tutorial is your react web app name you can choose any name here 

```bash
 yarn create vite indexdb-dexie-in-react
  cd indexdb-dexie-in-react
```

2) **Dexie.js**  installation in react web application .

if you ‘re using yarn then you can follow first command
```bash
 yarn add dexie 
  yarn add dexie-react-hooks
```
it is provide various kinds of hooks with help we can perform all kinds of operation related to index DB or index data base.

3) in this step you have to create db folder in src folder and again db.tsx under db folder basically it is database of our indexedDB
**db.tsx**
4) in fourth step we have to create page folder under src again we ‘ll create stduent.tsx file here we ‘ll make two component first is Student in which we ‘ll create students with name and age name and id ‘ll generate itself
**stduent.tsx**
in this component we ‘re taking two input and storing it in state as per dexie official document

after click on add button our addStudent asynchronous function ‘re calling where we ‘re using db.students.add(data) here db is our db and students is our table name add it function that take object data for store

not let see how to populate the store data and updating it also and at end we ‘ll see delation of all database .

5) in 5th step in same file ( Student.tsx ) have to create another component in which we ‘ll retrieve the all store database with useLiveQuery hooks provided by dexie-react-hooks under it we ‘ve to make a call back in which we use db which is our database imported at top from db.js file after after that db.students here student is our table name to convert inot array we can use toArray() function it all data ‘re stored in students variable which we ‘re maped at below with name and age
**StuentList.tsx**

probably you have noticed that we have made a button Edit with id button in mapped student list it after click on it take call updateStudent function that take individual student data under updateStudent db.students.put(data) here db is our database and students is our table same put is function provided by dexie.js that take data according table which we have stored corresponding to key value pair with id for identify that which id base data have to update but here we ‘re updating static data just for basic understanding which you can put dynamic data .

in this component there ‘re also a delete data base name button which calling clearAll() on click it deleting our whole database likewise there ‘re also db.delete() so here there ‘re not any table db is our database name and delete is function provided by dexie.js and it return promise we can use then and catch if it ‘ll get done then then block ‘ll execute otherwise catch block execute and after that we can also use finally block for further process if you wise to perform another action.

**Conclusion**: Dexie.js stands out as a powerful and versatile JavaScript library for simplifying and enhancing client-side database management within web applications. Its user-friendly API, built on top of IndexedDB, offers developers a seamless and efficient way to interact with databases while abstracting many of the complexities involved. Dexie.js provides a range of features, including asynchronous queries, transactions, versioning, and schema management, all of which contribute to a smoother development process and improved user experiences.

One of the significant strengths of Dexie.js is its performance optimization. By leveraging the native capabilities of IndexedDB and implementing techniques like batching operations, Dexie.js can efficiently handle large datasets and deliver responsive applications even in resource-constrained environments.




