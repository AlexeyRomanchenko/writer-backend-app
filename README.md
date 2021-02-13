# writer-backend-app
It is the backend application for writer's site.
At first, you should install node packages (npm install) . That command will search for package.json file and install all dependencies that are in "dependencies" property
And to launch it you have to type "node server.js". this command will execute server.js file and in that file our backend api will launch

#Bucket Policy

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::wyckoff-beta-website/*"
        }
    ]
}

#CORS policy
        [
{
"AllowedHeaders": [
"*"
],
"AllowedMethods": [
"PUT",
"GET",
"POST",
"DELETE"
],
"AllowedOrigins": [
"*"
],
"ExposeHeaders": []
}
]

#more properties

{
  "id" : "String",
  "name" : "String",
  "description" : "String",
  "createdDate" : "Timestamp",
  "version" : "String",
  "warnings" : [ "String" ],
  "binaryMediaTypes" : [ "String" ],
  "minimumCompressionSize" : "Integer",
  "apiKeySource" : "String",
  "endpointConfiguration" : {
    "types" : [ "String" ],
    "vpcEndpointIds" : [ "String" ]
  },
  "policy" : "String",
  "tags" : {
    "String" : "String"
  },
  "disableExecuteApiEndpoint" : "Boolean"
}