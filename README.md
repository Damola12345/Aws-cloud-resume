# Aws-cloud-resume Frontend

How to build a free stactic resume site with AWS s3,cloudfront,R53

# CI/CD

continuous integration and continuous delivery or continuous deployment. CI/CD bridges the gaps between development and operation activities by enforcing automation in building, testing and deployment of applications.
Detailed in the .github/workflows/frontend.yml is the GitHub Actions workflow that syncronizes this repository's contents with the S3 bucket where the website is served from. On a push to the master branch, it uses the access keys stored with GitHub Secrets to authenticate against the AWS infrastructure and simply pushes the files to S3.

my website https://www.arteryventure.com/
