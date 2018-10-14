# S2

S2 is a system built to aleviate some of the administration for teachers in swedish schools.

# Structure

It is built for AWS with a 100% serverless mindset. The backend should consits mainly of dynamoDB tables, S3 buckets and lambda expressions(with API gateway). It stands to reason that a lot of internal communication will be done through SQS and SNS. SES will also be a requirement to get emails to and from the system.

All of this is close to impossible to maintain manually, and thus a cloudformation script will set up the environment.

# Code standard

The code should uphold as high a standard as I can create, and no code should go untested.

# Branch strategy

The repository will follow a slightly modified gitflow workflow.
The modifications is that no commits are to be made into a release branch. Instead hotfix branches should be made from the release branch and merged back into it using pull requests.

In the early stage where nothing is up and running, no release or master branch should exist. Intead `develop` should be seen as the latest and greatest
