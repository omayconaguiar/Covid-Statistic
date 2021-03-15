# Sync api

> ## Success Case:
1. ✅ Sync local database with method **POST** in **/api/sync**
1. ✅ Check if was admin user make the call
1. ✅ Populate database
1. ✅ Return 204

> ## Exceptions:
1. ✅ Return 404 if api does not exist
1. ✅ Return 403 if dont have the rigth credentials
1. ✅ Return error 500 if have some error to call