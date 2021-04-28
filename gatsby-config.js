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
        "path": "/docs/"
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
        "path": "/docs/",
        "pages": [
          {
            "title": "What is Project Firefly",
            "path": "/docs/"
          },
          {
            "title": "How to Get Access",
            "path": "/docs/overview/getting_access/"
          },
          {
            "title": "Project Firefly and Adobe I/O Runtime",
            "path": "/docs/overview/firefly_and_runtime/"
          }
        ]
      },
      {
        "title": "Getting Started",
        "path": "/docs/getting_started/",
        "pages": [
          {
            "title": "Setting up Your Environment",
            "path": "/docs/getting_started/"
          },
          {
            "title": "Creating your First Firefly App",
            "path": "/docs/getting_started/first_app/"
          },
          {
            "title": "Publishing Your First Project Firefly Application",
            "path": "/docs/getting_started/publish_app/"
          },
          {
            "title": "Troubleshooting the most common issues",
            "path": "/docs/getting_started/common_troubleshooting/"
          }
        ]
      },
      {
        "title": "Guides",
        "path": "/docs/guides/",
        "pages": [
          {
            "title": "Architecture Overview",
            "path": "/docs/guides/"
          },
          {
            "title": "Security Overview",
            "path": "/docs/guides/security_overview/"
          },
          {
            "title": "Integration Guide with Adobe Experience Cloud",
            "path": "/docs/guides/exc_app/overview/"
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
            "path": "/docs/guides/understanding_authentication/"
          },
          {
            "title": "Dealing with Application State",
            "path": "/docs/guides/application_state/"
          },
          {
            "title": "Introduction to React Spectrum",
            "path": "/docs/guides/introduction_to_react_spectrum/"
          },
          {
            "title": "Using Client SDKs for Accessing Adobe APIs",
            "path": "/docs/guides/using_sdks/"
          },
          {
            "title": "Deployment Overview",
            "path": "/docs/guides/deployment/"
          },
          {
            "title": "CI/CD for Project Firefly Applications",
            "path": "/docs/guides/ci_cd_for_firefly_apps/"
          },
          {
            "title": "Managing Application Logs",
            "path": "/docs/guides/application_logging/"
          },
          {
            "title": "Event hooks for Project Firefly Applications",
            "path": "/docs/guides/app-hooks/"
          }
        ]
      },
      {
        "title": "Reference Documentation",
        "path": "/docs/reference_documentation/"
      },
      {
        "title": "Contribution Guides",
        "path": "/docs/contribution_guides/"
      },
      {
        "title": "FAQ",
        "path": "/docs/faq/"
      }
      
    ],
  },
  plugins: ['@adobe/gatsby-theme-aio'],
  pathPrefix: process.env.PATH_PREFIX || '/project-firefly/'
};