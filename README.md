# 22018990 / Web programming, Advanced - 2022/23 assignment




## Part 1

```
docker build -t awp_frontend .
docker run -ti -d --name awp_frontend1 -p 3000:3000 awp_frontend
```

```
docker build  --no-cache -t awp_backend .
docker run -ti -d --name awp_backend1 --net awp-net -p 8080:8080 awp_backend
```

```
docker build --no-cache -t awp_mongo .
docker build -t awp_mongo .
docker run -ti -d --name awp_mongo1 --net awp-net -p 5000:5000 awp_mongo
```

Create a user-defined bridge network
```
docker network create awp-net
```




The insert_data.sh provided on the documentation, is using a deprecated `db.collection.insert()` method.
See https://www.mongodb.com/docs/mongodb-shell/reference/compatibility/#std-label-compatibility .
Found also while testing the Mongodb container

```
...       {"text": "All of the above", "correct": false}
...     ]
...   }
... ])
DeprecationWarning: Collection.insert() is deprecated. Use insertOne, insertMany, or bulkWrite.
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("643bffc37f72c29d88ded329"),
    '1': ObjectId("643bffc37f72c29d88ded32a"),
    '2': ObjectId("643bffc37f72c29d88ded32b")
  }
}
```



```
MongooseError: Model.find() no longer accepts a callback
    at Function.find (...mongo/src/node_modules/mongoose/lib/model.js:2041:11)
    at ...mongo/src/server.js:33:11
    at Layer.handle [as handle_request] (...mongo/src/node_modules/express/lib/router/layer.js:95:5)
    at next (...mongo/src/node_modules/express/lib/router/route.js:144:13)
    at Route.dispatch (...mongo/src/node_modules/express/lib/router/route.js:114:3)
    at Layer.handle [as handle_request] (...mongo/src/node_modules/express/lib/router/layer.js:95:5)
```


```
MongooseError: Operation `answers_schemas.findOne()` buffering timed out after 10000ms
    at Timeout.<anonymous> (/home/andrea/uhi/course/UI111014_awp/assignment/assignment/awp_assignment/mongo/src/node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:185:23)
    at listOnTimeout (node:internal/timers:573:17)
    at process.processTimers (node:internal/timers:514:7)
/home/andrea/uhi/course/UI111014_awp/assignment/assignment/awp_assignment/mongo/src/node_modules/mongoose/lib/connection.js:755
    err = new ServerSelectionError();
          ^

```


## References

https://www.tutorialworks.com/container-networking/
