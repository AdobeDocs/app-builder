---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling 
---

# Lesson 2: Monitoring CI/CD

Once your GitHub actions and secrets are defined in the repository, you can monitor the workflow directly in GitHub on `https://github.com/<org>/<project_name>/actions`.

## Re-run failing jobs

In the previous lesson, the job failed because the GitHub secrets were missing. Go to the failed job named `AIO App CI / Deploy to Stage` and click on the `Build` step to open the logs:

![logs](assets/logs.png)

`AIO_RUNTIME_NAMESPACE must be passed to the action` is the thrown error message.

Now that the secrets are defined, you can try to rerun the job by clicking on Re-run all jobs to start the workflow. The job should complete and all steps should pass: 

![success](assets/success.png)

If you click on the Deploy step to open the logs, you'll see that your Firefly App was deployed successfully on your stage environment:

![deploy](assets/deploy.png)

## Run tests on pull request

The GitHub action defined in `pr_test.yml` will run `aio app test` anytime a pull request is submitted to your project. 
By default, it will only run the tests for the Runtime actions. If all the checks are passing and the pull request is merged, the above workflow will run and deploy the Firefly App on the stage environment. 

![tests](assets/tests.png)

## Continuous deployment

To deploy your Firefly App on the production environment, you'll have to perform a GitHub release in your project repository since the GitHub action relies on the `release` event.

For convenience, we'll go to `https://github.com/<org>/<project_name>/releases/new` to perform a release. Fill out the release version and optionally, you can add a release title and description then hit Publish release. 

![release](assets/release.png)     

Finally, the deploy GitHub action will run and deploy the Firefly App on the production environment using the production GitHub secrets.

![production](assets/production.png)

## Debugging jobs

GitHub Actions provide cloud based CI/CD features and therefore you can't debug jobs locally.
Fortunately, GitHub provides tools to help you debug failing jobs.

Please find more information on how to view run logs, enable verbose logs and more on the [GitHub documentation](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs).   
