# writer-backend-app
It is the backend application for writer's site.
At first, you should install node packages (npm install) . That command will search for package.json file and install all dependencies that are in "dependencies" property
And to launch it you have to type "node server.js". this command will execute server.js file and in that file our backend api will launch

#bucket policy

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::vincentwyckoff.com/*"
        }
    ]
}


#CORS Bucket Policy

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