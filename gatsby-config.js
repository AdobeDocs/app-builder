/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    pages: [
      {
        "title": "Project Firefly",
        "path": "/"
      },
      {
        "title": "Documentation",
        "path": "/documentation/"
      },
      {
        "title": "Resources",
        "path": "/resources/"
      },
      {
        "title": "Events",
        "path": "/events/"
      },
      {
        "title": "Support",
        "path": "/support/"
      },
    ],
    subPages: [
      {
        "title": "Overview",
        "path": "/documentation/",
        "pages": [
          {
            "title": "What is Project Firefly",
            "path": "/documentation/"
          },
          {
            "title": "How to Get Access",
            "path": "/documentation/overview/getting_access/"
          },
          {
            "title": "Project Firefly and Adobe I/O Runtime",
            "path": "/documentation/overview/firefly_and_runtime/"
          }
        ]
      },
      {
        "title": "Getting Started",
        "path": "/documentation/getting_started/",
        "pages": [
          {
            "title": "Setting up Your Environment",
            "path": "/documentation/getting_started/"
          },
          {
            "title": "Creating your First Firefly App",
            "path": "/documentation/getting_started/first_app/"
          },
          {
            "title": "Publishing Your First Project Firefly Application",
            "path": "/documentation/getting_started/publish_app/"
          },
          {
            "title": "Troubleshooting the most common issues",
            "path": "/documentation/getting_started/common_troubleshooting/"
          }
        ]
      },
      {
        "title": "Guides",
        "path": "/documentation/guides/",
        "pages": [
          {
            "title": "Architecture Overview",
            "path": "/documentation/guides/"
          },
          {
            "title": "Security Overview",
            "path": "/documentation/guides/security_overview/"
          },
          {
            "title": "Integration Guide with Adobe Experience Cloud",
            "path": "/documentation/guides/exc_app/overview/"
          },
          {
            "title": "Integration Guide for building Event-driven Applications with I/O Events",
            "path": "https://www.adobe.io/apis/experienceplatform/events/docs.html#!adobedocs/adobeio-events/master/intro/webhook_docs_intro.md"
          },
          {
            "title": "Custom Events Overview",
            "path": "https://www.adobe.io/apis/experienceplatform/events/docs.html#!adobedocs/adobeio-events/master/custom_events.md"
          },
          {
            "title": "Understanding Authentication",
            "path": "/documentation/guides/understanding_authentication/"
          },
          {
            "title": "Dealing with Application State",
            "path": "/documentation/guides/application_state/"
          },
          {
            "title": "Introduction to React Spectrum",
            "path": "/documentation/guides/introduction_to_react_spectrum/"
          },
          {
            "title": "Using Client SDKs for Accessing Adobe APIs",
            "path": "/documentation/guides/using_sdks/"
          },
          {
            "title": "Deployment Overview",
            "path": "/documentation/guides/deployment/"
          },
          {
            "title": "CI/CD for Project Firefly Applications",
            "path": "/documentation/guides/ci_cd_for_firefly_apps/"
          },
          {
            "title": "Managing Application Logs",
            "path": "/documentation/guides/application_logging/"
          },
          {
            "title": "Event hooks for Project Firefly Applications",
            "path": "/documentation/guides/app-hooks/"
          }
        ]
      },
      {
        "title": "Reference Documentation",
        "path": "/documentation/reference_documentation/"
      },
      {
        "title": "Contribution Guides",
        "path": "/documentation/contribution_guides/"
      },
      {
        "title": "FAQ",
        "path": "/documentation/faq/"
      }
      
    ],
  },
  plugins: ['@adobe/gatsby-theme-aio'],
  pathPrefix: process.env.PATH_PREFIX || '/project-firefly/'
};