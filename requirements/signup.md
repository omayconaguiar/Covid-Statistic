# Register

> ## Succes Case:
1. ✅ Receive a request **POST** on route **/api/signup**
1. ✅ Check requireds fields **name**, **email**, **password** e **passwordConfirmation**
1. ✅ Check **password** and **passwordConfirmation** are both
1. ✅ Check **email** is a valid email
1. ✅ Check if exist a user with exist email
1. ✅ Generate a cryptography password (cannot be decrypted)
1. ✅ Create a account with the give data, use the password encrypted
1. ✅ Generate access toke for a user id
1. ✅ Update data user with the access code
1. ✅ Return 200 with access token

> ## Exception:
1. ✅ Return error 400 if not exist
1. ✅ Return error 400 if **name**, **email**, **password** or **passwordConfirmation** does not inform by the client
1. ✅ Return error 400 if **password** e **passwordConfirmation** its not equal
1. ✅ Return error 400 if the field **email** for a invalid email
1. ✅ Return error 403 if exist already use email
1. ✅ Return error 500 if give error to create encrypted password
1. ✅ Return error 500 if give error to try create a user account
1. ✅ Return error 500 if give some error to create a access token
1. ✅ Return error 500 if der erro to update the user token generated