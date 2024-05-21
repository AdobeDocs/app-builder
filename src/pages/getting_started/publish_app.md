---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: Publishing Your First App Builder Application
---

# Publishing Your First App Builder Application

In this tutorial, we'll guide you through the following steps to give you an introduction on how to publish your first App Builder Application. 
After you deployed your application, you need to go through the 3 steps below to publish your SPA
1. Submit for publishing approval [Adobe Developer Console](/console)
2. Review and approve the app in [My Exchange](https://exchange.adobe.com/my-exchange.html)
3. After approval, your app will be available at [Adobe Experience Cloud](https://experience.adobe.com)

## 1: Project approvals (Console Part)

Once you have completed development on your project, and deploy your app in the Production workspace,your application is ready for approval. 

**App Builder applications:** Projects built using the App Builder template are built by an organization for use within that organization. Therefore, App Builder applications require approvals by the enterprise organization administrator only. 
    
### App Builder applications approval process

Once you have completed development on an App Builder application, it is time to submit the application to your administrators for review and approval.

The final app is based on the *Production* workspace, therefore it is important to ensure that the production workspace contains all of the necessary APIs, Events, and Runtime code that it needs before submitting for approval.

To begin the approval process, navigate to the *Production* workspace and select **Submit for approval** in the top-right corner of the screen or select **Approval** in the left navigation.

![](../images/approval-production-overview.png)

On the *Approval* screen you will be presented with the **App Submission Details** form. These details will be visible to people using your app and administrators reviewing your application.

Once the submission details have been completed, select **Submit** to begin the approval process.

![](../images/approval-app-submission-details.png)

You will be returned to the *Approval* screen, where the *Status* of your application should now be "In Review".

![](../images/approval-in-review.png)

Following a review by your organization administrators, your application will either be approved and published or rejected. If the application is rejected, your admin will be able to include a note telling you what went wrong, allowing you to fix the error and submit for approval again.

![](../images/approval-app-rejected.png)

### Published app

After your application has been submitted for approval, the admin could see your app pending for review in Adobe Exchange. The next section will describe admin approval flow from My exchange. From console side, once an application has been approved, either by internal reviewers, its *Status* will be updated to "Published" and the application will be available for use by employees within your enterprise organization.

![](../images/approval-published.png)

## 2: Administrator review of your app (MyExchange Part)

Once an application has been submitted for approval, your organization administrators will see an app in My Exchange -> Experience Cloud Apps and you will see your submitted apps under the pending review status.

![](../images/approval-myexchange.png)

The reviewer could review this app, and either approve it or reject it. If the application is rejected, your admin will be able to include a note telling you what went wrong, allowing you to fix the error and submit for approval again.

![](../images/approval-myexchange-review.png)

After approve the app, you will see the app in the approved section. The reviewer can later revoke this app to unpublish the app. The owner of the app could re-submit the application for review.

![](../images/approval-myexchange-revoke.png)


## 3: Check your published app at Experience Cloud

Once the reviewer approve your application, you will received an email notification. and your app will show up at [Adobe Experience Cloud](https://experience.adobe.com)

![](../images/approval-myapp-home.png)

Click on `App Builder Apps` to discover the applications published for your organization.

![](../images/approval-myapp-customapps.png)



# Publishing your headless App Builder App

The `App Builder Apps` [Adobe Experience Cloud](https://experience.adobe.com) only lists App Builder Apps that are SPAs. If you publish a headless app, please refer to our code lab [Your First Headless App with App Builder](https://developer.adobe.com/app-builder/docs/resources/barcode-reader/).

We might provide supplementary discoverability mechanisms for published headless apps in future App Builder releases.

## Next steps

For more code examples and use cases, please refer to the [Resources page](../resources/index.md).
