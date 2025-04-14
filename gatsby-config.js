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
      "title": "App Builder",
      "path": "/app-builder"
    },
    pages: [
      {
        "title": "Overview",
        "path": "intro_and_overview"
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
      }
    ],
    subPages: [
      {
        "title": "Overview",
        "path": "intro_and_overview/app_builder_overview.md"
      },
      {
        "title": "What is App Builder",
        "path": "intro_and_overview/what_is_app_builder.md"
      },
      {
        "title": "Business Case",
        "path": "intro_and_overview/business_case.md"
      },
      {
        "title": "FAQ",
        "path": "intro_and_overview/faq.md"
      },
      {
        "title": "Community",
        "path": "intro_and_overview/community.md"
      },
      {
        "title": "Creating your First App Builder App",
        "path": "getting_started/first_app.md"
      },
      {
        "title": "Guides",
        "path": "guides",
        "pages": [
          {
            "title": "Application State",
            "path": "guides/application_state.md"
          },
          {
            "title": "Contribution Guide",
            "path": "guides/contribution_guide.md"
          },
          {
            "title": "References",
            "path": "guides/references.md"
          }
        ]
      },
      {
        "title": "Resources",
        "path": "resources",
        "pages": [
          {
            "title": "Sample Apps",
            "path": "resources/sample_apps"
          },
          {
            "title": "Videos",
            "path": "resources/videos"
          },
          {
            "title": "Spectrum Introduction",
            "path": "resources/spectrum-intro"
          },
          {
            "title": "Debugging",
            "path": "resources/debugging"
          },
          {
            "title": "Customer Dashboard",
            "path": "resources/customer-dashboard"
          },
          {
            "title": "Custom Asset Compute Worker",
            "path": "resources/custom-asset-compute-worker"
          },
          {
            "title": "Cron Jobs",
            "path": "resources/cron-jobs"
          },
          {
            "title": "CI/CD",
            "path": "resources/ci-cd"
          },
          {
            "title": "Barcode Reader",
            "path": "resources/barcode-reader"
          },
          {
            "title": "Asset Compute Worker PS API",
            "path": "resources/asset-compute-worker-ps-api"
          },
          {
            "title": "Todo App",
            "path": "resources/todo-app"
          },
          {
            "title": "Journaling Events",
            "path": "resources/journaling-events"
          },
          {
            "title": "Events Runtime",
            "path": "resources/events-runtime"
          },
          {
            "title": "Event Driven",
            "path": "resources/event-driven"
          },
          {
            "title": "Blog Articles",
            "path": "resources/blog_articles.md"
          }
        ]
      }
    ]
  },
  plugins: ['@adobe/gatsby-theme-aio'],
  pathPrefix: process.env.PATH_PREFIX || '/app-builder/docs/'
};

