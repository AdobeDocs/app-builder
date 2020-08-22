# Publishing your First Project Firefly Application
In this tutorial, we'll guide you through the following steps to give you an introduction on how to publish your first Firefly Application. 
after you deployed your application, you need to go through below 3 steps to publish your headful app
1. Project approvals through [Adobe Developer Console](https://console.adobe.io/)
2. Administrater review your app through [My Exchange](https://exchange.adobe.com/my-exchange.html)
3. Your app show up at [Adobe Experience Cloud](https://experience.adobe.com/#/@adobeio/home)

## 1: Project approvals (Console Part)

Once you have completed development on your project, your application is ready for approval. 

There are three different approval processes within Adobe Developer Console, depending on the type of application that you have built:

1. **Project Firefly applications:** Projects built using the Project Firefly template are built by an organization for use within that organization. Therefore, Firefly applications require approvals by the enterprise organization administrator only. 
    
    Please follow the approval process for [Project Firefly applications](#project-firefly-applications) outlined in this document.

2. **Applications for publication:** Building an application for distribution to general users on the Adobe Exchange requires approval from the Adobe Review team before it can be published.

    Please refer to the [applications for publication](#applications-for-publication) approval process outlined in this document.

3. **XD Plugin distribution:** Currently only available as personal projects, XD plugins must be submitted for review and approval before they can be published to the Adobe XD Plugin Marketplace. 

    For detailed instructions on how to submit an XD plugin for approval, follow the steps provided in the [XD plugin distribution guide](plugin-distribution.md).

### Project Firefly applications approval process

Once you have completed development on a Project Firefly application, it is time to submit the application to your administrators for review and approval.

The final app is based on the *Production* workspace, therefore it is important to ensure that the production workspace contains all of the necessary APIs, Events, and Runtime code that it needs before submitting for approval.

To begin the approval process, navigate to the *Production* workspace and select **Submit for approval** in the top-right corner of the screen or select **Approval** in the left navigation.

![](images/approval-production-overview.png)

On the *Approval* screen you will be presented with the **App Submission Details** form. These details will be visible to people using your app and administrators reviewing your application.

Once the submission details have been completed, select **Submit** to begin the approval process.

![](images/approval-app-submission-details.png)

You will be returned to the *Approval* screen, where the *Status* of your application should now be "In Review".

![](images/approval-in-review.png)

Following a review by your organization administrators, your application will either be approved and published or rejected. If the application is rejected, your admin will be able to include a note telling you what went wrong, allowing you to fix the error and submit for approval again.

![](images/approval-app-rejected.png)

If your application is approved, you are ready to move on to the [next steps](#next-steps) found at the end of this document.

### Applications for publication

In order for an application to be available for public users, it must first be approved by the Adobe Review team. To begin, navigate to the *Project overview* for the project containing the application that you wish to publish.

![](images/approval-empty-project.png)

Select **Approval** from the left navigation to view the **App Submission Details**. These details include information about the application that will be shown to end users and the Adobe Review team.

Once the submission details have been completed, select **Submit** to begin the approval process.

![](images/approval-personal-app-submission-details.png)

At that time your application *Status* will be updated to "In Review" and the **App Submission Details** that you filled in previously will be visible, however they will be greyed out and you will be unable to edit them. 

![](images/approval-personal-app-in-review.png)

### Published app

After your application has been submitted for approval, the admin could see your app pending for review in Adobe Exchange. next section will describe admin approval flow from My exchange. From console side, once an application has been approved, either by internal reviewers or the Adobe Review team, its *Status* will be updated to "Published" and the application will be available for use either by employees within your enterprise organization (for Project Firefly applications) or for the general public through Adobe Exchange.

![](images/approval-published.png)

## 2: Administrater review your app (MyExchange Part)

Once an application has been submitted for approval, either internal reviewer or Adobe Review team will see an app in My Exchange -> Experience Cloud Apps, you will see your submitted apps under the pending review session。

![](images/approval-myexchange.png)

The reviewer could review this app, either approve it or reject it 

![](images/approval-myexchange-review.png)

After approve the app, you will see the app in the approved section, the reviewer could revoke this app to unpublished the app. The owner of the app could re-submit the application for review.

![](images/approval-myexchange-revoke.png)


## 3: Check your published app at Experience Cloud

Once the reviewer approve your application, you will received an email notification. and your app will show up at Experiences cloud

![](images/approval-myapp-home.png)

Click into `Project Firefly App` you will see your published app

![](images/approval-myapp-customapps.png)


## Next steps

For more code examples and use cases, please refer to the [Resources page](../resources.md).
