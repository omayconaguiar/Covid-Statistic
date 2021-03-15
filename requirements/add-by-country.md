# AddById covidData

> ## Success Case:
1. ✅ AddStatistics in local database with method **POST** in **/api/statistics/:id**
1. ✅ Check if was admin user make the call
1. ✅ Update a covidData by id in local database 
1. ✅ Return all covidData
1. ✅ Return 200

> ## Exceptions:
1. ✅ Return 404 if api does not exist
1. ✅ Return 400 if required object does not exist on body
1. ✅ Return 403 if dont have the rigth credentials
1. ✅ Return error 500 if have some error to call