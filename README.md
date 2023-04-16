# 22018990 / Web programming, Advanced - 2022/23 assignment




## Part 1

```
docker build -t awp_frontend .
docker run -ti -d --name awp_frontend1 -p 3000:3000 awp_frontend
```

```
docker build -t awp_backend .
docker run -ti -d --name awp_backend1 -p 8080:8080 awp_backend
```

```
docker build --no-cache -t awp_mongo .
docker run -ti -d --name awp_mongo1 -p 5000:5000 awp_mongo
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

