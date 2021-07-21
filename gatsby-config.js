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
    "home": {
      "title": "Project Firefly",
      "path": "/project-firefly"
    },
    pages: [
      {
        "title": "Overview",
        "path": "overview"
      },
      {
        "title": "Getting Started",
        "path": "getting_started"
      },
      {
        "title": "Guides",
        "path": "guides"
      },
      {
        "title": "Resources",
        "path": "resources"
      },
      {
        "title": "Community",
        "path": "community.md"
      }
    ],
    subPages: [
      {
        "title": "What is Project Firefly",
        "path": "overview"
      },
      {
        "title": "How to Get Access",
        "path": "overview/getting_access.md"
      },
      {
        "title": "Project Firefly and Adobe I/O Runtime",
        "path": "overview/firefly_and_runtime.md"
      },
      {
        "title": "FAQ",
        "path": "overview/faq.md"
      },
      {
        "title": "Setting up Your Environment",
        "path": "getting_started"
      },
      {
        "title": "Creating your First Firefly App",
        "path": "getting_started/first_app.md"
      },
      {
        "title": "Publishing Your First Project Firefly Application",
        "path": "getting_started/publish_app.md"
      },
      {
        "title": "Troubleshooting the most common issues",
        "path": "getting_started/common_troubleshooting.md"
      },
      {
        "title": "Architecture",
        "path": "guides",
        "pages": [
          {
            "title": "Architecture overview",
            "path": "guides"
          },
          {
            "title": "Dealing with Application State",
            "path": "guides/application_state.md"
          },
          {
            "title": "Introduction to React Spectrum",
            "path": "guides/introduction_to_react_spectrum.md"
          },
          {
            "title": "Using Client SDKs for Accessing Adobe APIs",
            "path": "guides/using_sdks.md"
          },
          
          {
            "title": "Managing Application Logs",
            "path": "guides/application_logging.md"
          },
          {
            "title": "Event hooks for Project Firefly Applications",
            "path": "guides/app-hooks.md"
          }
        ]
      },
      {
        "title": "Security",
        "path": "guides/security",
        "pages": [
          {
            "title": "Security overview",
            "path": "guides/security/index.md"
          },
          {
            "title": "Understanding Authentication",
            "path": "guides/security/understanding_authentication.md"
          },
        ]
      },
      {
        "title": "Deployment",
        "path": "guides/deployment",
        "pages": [
          {
            "title": "Deployment overview",
            "path": "guides/deployment"
          },
          {
            "title": "CI/CD for Project Firefly Applications",
            "path": "guides/deployment/ci_cd_for_firefly_apps.md"
          },
        ]
      },
      {
        "title": "Integration Guide with Adobe Experience Cloud",
        "path": "guides/exc_app",
        "pages": [
          {
            "title": "Getting started with Adobe Experience Cloud",
            "path": "guides/exc_app/index.md"
          },
          {
            "title": "Modules",
            "path": "guides/exc_app/modules",
            "pages": [
              {
                "title": "Index",
                "path": "guides/exc_app/modules/index.md"
              },
              {
                "title": "Page",
                "path": "guides/exc_app/modules/page.md"
              },
              {
                "title": "Topbar",
                "path": "guides/exc_app/modules/topbar.md"
              },
              {
                "title": "User",
                "path": "guides/exc_app/modules/user.md"
              }
            ]
          },
          {
            "title": "Interfaces",
            "path": "guides/exc_app/interfaces",
            "pages": [
              {
                "title": "Modules",
                "path": "guides/exc_app/interfaces/index.md"
              },
              {
                "title": "Runtime",
                "path": "guides/exc_app/interfaces/index.runtime.md"
              },
              {
                "title": "Page Object with href",
                "path": "guides/exc_app/interfaces/page.objectwithhref.md"
              },
              {
                "title": "Page Object with path",
                "path": "guides/exc_app/interfaces/page.objectwithpath.md"
              },
              {
                "title": "Page API",
                "path": "guides/exc_app/interfaces/page.pageapi.md"
              },
              {
                "title": "Page API Properties",
                "path": "guides/exc_app/interfaces/page.pageapiproperties.md"
              },
              {
                "title": "Topbar callback",
                "path": "guides/exc_app/interfaces/topbar.callback.md"
              },
              {
                "title": "Topbar custom feedback config",
                "path": "guides/exc_app/interfaces/topbar.customfeedbackconfig.md"
              },
              {
                "title": "Topbar custom search config",
                "path": "guides/exc_app/interfaces/topbar.customsearchconfig.md"
              },
              {
                "title": "Topbar external feedback config",
                "path": "guides/exc_app/interfaces/topbar.externalfeedbackconfig.md"
              },
              {
                "title": "Topbar help center feedback config",
                "path": "guides/exc_app/interfaces/topbar.helpcenterfeedbackconfig.md"
              },
              {
                "title": "Topbar solution",
                "path": "guides/exc_app/interfaces/topbar.solution.md"
              },
              {
                "title": "Topbar API",
                "path": "guides/exc_app/interfaces/topbar.topbarapi.md"
              },
              {
                "title": "Topbar API properties",
                "path": "guides/exc_app/interfaces/topbar.topbarapiproperties.md"
              },
              {
                "title": "User API",
                "path": "guides/exc_app/interfaces/user.userapi.md"
              },
              {
                "title": "User Info",
                "path": "guides/exc_app/interfaces/user.userinfo.md"
              },
            ]
          }
        ]
      },
      {
        "title": "Reference documentation",
        "path": "guides/reference_documentation"
      },
      {
        "title": "Contribution guides",
        "path": "guides/contribution_guides"
      },
      {
        "title": "Code Labs",
        "path": "resources/index.md"
      },
      {
        "title": "Sample Apps",
        "path": "resources/sample_apps.md"
      },
      {
        "title": "Videos",
        "path": "resources/videos.md"
      },
      {
        "title": "Real-world examples",
        "path": "resources/real_world_examples.md"
      },
      {
        "title": "Blog Articles",
        "path": "resources/blog_articles.md"
      }
    ],
  },
  plugins: ['@adobe/gatsby-theme-aio'],
  pathPrefix: process.env.PATH_PREFIX || '/project-firefly/docs/'
};