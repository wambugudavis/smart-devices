 # Smart Devices API Specifications
 
 ## Considerations for your backend with [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
 
 If the backend is about to run on a different host/port than the frontend, make sure to handle `OPTIONS` too and return correct `Access-Control-Allow-Origin` and `Access-Control-Allow-Headers` (e.g. `Content-Type`).
 Add an exception or rules to [``config/cors.js``](https://github.com/wambugudavis/smart-devices/blob/master/config/cors.js)
 
 ### Seeded Manufacturers
 
 ```JSON
 [
     {
         "id": 1,
         "name": "Muthaiga Industrials"
     },
     {
         "id": 2,
         "name": "Other"
     }
 ]
 ```
 
 ### Sample Single Device Object
 
 ```JSON
{
        "id": 19,
        "updated_at": "2020-03-06 23:47:39",
        "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u",
        "manufacturer": {
            "id": 1,
            "name": "Muthaiga Industrials"
        }
    }
 ```
 
 ### Sample Multiple Devices
 
 ```JSON
[
    {
        "id": 19,
        "updated_at": "2020-03-06 23:47:39",
        "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u",
        "manufacturer": {
            "id": 1,
            "name": "Muthaiga Industrials"
        }
    },
    {
        "id": 20,
        "updated_at": "2020-03-06 23:48:57",
        "description": "tetur adipiscing elit. Pellentesque in ligula vitae sem porta laoreet. In imperdiet, arcu et blandit fringilla, libero leo feugiat dui, vitae porta metus nunc finibus ",
        "manufacturer": {
            "id": 2,
            "name": "Other"
        }
    },
    {
        "id": 21,
        "updated_at": "2020-03-07 00:12:24",
        "description": "orbi tempus fermentum elit. Cras sit amet leo sodales, ultrices velit at, dapibus neque. Proin vestibulum sem non rutrum luctus. Integer malesuada lacus et blandit luctus. Proin nec ulla",
        "manufacturer": {
            "id": 1,
            "name": "Muthaiga Industrials"
        }
    }
]
 ```

 
 ## Endpoints:
 
 ### Create new Device:
 
 `POST /api/smart-devices`
 
 Example request body:
 ```JSON
 {
 	"manufacturer_id": 1,
 	"description": "At veroculpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
 }
 ```
 
 Returns new device created. Status `200`
 
 Required fields: `manufacturer_id`, `description`
 
  ### Fetch All Devices:
  
  `GET /api/smart-devices`
  
  Returns all devices created in an `Array`. Status `200`
  
   ### Fetch Device by Device ID:
   
   `GET /api/smart-devices/:id`
   
   Returns single device `Object`. Status `200`
   
  ### Update Device:
  
  `PUT /api/smart-devices/:id`
  
  Example request body:
  ```JSON
  {
  	"manufacturer_id": 1,
  	"description": "Updated description"
  }
  ```
  
  Returns status `204`
  
  Required fields: `manufacturer_id`, `description`

 ### Delete Device:
 
 `DELETE /api/smart-devices/:id`
 
 Returns status `204`
 
  ### Fetch all seeded Manufactures:
  
  `GET /api/manufacturers`
  
  Returns manufacturers `Array`. Status `200`
  
