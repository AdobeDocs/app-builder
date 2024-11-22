---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
contributors:
  - 'https://github.com/marcinczeczko'
title: 'Lesson 5: Setup AEM to use the worker'
---

# Lesson 5: Setup AEM to use the worker

Go to your **AEM Cloud** instance and open **Tools -> Assets -> Processing Profiles** and then create a new processing profile, e.g. `My Worker test profile`.
On the **Custom** tab, configure your renditions to use your worker, as shown below.

![Config of custom renditions](assets/processing-profile-1800.png)

I configured 3 renditions using following imgix configuration params (we don't need to escape JSON if it's used in AEM)

1. Crop an image to 300x300 px around faces if detected, or around busy sections of the image (entropy).

  ```json
  {
    "fit": "crop",
    "crop": "faces,entropy",
    "w": 300,
    "h": 300
  }
  ```

2. Same as the previous, but additionally apply an ellipse mask around the cropped area.

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

3. The last one is similar to the first, but this time we add a text watermark to the image.

  ```json
  {
    "h": 300,
    "w": 300,
    "fit": "crop",
    "crop": "faces,entropy",
    "mark": "https://assets.imgix.net/~text?w=200&txt-color=fff&txt=Hello+world&txt-size=16&txt-lead=0&txt-pad=15&bg=80002228&txt-font=Avenir-Heavy"
  }
  ```

As the last step, you need to apply the profile to DAM folder.

![Apply Profile to Folder](assets/apply-profile-to-folder.png)

Now you can upload images to the folder and observe results on the asset details page.

![Renditions list in Asset view](assets/worker-results.png)

*Photo by [LinkedIn Sales Navigator](https://unsplash.com/@linkedinsalesnavigator?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/women-sitting?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)* 

