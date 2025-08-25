---
title: Lesson 2: Monitoring CI/CD
description: Learn how to monitor, debug, and run tests in CI/CD workflows using GitHub Actions for App Builder Apps.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- CI/CD
# --- FAQs ---
faqs:
- question: How do I monitor GitHub Actions workflows in my repository?
  answer: You can monitor workflows directly on the GitHub Actions tab at https://github.com/<org>/<project_name>/actions.
- question: What should I do if a GitHub action job fails due to missing secrets?
  answer: Define the required secrets in your repository settings and then re-run the failed job using the "Re-run all jobs" button.
- question: How can I run tests automatically on pull requests?
  answer: Configure a GitHub action like `pr_test.yml` to run `aio app test` whenever a pull request is submitted.
- question: How do I deploy my app to production using GitHub Actions?
  answer: Perform a GitHub release in your project repository to trigger the production deploy action relying on the `release` event.
- question: Can I debug GitHub Actions jobs locally?
  answer: No, jobs run in the cloud; however, you can debug by viewing run logs and enabling verbose logging as detailed in GitHub documentation.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
title: 'Lesson 2: Monitoring CI/CD'
---
# Lesson 2: Monitoring CI/CD

Once your GitHub actions and secrets are defined in the repository, you can monitor the workflow directly in GitHub on `https://github.com/<org>/<project_name>/actions`.

## Re-run failing jobs

In the previous lesson, the job failed because the GitHub secrets were missing. Go to the failed job named `AIO App CI / Deploy to Stage` and click on the `Build` step to open the logs:

![logs](assets/logs.png)

`AIO_RUNTIME_NAMESPACE must be passed to the action` is the thrown error message.

Now that the secrets are defined, you can try to rerun the job by clicking on Re-run all jobs to start the workflow. The job should complete and all steps should pass: 

![success](assets/success.png)

If you click on the Deploy step to open the logs, you'll see that your App Builder App was deployed successfully on your stage environment:

![deploy](assets/deploy.png)

## Run tests on pull request

The GitHub action defined in `pr_test.yml` will run `aio app test` any time a pull request is submitted to your project. 
By default, it will only run tests for the Runtime actions. If all the checks pass and the pull request is merged, the above workflow will run and deploy the App Builder App on the Stage environment. 

![tests](assets/tests.png)

## Continuous deployment

To deploy your App Builder App on the Production environment, perform a GitHub release in your project repository, since the GitHub action relies on the `release` event.

For convenience, we'll go to `https://github.com/<org>/<project_name>/releases/new` to perform a release. Fill out the release version, optionally add a release title and description, then click Publish Release. 

![release](assets/release.png)     

Finally, the Deploy GitHub action will run and deploy the App Builder App on the Production environment using the Production GitHub secrets:

![production](assets/production.png)

## Debugging jobs

GitHub Actions provide cloud based CI/CD features; therefore you can't debug jobs locally. GitHub provides tools to help you debug failing jobs.

Please find more information on how to view run logs, enable verbose logs, and more in the [GitHub documentation](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs).   
