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
        "path": "overview/index.md"
      },
      {
        "title": "Getting Started",
        "path": "getting-started/index.md"
      },
      {
        "title": "Guides",
        "path": "guides/index.md"
      },
      {
        "title": "Resources",
        "path": "resources/index.md"
      }
    ],
    subPages: [
      {
        "title": "Overview",
        "path": "overview/index.md"
      },
      {
        "title": "How it works",
        "path": "overview/how-it-works.md"
      },
      {
        "title": "How to Get Access",
        "path": "overview/getting-access.md"
      },
      {
        "title": "App Builder and Adobe I/O Runtime",
        "path": "overview/firefly-and-runtime.md"
      },
      {
        "title": "FAQ",
        "path": "overview/faq.md"
      },
      {
        "title": "Community",
        "path": "overview/community.md"
      },
      {
        "title": "Setting up Your Environment",
        "path": "getting-started/index.md"
      },
      {
        "title": "Creating your First App Builder App",
        "path": "getting-started/first-app.md"
      },
      {
        "title": "Publishing Your First Project App Builder Application",
        "path": "getting-started/publish-app.md"
      },
      {
        "title": "Troubleshooting the most common issues",
        "path": "getting-started/common-troubleshooting.md"
      },
      {
        "title": "Architecture",
        "path": "guides/index.md",
        "pages": [
          {
            "title": "Architecture overview",
            "path": "guides/index.md"
          },
          {
            "title": "Dealing with Application State",
            "path": "guides/application-state.md"
          },
          {
            "title": "Introduction to React Spectrum",
            "path": "guides/introduction-to-react-spectrum.md"
          },
          {
            "title": "Using Client SDKs for Accessing Adobe APIs",
            "path": "guides/using-sdks.md"
          },
          {
            "title": "Event hooks for App Builder Applications",
            "path": "guides/app-hooks.md"
          }
        ]
      },
      {
        "title": "Logging",
        "path": "guides/application-logging/index.md",
        "pages": [
          {
            "title": "Managing Application Logs",
            "path": "guides/application-logging/index.md"
          },
          {
            "title": "Forwarding logs to Azure Log Analytics",
            "path": "guides/application-logging/azure-log-analytics.md"
          },
          {
            "title": "Forwarding logs to New Relic",
            "path": "guides/application-logging/new-relic.md"
          },
          {
            "title": "Forwarding logs to Splunk Cloud",
            "path": "guides/application-logging/splunk-cloud.md"
          },
          {
            "title": "Forwarding logs to Splunk Enterprise",
            "path": "guides/application-logging/splunk-enterprise.md"
          }
        ]
      },
      {
        "title": "Security",
        "path": "guides/security/index.md",
        "pages": [
          {
            "title": "Security overview",
            "path": "guides/security/index.md"
          },
          {
            "title": "Understanding Authentication",
            "path": "guides/security/understanding-authentication.md"
          },
        ]
      },
      {
        "title": "Deployment",
        "path": "guides/deployment/index.md",
        "pages": [
          {
            "title": "Deployment overview",
            "path": "guides/deployment/index.md"
          },
          {
            "title": "CI/CD for App Builder Applications",
            "path": "guides/deployment/ci-cd-for-firefly-apps.md"
          },
          {
            "title": "Credential Rotation",
            "path": "guides/deployment/credential-rotation.md"
          },
          {
            "title": "Setting Response Headers",
            "path": "guides/deployment/setting-response-headers.md"
          },
        ]
      },
      {
        "title": "Development",
        "path": "guides/development/index.md",
      },
      {
        "title": "Extensions",
        "path": "guides/extensions/index.md",
        "pages": [
          {
            "title": "Introduction to Extensions",
            "path": "guides/extensions/index.md"
          },
          {
            "title": "Extension Migration Guide",
            "path": "guides/extensions/extension-migration-guide.md"
          },
          {
            "title": "Migration Guide - Standalone Application to DX Experience Cloud SPA v1",
            "path": "guides/migrations/standalone-to-dx-experience-cloud-spa.md"
          },
          {
            "title": "UI Extensibility",
            "path": "guides/extensions/ui-extensibility.md"
          }
        ]
      },
      {
        "title": "Configuration",
        "path": "guides/configuration/index.md",
        "pages": [
          {
            "title": "App Builder Configuration Files",
            "path": "guides/configuration/index.md"
          },
          {
            "title": "Webpack Configuration",
            "path": "guides/configuration/webpack-configuration.md"
          }
        ]
      },
      {
        "title": "Distribution",
        "path": "guides/distribution/index.md",
        "pages": [
          {
            "title": "Private Distribution",
            "path": "guides/distribution/private.md"
          },
          {
            "title": "Public Distribution",
            "path": "guides/distribution/public.md"
          }
        ]
      },
      {
        "title": "Integration Guide with Adobe Experience Cloud",
        "path": "guides/exc-app/index.md",
        "pages": [
          {
            "title": "Getting started with Adobe Experience Cloud",
            "path": "guides/exc-app/index.md"
          },
          {
            "title": "Modules",
            "path": "guides/exc-app/modules/index.md",
            "pages": [
              {
                "title": "Index",
                "path": "guides/exc-app/modules/index.md"
              },
              {
                "title": "Page",
                "path": "guides/exc-app/modules/page.md"
              },
              {
                "title": "Topbar",
                "path": "guides/exc-app/modules/topbar.md"
              },
              {
                "title": "User",
                "path": "guides/exc-app/modules/user.md"
              }
            ]
          },
          {
            "title": "Interfaces",
            "path": "guides/exc-app/interfaces/index.md",
            "pages": [
              {
                "title": "Modules",
                "path": "guides/exc-app/interfaces/index.md"
              },
              {
                "title": "Runtime",
                "path": "guides/exc-app/interfaces/index.runtime.md"
              },
              {
                "title": "Page Object with href",
                "path": "guides/exc-app/interfaces/page.objectwithhref.md"
              },
              {
                "title": "Page Object with path",
                "path": "guides/exc-app/interfaces/page.objectwithpath.md"
              },
              {
                "title": "Page API",
                "path": "guides/exc-app/interfaces/page.pageapi.md"
              },
              {
                "title": "Page API Properties",
                "path": "guides/exc-app/interfaces/page.pageapiproperties.md"
              },
              {
                "title": "Topbar callback",
                "path": "guides/exc-app/interfaces/topbar.callback.md"
              },
              {
                "title": "Topbar custom feedback config",
                "path": "guides/exc-app/interfaces/topbar.customfeedbackconfig.md"
              },
              {
                "title": "Topbar custom search config",
                "path": "guides/exc-app/interfaces/topbar.customsearchconfig.md"
              },
              {
                "title": "Topbar external feedback config",
                "path": "guides/exc-app/interfaces/topbar.externalfeedbackconfig.md"
              },
              {
                "title": "Topbar help center feedback config",
                "path": "guides/exc-app/interfaces/topbar.helpcenterfeedbackconfig.md"
              },
              {
                "title": "Topbar solution",
                "path": "guides/exc-app/interfaces/topbar.solution.md"
              },
              {
                "title": "Topbar API",
                "path": "guides/exc-app/interfaces/topbar.topbarapi.md"
              },
              {
                "title": "Topbar API properties",
                "path": "guides/exc-app/interfaces/topbar.topbarapiproperties.md"
              },
              {
                "title": "User API",
                "path": "guides/exc-app/interfaces/user.userapi.md"
              },
              {
                "title": "User Info",
                "path": "guides/exc-app/interfaces/user.userinfo.md"
              },
            ]
          }
        ]
      },
      {
        "title": "Integration Guide for building Event-driven Applications with I/O Events",
        "path": "guides/events/webhooks.md"
      },
      {
        "title": "Custom Events Overview",
        "path": "guides/events/custom-events.md"
      },
      {
        "title": "Reference documentation",
        "path": "guides/reference-documentation/index.md"
      },
      {
        "title": "Contribution guides",
        "path": "guides/contribution-guides/index.md"
      },
      {
        "title": "Telemetry",
        "path": "guides/telemetry/index.md"
      },
      {
        "title": "Code Labs",
        "path": "resources/index.md",
        pages: [
          {
            title: 'Asset Compute with Photoshop APIs',
            path: 'resources/asset-compute-worker-ps-api/index.md',
            pages: [{
              "title": "Requirements",
              "path": "resources/asset-compute-worker-ps-api/requirements"
            }, {
              "title": "Lesson 1: Create an app from Asset Compute template",
              "path": "resources/asset-compute-worker-ps-api/lesson1"
            }, {
              "title": "Lesson 2: Configure the app",
              "path": "resources/asset-compute-worker-ps-api/lesson2",
            }, {
              "title": "Lesson 3: Develop worker calling Photoshop API",
              "path": "resources/asset-compute-worker-ps-api/lesson3"
            }, {
              "title": "Lesson 4: Integrate worker in AEMaaCS",
              "path": "resources/asset-compute-worker-ps-api/lesson4",
            }, {
              "title": "Well done",
              "path": "resources/asset-compute-worker-ps-api/welldone",
            }]
          },
          {
            title: 'Events Using Runtime Actions as Webhook',
            path: 'resources/events-runtime/index.md',
            pages: [{
              "title": "Requirements",
              "path": "resources/events-runtime/requirements"
            }, {
              "title": "Lesson 1: Step by Step Guide",
              "path": "resources/events-runtime/lesson1"
            }, {
              "title": "Lesson 2: Verify the result",
              "path": "resources/events-runtime/lesson2"
            }, {
              "title": "Well done",
              "path": "resources/events-runtime/welldone"
            }]
          },
          {
            title: 'Consume Events Using Journaling API',
            path: 'resources/journaling-events/index.md',
            pages: [{
              "title": "Requirements",
              "path": "resources/journaling-events/requirements"
            }, {
              "title": "Lesson 1: Create an Event Provider using App Builder",
              "path": "resources/journaling-events/lesson1"
            }, {
              "title": "Lesson 2: Create the Event Consumer using Journaling API",
              "path": "resources/journaling-events/lesson2"
            }, {
              "title": "Lesson 3: End to end test",
              "path": "resources/journaling-events/lesson3"
            }, {
              "title": "Well done",
              "path": "resources/journaling-events/welldone"
            }]
          },
          {
            title: 'Building an App Builder Todo App',
            path: 'resources/todo-app/index.md',
            pages: [
              {
                "title": "Requirements",
                "path": "resources/todo-app/requirements"
              },
              {
                "title": "Lesson 1: Create a New App Builder App with the React Spectrum template",
                "path": "resources/todo-app/lesson1"
              },
              {
                "title": "Lesson 2: Setup Runtime actions",
                "path": "resources/todo-app/lesson2"
              },
              {
                "title": "Lesson 3: Setup the CreateTodoList component",
                "path": "resources/todo-app/lesson3"
              },
              {
                "title": "Lesson 4: Setup the Todo component",
                "path": "resources/todo-app/lesson4"
              },
              {
                "title": "Lesson 5: Setup the TodoList component",
                "path": "resources/todo-app/lesson5"
              },
              {
                "title": "Lesson 6: Bringing the pieces together to build the App",
                "path": "resources/todo-app/lesson6"
              },
              {
                "title": "Well done",
                "path": "resources/todo-app/welldone"
              }
            ]
          },
          {
            title: 'Event-Driven App Builder Apps',
            path: 'resources/event-driven/index.md',
            pages: [{
              "title": "Requirements",
              "path": "resources/event-driven/requirements"
            }, {
              "title": "Lesson 1: Create a New App Builder App from Template",
              "path": "resources/event-driven/lesson1"
            }, {
              "title": "Lesson 2: Register the App as Event Provider",
              "path": "resources/event-driven/lesson2"
            }, {
              "title": "Lesson 3: Fire an Event",
              "path": "resources/event-driven/lesson3"
            }, {
              "title": "Lesson 4: Consume Events",
              "path": "resources/event-driven/lesson4"
            }, {
              "title": "Well Done",
              "path": "resources/event-driven/welldone"
            }]
          },
          {
            title: 'Scheduling Cron Jobs',
            path: 'resources/cron-jobs/index.md',
            pages: [{
              "title": "Requirements",
              "path": "resources/cron-jobs/requirements",
            }, {
              "title": "Lesson 1: Bootstrap a Headless App",
              "path": "resources/cron-jobs/lesson1"
            }, {
              "title": "Lesson 2: Set up Alarm Feed with Trigger and Rule",
              "path": "resources/cron-jobs/lesson2"
            }, {
              "title": "Lesson 3: Types of Alarm Feed",
              "path": "resources/cron-jobs/lesson3"
            }, {
              "title": "Well done",
              "path": "resources/cron-jobs/welldone"
            }]
          },
          {
            title: 'Custom Asset Compute Worker',
            path: 'resources/custom-asset-compute-worker/index.md',
            pages: [{
              "title": "Requirements",
              "path": "resources/custom-asset-compute-worker/requirements"
            }, {
              "title": "How AEM as Cloud assets works",
              "path": "resources/custom-asset-compute-worker/aem-cloud-assets"
            }, {
              "title": "Architecture of our worker",
              "path": "resources/custom-asset-compute-worker/our-worker"
            }, {
              "title": "Configure services",
              "path": "resources/custom-asset-compute-worker/lesson1"
            }, {
              "title": "Local environment setup",
              "path": "resources/custom-asset-compute-worker/lesson2"
            }, {
              "title": "Implement the worker",
              "path": "resources/custom-asset-compute-worker/lesson3"
            }, {
              "title": "Test the worker",
              "path": "resources/custom-asset-compute-worker/lesson4"
            }, {
              "title": "Setup AEM to use the worker",
              "path": "resources/custom-asset-compute-worker/lesson5"
            }, {
              "title": "Well Done",
              "path": "resources/custom-asset-compute-worker/welldone"
            }]
          },
          {
            title: 'CI/CD in App Builder Apps',
            path: 'resources/ci-cd/index.md',
            pages: [{
              "title": "Requirements",
              "path": "resources/ci-cd/requirements"
            }, {
              "title": "Lesson 1: Setup CI/CD",
              "path": "resources/ci-cd/lesson1"
            }, {
              "title": "Lesson 2: Monitoring CI/CD",
              "path": "resources/ci-cd/lesson2"
            }, {
              "title": "Lesson 3: Custom CI/CD workflow",
              "path": "resources/ci-cd/lesson3"
            }, {
              "title": "Well done",
              "path": "resources/ci-cd/welldone"
            }]
          },
          {
            title: 'Debugging App Builder Apps With Wskdebug',
            path: 'resources/debugging/index.md',
            pages: [{
              "title": "Requirements",
              "path": "resources/debugging/requirements"
            }, {
              "title": "Lesson 1: Getting familiar with Debugger",
              "path": "resources/debugging/lesson1"
            }, {
              "title": "Lesson 2: Debugging Application Code",
              "path": "resources/debugging/lesson2"
            }, {
              "title": "Lesson 3: Managing Application Logs",
              "path": "resources/debugging/lesson3"
            }, {
              "title": "Well Done",
              "path": "resources/debugging/welldone"
            }]
          },
          {
            title: 'Customer Profiles Dashboard',
            path: 'resources/customer-dashboard/index.md',
            pages: [{
              "title": "Requirements",
              "path": "resources/customer-dashboard/requirements"
            }, {
              "title": "Lesson 1: Create a New App Builder App from Campaign Standard Template",
              "path": "resources/customer-dashboard/lesson1"
            }, {
              "title": "Lesson 2: Explore the App Builder App",
              "path": "resources/customer-dashboard/lesson2"
            }, {
              "title": "Lesson 3: Run the App Builder App Locally",
              "path": "resources/customer-dashboard/lesson3"
            }, {
              "title": "Lesson 4: List All Customer Profiles on the UI",
              "path": "resources/customer-dashboard/lesson4"
            }, {
              "title": "Lesson 5: Add Personalized Promotion Emails Triggering",
              "path": "resources/customer-dashboard/lesson5"
            }, {
              "title": "Well Done",
              "path": "resources/customer-dashboard/welldone"
            }]
          },
          {
            title: 'App Builder Headless App',
            path: 'resources/barcode-reader/index.md',
            pages: [{
              "title": "Requirements",
              "path": "resources/barcode-reader/requirements"
            }, {
              "title": "Lesson 1: Bootstrap a Headless App",
              "path": "resources/barcode-reader/bootstrap"
            }, {
              "title": "Lesson 2: Writing a Serverless Action",
              "path": "resources/barcode-reader/barcode"
            }, {
              "title": "Lesson 3: Unit and E2E Tests",
              "path": "resources/barcode-reader/test"
            }, {
              "title": "Well done",
              "path": "resources/barcode-reader/welldone"
            }]
          },
          {
            title: 'Spectrum Introduction',
            path: 'resources/spectrum-intro/index.md',
            pages: [{
              "title": "Lesson 1: What is Spectrum ?",
              "path": "resources/spectrum-intro/lesson1"
            }, {
              "title": "Lesson 2: Using Spectrum CSS",
              "path": "resources/spectrum-intro/lesson2"
            }, {
              "title": "Lesson 3: Using React Spectrum",
              "path": "resources/spectrum-intro/lesson3"
            }, {
              "title": "Lesson 4: Using React Spectrum in App Builder",
              "path": "resources/spectrum-intro/lesson4"
            }, {
              "title": "Well done",
              "path": "resources/spectrum-intro/welldone"
            }]
          }
        ]
      },
      {
        "title": "Sample Apps",
        "path": "resources/sample-apps/index.md",
        pages: [
          {
            title: 'Code Snippets',
            path: 'resources/sample-apps/code-snippets/index.md',
            pages: [
              {
                title: 'Caching HTTP responses',
                path: 'resources/sample-apps/code-snippets/index.md',
              },
              {
                title: 'App Builder Files SDK',
                path: 'resources/sample-apps/code-snippets/files.md',
              },
              {
                title: 'App Builder State SDK',
                path: 'resources/sample-apps/code-snippets/state.md',
              },
              {
                title: 'I/O Events handler',
                path: 'resources/sample-apps/code-snippets/events.md',
              },
              {
                title: 'Real-time data from Adobe Analytics API 1.4',
                path: 'resources/sample-apps/code-snippets/analytics.md',
              }
            ]
          }
        ]
      },
      {
        "title": "Videos",
        "path": "resources/videos/index.md",
        pages: [
          {
            title: 'Introducing App Builder',
            path: "resources/videos/overview/introduction.md",
          },
          {
            title: 'Getting Started',
            path: "resources/videos/overview/getting-started.md",
          },
          {
            title: 'Architecture',
            path: "resources/videos/overview/architecture.md",
          },
          {
            title: 'A Full Security Overview',
            path: "resources/videos/overview/security.md",
          },
          {
            title: 'User Journey',
            path: "resources/videos/overview/e2e-user-journey.md",
          },
          {
            title: 'Projects and Workspaces',
            path: "resources/videos/exploring/projects-and-workspaces.md",
          },
          {
            title: 'React Spectrum',
            path: "resources/videos/exploring/react-spectrum.md",
          },
          {
            title: 'Custom Events',
            path: "resources/videos/exploring/custom-events.md",
          },
          {
            title: 'CI/CD',
            path: "resources/videos/exploring/ci-cd.md",
          },
          {
            title: 'Debugging',
            path: "resources/videos/exploring/debugging.md",
          },
          {
            title: 'Learning Resources',
            path: "resources/videos/exploring/learning-resources.md",
          },
          {
            title: 'Dashboard Case Study',
            path: "resources/videos/exploring/dashboard-case-study.md",
          },
          {
            title: 'ODE Case Study',
            path: "resources/videos/exploring/ode-case-study.md",
          },
          {
            title: 'Deep Dive Use Cases',
            path: "resources/videos/exploring/deep-dive-use-cases.md",
          },
          {
            title: 'Live Wired Sneak',
            path: "resources/videos/exploring/live-wired-sneak.md",
          },
          {
            title: 'Softcrylic Partner Showcase',
            path: "resources/videos/exploring/softcrylic-showcase.md",
          },
          {
            title: 'App Builder Deep Dive',
            path: "resources/videos/developers-live/deep-dive.md",
          },
          {
            title: 'Asset Compute Service Extensibility',
            path: "resources/videos/developers-live/asset-compute-service-extensibility.md",
          },
          {
            title: 'Extend Adobe Experience Cloud',
            path: "resources/videos/developers-live/extend-experience-cloud.md",
          }
        ]
      },
      {
        "title": "Blog Articles",
        "path": "resources/blog-articles.md"
      }
    ],
  },
  plugins: ['@adobe/gatsby-theme-aio'],
  pathPrefix: process.env.PATH_PREFIX || '/app-builder/docs/'
};
