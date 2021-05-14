# GetByCountry Id

> ## Success Case:
1. ✅ Delete from local database with method **DELETE** in **/api/movie/:id**
1. ✅ Check if was admin user make the call
1. ✅ Pass userId
1. ✅ Delete movieData by id
1. ✅ Return 200

> ## Exceptions:
1. ✅ Return 404 if api does not exist
1. ✅ Return 403 if dont have the rigth credentials
1. ✅ Return error 500 if have some error to call