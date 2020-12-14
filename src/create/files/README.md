SPISDK
======

Designer core packages

# Testing
Before running tests be sure you set the following ENV vars
```
# a valid auth token for https://staging.silcn.co:8000/
export $AUTH_TOKEN=<valid auth token (staging)>

# these values will be defaulted to the IDS 2015 if you do not set them to 2018
export IDS_EXECUTABLE='/Applications/Adobe InDesign CC Server 2018/InDesignServer.app/Contents/MacOS/InDesignServer'
export IDS_FONTS_DIR='/Applications/Adobe InDesign CC Server 2018/Fonts'

# AWS Creds
export AWS_ACCESS_KEY=<your key>
export AWS_SECRET_KEY=<your secret key>
export AWS_ASSET_STORAGE_BUCKET="node-staging-assets"
export AWS_REGION="us-east-1"
```
Note that the tests will set defaults for additional vars. See the individual `.sh` files in each module directory for specific variables.

Run `npm test`. This will build the entire core including node subfolders and run the test suites serially.
