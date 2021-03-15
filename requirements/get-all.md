# Getall covidData

> ## Success Case:
1. ✅ GetAll from local database with method **GET** in **/api/statistics**
1. ✅ Check if was admin user make the call
1. ✅ Its possible pass limit and offset to api and make pagination
1. ✅ Return all covidData
1. ✅ Return 200

> ## Exceptions:
1. ✅ Return 404 if api does not exist
1. ✅ Return 403 if dont have the rigth credentials
1. ✅ Return error 500 if have some error to call