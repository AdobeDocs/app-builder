---
title: Lesson 5: Set Up AEM to Use the Worker
description: Instructions on configuring Adobe Experience Manager (AEM) to use a custom worker for image processing via processing profiles and renditions.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- AEM Worker
contributors:
  - 'https://github.com/marcinczeczko'
# --- FAQs ---
faqs:
- question: How do I create a processing profile in AEM?
  answer: Go to Tools -> Assets -> Processing Profiles in your AEM Cloud instance and create a new profile with a custom name.
- question: How do I configure renditions to use a worker in AEM?
  answer: In the processing profile's Custom tab, add JSON configuration for image transformations specifying your worker’s parameters.
- question: How can I crop images focusing on faces or important areas?
  answer: Use the JSON crop value "faces,entropy" with fit set to "crop" and specify your desired width and height.
- question: How do I apply a text watermark to an image rendition?
  answer: Add a "mark" parameter in your rendition’s JSON config pointing to the watermark URL with desired text and style.
- question: How do I apply the processing profile to a folder in AEM?
  answer: Navigate to the DAM folder and apply the processing profile so new uploads automatically use the configured renditions.
---
# Lesson 5: Set Up AEM to Use the Worker

Go to your AEM Cloud instance and open Tools -> Assets -> Processing Profiles. Then create a new processing profile, for example `My Worker test profile`. On the Custom tab, configure your renditions to use your worker, as shown here:

![Config of custom renditions](assets/processing-profile-1800.png)

These three renditions were created using imgix configuration parameters - we don't need to escape JSON, since it's used in AEM:

1. Crop an image to 300x300 px around faces if detected, or around busy sections of the image (entropy):
   
   ```json
   {
    "fit": "crop",
    "crop": "faces,entropy",
    "w": 300,
    "h": 300
   }
   ```

2. Apply an ellipse mask around the cropped area in the previous rendition.
   
   ```json
   {
    "fit": "crop",
    "crop": "faces,entropy",
    "w": 300,
    "h": 300,
    "fm": "png",
    "mask": "ellipse"
   }
   ```

3. Add a text watermark to the rendition in the previous image:
   
   ```json
   {
    "h": 300,
    "w": 300,
    "fit": "crop",
    "crop": "faces,entropy",
    "mark": "https://assets.imgix.net/~text?w=200&txt-color=fff&txt=Hello+world&txt-size=16&txt-lead=0&txt-pad=15&bg=80002228&txt-font=Avenir-Heavy"
   }
   ```

Finally, apply the profile to DAM folder:

![Apply Profile to Folder](assets/apply-profile-to-folder.png)

Now you can upload images to the folder and observe results on the asset details page.

![Renditions list in Asset view](assets/worker-results.png) 

Photo by [LinkedIn Sales Navigator](https://unsplash.com/@linkedinsalesnavigator?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/women-sitting?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText).
