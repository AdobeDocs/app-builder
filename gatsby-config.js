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
        "path": "intro_and_overview/app_builder_overview"
      },
      {
        "title": "Getting Started",
        "path": "get_started/app_builder_get_started/first_app"
      },
      {
        "title": "Guides",
        "path": "guides/guides_index"
      },
      {
        "title": "Resources",
        "path": "resources/"
      }
    ],
    subPages: [
      {
        "title": "Overview",
        "path": "intro_and_overview/app_builder_overview",
        "pages": [
          {
            "title": "App Builder Overview",
            "path": "intro_and_overview/app_builder_overview/app_builder_overview"
          },
          {
            "title": "What is App Builder",
            "path": "intro_and_overview/what_is_app_builder/what_is_app_builder"
          },
          {
            "title": "Business Case",
            "path": "intro_and_overview/business_case/business_case"
          },
          {
            "title": "FAQ",
            "path": "intro_and_overview/faq/faq"
          },
          {
            "title": "Community",
            "path": "intro_and_overview/community/community"
          }
        ]
      },
      {
        "title": "Getting Started",
        "path": "get_started",
        "pages": [
          {
            "title": "App Builder Getting Started",
            "path": "get_started/app_builder_get_started",
            "pages": [
              {
                "title": "App Builder and Runtime",
                "path": "get_started/app_builder_get_started/app_builder_and_runtime/app_builder_and_runtime"
              },
              {
                "title": "App Builder Introduction",
                "path": "get_started/app_builder_get_started/app_builder_intro/app_builder_intro"
              },
              {
                "title": "Creating your First App",
                "path": "get_started/app_builder_get_started/first_app/first_app"
              },
              {
                "title": "Publishing Your App",
                "path": "get_started/app_builder_get_started/publish_app/publish_app"
              },
              {
                "title": "Setting Up",
                "path": "get_started/app_builder_get_started/set_up/set_up"
              },
              {
                "title": "Troubleshooting",
                "path": "get_started/app_builder_get_started/troubleshoot/troubleshoot"
              }
            ]
          },
          {
            "title": "Runtime Getting Started",
            "path": "get_started/runtime_getting_started",
            "pages": [
              {
                "title": "Activations",
                "path": "get_started/runtime_getting_started/activations/activations"
              },
              {
                "title": "Deploy",
                "path": "get_started/runtime_getting_started/deploy/deploy"
              },
              {
                "title": "Entities",
                "path": "get_started/runtime_getting_started/entities/entities"
              },
              {
                "title": "How Runtime Works",
                "path": "get_started/runtime_getting_started/how_runtime_works/how_runtime_works"
              },
              {
                "title": "Resources",
                "path": "get_started/runtime_getting_started/resources/resources"
              },
              {
                "title": "Runtime Introduction",
                "path": "get_started/runtime_getting_started/runtime_intro/runtime_intro"
              },
              {
                "title": "Setup",
                "path": "get_started/runtime_getting_started/setup/setup"
              },
              {
                "title": "Understanding Runtime",
                "path": "get_started/runtime_getting_started/understanding_runtime/understanding_runtime"
              }
            ]
          }
        ]
      },
      {
        "title": "Guides",
        "path": "guides",
        "pages": [
          {
            "title": "Application State",
            "path": "guides/application_state/application_state"
          },
          {
            "title": "Contribution Guide",
            "path": "guides/contribution_guide/contribution_guide"
          },
          {
            "title": "References",
            "path": "guides/references/references"
          },
          {
            "title": "App Builder Guides",
            "path": "guides/app_builder_guides",
            "pages": [
              {
                "title": "Architecture Overview",
                "path": "guides/app_builder_guides/architecture_overview",
                "pages": [
                  {
                    "title": "App Hooks",
                    "path": "guides/app_builder_guides/architecture_overview/app_hooks/app_hooks"
                  },
                  {
                    "title": "Application State",
                    "path": "guides/app_builder_guides/architecture_overview/application_state/application_state"
                  },
                  {
                    "title": "Architecture Overview",
                    "path": "guides/app_builder_guides/architecture_overview/architecture_overview/architecture_overview"
                  },
                  {
                    "title": "Introduction to React Spectrum",
                    "path": "guides/app_builder_guides/architecture_overview/introduction_to_react_spectrum/introduction_to_react_spectrum"
                  },
                  {
                    "title": "Using SDKs",
                    "path": "guides/app_builder_guides/architecture_overview/using_sdks/using_sdks"
                  }
                ]
              },
              {
                "title": "Application Logging",
                "path": "guides/app_builder_guides/application_logging",
                "pages": [
                  {
                    "title": "Azure Log Analytics",
                    "path": "guides/app_builder_guides/application_logging/azure_log_analytics/azure_log_analytics"
                  },
                  {
                    "title": "Logging",
                    "path": "guides/app_builder_guides/application_logging/logging/logging"
                  },
                  {
                    "title": "New Relic",
                    "path": "guides/app_builder_guides/application_logging/new_relic/new_relic"
                  },
                  {
                    "title": "Splunk Cloud",
                    "path": "guides/app_builder_guides/application_logging/splunk_cloud/splunk_cloud"
                  },
                  {
                    "title": "Splunk Enterprise",
                    "path": "guides/app_builder_guides/application_logging/splunk_enterprise/splunk_enterprise"
                  }
                ]
              },
              {
                "title": "Configuration",
                "path": "guides/app_builder_guides/configuration",
                "pages": [
                  {
                    "title": "Configuration",
                    "path": "guides/app_builder_guides/configuration/configuration/configuration"
                  },
                  {
                    "title": "Webpack Configuration",
                    "path": "guides/app_builder_guides/configuration/webpack_configuration/webpack_configuration"
                  }
                ]
              },
              {
                "title": "Deployment",
                "path": "guides/app_builder_guides/deployment",
                "pages": [
                  {
                    "title": "CI/CD for App Builder Apps",
                    "path": "guides/app_builder_guides/deployment/cicd_for_app_builder_apps/cicd_for_app_builder_apps"
                  },
                  {
                    "title": "Credential Rotation",
                    "path": "guides/app_builder_guides/deployment/credential_rotation/credential_rotation"
                  },
                  {
                    "title": "Deployment",
                    "path": "guides/app_builder_guides/deployment/deployment/deployment"
                  },
                  {
                    "title": "Setting Response Headers",
                    "path": "guides/app_builder_guides/deployment/setting_response_headers/setting_response_headers"
                  }
                ]
              },
              {
                "title": "Development",
                "path": "guides/app_builder_guides/development/development"
              },
              {
                "title": "Distribution",
                "path": "guides/app_builder_guides/distribution/distribution"
              },
              {
                "title": "Events",
                "path": "guides/app_builder_guides/events",
                "pages": [
                  {
                    "title": "Custom Events",
                    "path": "guides/app_builder_guides/events/custom_events/custom_events"
                  },
                  {
                    "title": "Webhooks",
                    "path": "guides/app_builder_guides/events/webhooks/webhooks"
                  }
                ]
              },
              {
                "title": "Exc App",
                "path": "guides/app_builder_guides/exc_app",
                "pages": [
                  {
                    "title": "AEC Integration",
                    "path": "guides/app_builder_guides/exc_app/aec_integration/aec_integration"
                  },
                  {
                    "title": "Interfaces",
                    "path": "guides/app_builder_guides/exc_app/interfaces",
                    "pages": [
                      {
                        "title": "Modules",
                        "path": "guides/app_builder_guides/exc_app/interfaces/modules/modules"
                      },
                      {
                        "title": "Page ObjectWithHref",
                        "path": "guides/app_builder_guides/exc_app/interfaces/page.objectwithhref/page.objectwithhref"
                      },
                      {
                        "title": "Page ObjectWithPath",
                        "path": "guides/app_builder_guides/exc_app/interfaces/page.objectwithpath/page.objectwithpath"
                      },
                      {
                        "title": "Page PageAPI",
                        "path": "guides/app_builder_guides/exc_app/interfaces/page.pageapi/page.pageapi"
                      },
                      {
                        "title": "Page PageAPIProperties",
                        "path": "guides/app_builder_guides/exc_app/interfaces/page.pageapiproperties/page.pageapiproperties"
                      },
                      {
                        "title": "Runtime",
                        "path": "guides/app_builder_guides/exc_app/interfaces/runtime/runtime"
                      },
                      {
                        "title": "TopBar Callback",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.callback/topbar.callback"
                      },
                      {
                        "title": "TopBar CustomFeedbackConfig",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.customfeedbackconfig/topbar.customfeedbackconfig"
                      },
                      {
                        "title": "TopBar CustomSearchConfig",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.customsearchconfig/topbar.customsearchconfig"
                      },
                      {
                        "title": "TopBar ExternalFeedbackConfig",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.externalfeedbackconfig/topbar.externalfeedbackconfig"
                      },
                      {
                        "title": "TopBar HelpCenterFeedbackConfig",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.helpcenterfeedbackconfig/topbar.helpcenterfeedbackconfig"
                      },
                      {
                        "title": "TopBar Solution",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.solution/topbar.solution"
                      },
                      {
                        "title": "TopBar TopBarAPI",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.topbarapi/topbar.topbarapi"
                      },
                      {
                        "title": "TopBar TopBarAPIProperties",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.topbarapiproperties/topbar.topbarapiproperties"
                      },
                      {
                        "title": "User UserAPI",
                        "path": "guides/app_builder_guides/exc_app/interfaces/user.userapi/user.userapi"
                      },
                      {
                        "title": "User UserInfo",
                        "path": "guides/app_builder_guides/exc_app/interfaces/user.userinfo/user.userinfo"
                      }
                    ]
                  },
                  {
                    "title": "Migrate App to Exp Cloud SPA",
                    "path": "guides/app_builder_guides/exc_app/migrate_app_to_exp_cloud_spa/migrate_app_to_exp_cloud_spa"
                  },
                  {
                    "title": "Modules",
                    "path": "guides/app_builder_guides/exc_app/modules",
                    "pages": [
                      {
                        "title": "Index",
                        "path": "guides/app_builder_guides/exc_app/modules/index/index"
                      },
                      {
                        "title": "Page",
                        "path": "guides/app_builder_guides/exc_app/modules/page/page"
                      },
                      {
                        "title": "TopBar",
                        "path": "guides/app_builder_guides/exc_app/modules/topbar/topbar"
                      },
                      {
                        "title": "User",
                        "path": "guides/app_builder_guides/exc_app/modules/user/user"
                      }
                    ]
                  }
                ]
              },
              {
                "title": "Extensions",
                "path": "guides/app_builder_guides/extensions",
                "pages": [
                  {
                    "title": "Extension Migration Guide",
                    "path": "guides/app_builder_guides/extensions/extension_migration_guide/extension_migration_guide"
                  },
                  {
                    "title": "Extensions",
                    "path": "guides/app_builder_guides/extensions/extensions/extensions"
                  }
                ]
              },
              {
                "title": "Optimization",
                "path": "guides/app_builder_guides/optimization/optimization"
              },
              {
                "title": "Security",
                "path": "guides/app_builder_guides/security",
                "pages": [
                  {
                    "title": "Index",
                    "path": "guides/app_builder_guides/security/index/index"
                  },
                  {
                    "title": "Understanding Authentication",
                    "path": "guides/app_builder_guides/security/understanding_authentication/understanding_authentication"
                  }
                ]
              },
              {
                "title": "Telemetry",
                "path": "guides/app_builder_guides/telemetry/telemetry"
              }
            ]
          },
          {
            "title": "Runtime Guides",
            "path": "guides/runtime_guides",
            "pages": [
              {
                "title": "Asynchronous Calls",
                "path": "guides/runtime_guides/asynchronous_calls/asynchronous_calls"
              },
              {
                "title": "Creating Actions",
                "path": "guides/runtime_guides/creating_actions/creating_actions"
              },
              {
                "title": "Creating REST APIs",
                "path": "guides/runtime_guides/creating_rest_apis/creating_rest_apis"
              },
              {
                "title": "CI/CD Pipeline",
                "path": "guides/runtime_guides/ci-cd_pipeline/ci-cd_pipeline"
              },
              {
                "title": "Debugging",
                "path": "guides/runtime_guides/debugging/debugging"
              },
              {
                "title": "Logging & Monitoring",
                "path": "guides/runtime_guides/logging_monitoring/logging_monitoring"
              },
              {
                "title": "Reference Docs",
                "path": "guides/runtime_guides/reference_docs",
                "pages": [
                  {
                    "title": "API Reference",
                    "path": "guides/runtime_guides/reference_docs/api_ref/api_ref"
                  },
                  {
                    "title": "CLI Usage",
                    "path": "guides/runtime_guides/reference_docs/cli_use/cli_use"
                  },
                  {
                    "title": "Configuring Proxy",
                    "path": "guides/runtime_guides/reference_docs/configuringproxy/configuringproxy"
                  },
                  {
                    "title": "Environment Variables",
                    "path": "guides/runtime_guides/reference_docs/environment_variables/environment_variables"
                  },
                  {
                    "title": "Feeds",
                    "path": "guides/runtime_guides/reference_docs/feeds/feeds"
                  },
                  {
                    "title": "Index",
                    "path": "guides/runtime_guides/reference_docs/index/index"
                  },
                  {
                    "title": "Multiple Regions",
                    "path": "guides/runtime_guides/reference_docs/multiple_regions/multiple_regions"
                  },
                  {
                    "title": "Packages",
                    "path": "guides/runtime_guides/reference_docs/packages/packages"
                  },
                  {
                    "title": "Prepackages",
                    "path": "guides/runtime_guides/reference_docs/prepackages/prepackages"
                  },
                  {
                    "title": "Runtimes",
                    "path": "guides/runtime_guides/reference_docs/runtimes/runtimes"
                  },
                  {
                    "title": "Sequences & Compositions",
                    "path": "guides/runtime_guides/reference_docs/sequences_compositions/sequences_compositions"
                  },
                  {
                    "title": "Triggers & Rules",
                    "path": "guides/runtime_guides/reference_docs/triggersrules/triggersrules"
                  },
                  {
                    "title": "WSK Usage",
                    "path": "guides/runtime_guides/reference_docs/wsk_use/wsk_use"
                  }
                ]
              },
              {
                "title": "Security General",
                "path": "guides/runtime_guides/security_general/security_general"
              },
              {
                "title": "Securing Web Actions",
                "path": "guides/runtime_guides/securing_web_actions/securing_web_actions"
              },
              {
                "title": "System Settings",
                "path": "guides/runtime_guides/system_settings/system_settings"
              },
              {
                "title": "Throughput Tuning",
                "path": "guides/runtime_guides/throughput_tuning/throughput_tuning"
              },
              {
                "title": "Tools",
                "path": "guides/runtime_guides/tools",
                "pages": [
                  {
                    "title": "CLI Install",
                    "path": "guides/runtime_guides/tools/cli_install/cli_install"
                  },
                  {
                    "title": "Index",
                    "path": "guides/runtime_guides/tools/index/index"
                  },
                  {
                    "title": "WSKDeploy Install",
                    "path": "guides/runtime_guides/tools/wskdeploy_install/wskdeploy_install"
                  }
                ]
              },
              {
                "title": "Troubleshooting",
                "path": "guides/runtime_guides/troubleshooting/troubleshooting"
              },
              {
                "title": "Using Packages",
                "path": "guides/runtime_guides/using_packages/using_packages"
              },
              {
                "title": "Using Runtime",
                "path": "guides/runtime_guides/using_runtime/using_runtime"
              }
            ]
          }
        ]
      },
      {
        "title": "Resources",
        "path": "resources/",
        "pages": [
          {
            "title": "Asset Compute Worker PS API",
            "path": "resources/asset-compute-worker-ps-api",
            "pages": [
              {
                "title": "Requirements",
                "path": "resources/asset-compute-worker-ps-api/requirements"
              },
              {
                "title": "Lesson 1: Create an app from Asset Compute template",
                "path": "resources/asset-compute-worker-ps-api/lesson1"
              },
              {
                "title": "Lesson 2: Configure the app",
                "path": "resources/asset-compute-worker-ps-api/lesson2"
              },
              {
                "title": "Lesson 3: Develop worker calling Photoshop API",
                "path": "resources/asset-compute-worker-ps-api/lesson3"
              },
              {
                "title": "Lesson 4: Integrate worker in AEMaaCS",
                "path": "resources/asset-compute-worker-ps-api/lesson4"
              },
              {
                "title": "Well done",
                "path": "resources/asset-compute-worker-ps-api/welldone"
              }
            ]
          },
          {
            "title": "Barcode Reader",
            "path": "resources/barcode-reader",
            "pages": [
              {
                "title": "Requirements",
                "path": "resources/barcode-reader/requirements"
              },
              {
                "title": "Lesson 1: Bootstrap a Headless App",
                "path": "resources/barcode-reader/bootstrap"
              },
              {
                "title": "Lesson 2: Writing a Serverless Action",
                "path": "resources/barcode-reader/barcode"
              },
              {
                "title": "Lesson 3: Unit and E2E Tests",
                "path": "resources/barcode-reader/test"
              },
              {
                "title": "Well done",
                "path": "resources/barcode-reader/welldone"
              }
            ]
          },
          {
            "title": "Blog Articles",
            "path": "resources/blog_articles",
            "pages": [
              {
                "title": "Blog Articles",
                "path": "resources/blog_articles/blog_articles"
              }
            ]
          },
          {
            "title": "CI/CD",
            "path": "resources/ci-cd",
            "pages": [
              {
                "title": "Requirements",
                "path": "resources/ci-cd/requirements"
              },
              {
                "title": "Lesson 1: Setup CI/CD",
                "path": "resources/ci-cd/lesson1"
              },
              {
                "title": "Lesson 2: Monitoring CI/CD",
                "path": "resources/ci-cd/lesson2"
              },
              {
                "title": "Lesson 3: Custom CI/CD workflow",
                "path": "resources/ci-cd/lesson3"
              },
              {
                "title": "Well done",
                "path": "resources/ci-cd/welldone"
              }
            ]
          },
          {
            "title": "Cron Jobs",
            "path": "resources/cron-jobs",
            "pages": [
              {
                "title": "Requirements",
                "path": "resources/cron-jobs/requirements"
              },
              {
                "title": "Lesson 1: Bootstrap a Headless App",
                "path": "resources/cron-jobs/lesson1"
              },
              {
                "title": "Lesson 2: Set up Alarm Feed with Trigger and Rule",
                "path": "resources/cron-jobs/lesson2"
              },
              {
                "title": "Lesson 3: Types of Alarm Feed",
                "path": "resources/cron-jobs/lesson3"
              },
              {
                "title": "Well done",
                "path": "resources/cron-jobs/welldone"
              }
            ]
          },
          {
            "title": "Custom Asset Compute Worker",
            "path": "resources/custom-asset-compute-worker",
            "pages": [
              {
                "title": "Requirements",
                "path": "resources/custom-asset-compute-worker/requirements"
              },
              {
                "title": "How AEM as Cloud assets works",
                "path": "resources/custom-asset-compute-worker/aem-cloud-assets"
              },
              {
                "title": "Architecture of our worker",
                "path": "resources/custom-asset-compute-worker/our-worker"
              },
              {
                "title": "Configure services",
                "path": "resources/custom-asset-compute-worker/lesson1"
              },
              {
                "title": "Local environment setup",
                "path": "resources/custom-asset-compute-worker/lesson2"
              },
              {
                "title": "Implement the worker",
                "path": "resources/custom-asset-compute-worker/lesson3"
              },
              {
                "title": "Test the worker",
                "path": "resources/custom-asset-compute-worker/lesson4"
              },
              {
                "title": "Setup AEM to use the worker",
                "path": "resources/custom-asset-compute-worker/lesson5"
              },
              {
                "title": "Well Done",
                "path": "resources/custom-asset-compute-worker/welldone"
              }
            ]
          },
          {
            "title": "Customer Dashboard",
            "path": "resources/customer-dashboard",
            "pages": [
              {
                "title": "Requirements",
                "path": "resources/customer-dashboard/requirements"
              },
              {
                "title": "Lesson 1: Create a New App Builder App from Campaign Standard Template",
                "path": "resources/customer-dashboard/lesson1"
              },
              {
                "title": "Lesson 2: Explore the App Builder App",
                "path": "resources/customer-dashboard/lesson2"
              },
              {
                "title": "Lesson 3: Run the App Builder App Locally",
                "path": "resources/customer-dashboard/lesson3"
              },
              {
                "title": "Lesson 4: List All Customer Profiles on the UI",
                "path": "resources/customer-dashboard/lesson4"
              },
              {
                "title": "Lesson 5: Add Personalized Promotion Emails Triggering",
                "path": "resources/customer-dashboard/lesson5"
              },
              {
                "title": "Well Done",
                "path": "resources/customer-dashboard/welldone"
              }
            ]
          },
          {
            "title": "Debugging",
            "path": "resources/debugging",
            "pages": [
              {
                "title": "Requirements",
                "path": "resources/debugging/requirements"
              },
              {
                "title": "Lesson 1: Getting familiar with Debugger",
                "path": "resources/debugging/lesson1"
              },
              {
                "title": "Lesson 2: Debugging Application Code",
                "path": "resources/debugging/lesson2"
              },
              {
                "title": "Lesson 3: Managing Application Logs",
                "path": "resources/debugging/lesson3"
              },
              {
                "title": "Well Done",
                "path": "resources/debugging/welldone"
              }
            ]
          },
          {
            "title": "Event Driven",
            "path": "resources/event-driven",
            "pages": [
              {
                "title": "Requirements",
                "path": "resources/event-driven/requirements"
              },
              {
                "title": "Lesson 1: Create a New App Builder App from Template",
                "path": "resources/event-driven/lesson1"
              },
              {
                "title": "Lesson 2: Register the App as Event Provider",
                "path": "resources/event-driven/lesson2"
              },
              {
                "title": "Lesson 3: Fire an Event",
                "path": "resources/event-driven/lesson3"
              },
              {
                "title": "Lesson 4: Consume Events",
                "path": "resources/event-driven/lesson4"
              },
              {
                "title": "Well Done",
                "path": "resources/event-driven/welldone"
              }
            ]
          },
          {
            "title": "Events Runtime",
            "path": "resources/events-runtime",
            "pages": [
              {
                "title": "Requirements",
                "path": "resources/events-runtime/requirements"
              },
              {
                "title": "Lesson 1: Step by Step Guide",
                "path": "resources/events-runtime/lesson1"
              },
              {
                "title": "Lesson 2: Verify the result",
                "path": "resources/events-runtime/lesson2"
              },
              {
                "title": "Well done",
                "path": "resources/events-runtime/welldone"
              }
            ]
          },
          {
            "title": "Journaling Events",
            "path": "resources/journaling-events",
            "pages": [
              {
                "title": "Requirements",
                "path": "resources/journaling-events/requirements"
              },
              {
                "title": "Lesson 1: Create an Event Provider using App Builder",
                "path": "resources/journaling-events/lesson1"
              },
              {
                "title": "Lesson 2: Create the Event Consumer using Journaling API",
                "path": "resources/journaling-events/lesson2"
              },
              {
                "title": "Lesson 3: End to end test",
                "path": "resources/journaling-events/lesson3"
              },
              {
                "title": "Well done",
                "path": "resources/journaling-events/welldone"
              }
            ]
          },
          {
            "title": "Sample Apps",
            "path": "resources/sample_apps",
            "pages": [
              {
                "title": "Code Snippets",
                "path": "resources/sample_apps/code_snippets",
                "pages": [
                  {
                    "title": "Caching HTTP responses",
                    "path": "resources/sample_apps/code_snippets/caching"
                  },
                  {
                    "title": "App Builder Files SDK",
                    "path": "resources/sample_apps/code_snippets/files"
                  },
                  {
                    "title": "App Builder State SDK",
                    "path": "resources/sample_apps/code_snippets/state"
                  },
                  {
                    "title": "I/O Events handler",
                    "path": "resources/sample_apps/code_snippets/events"
                  },
                  {
                    "title": "Real-time data from Adobe Analytics API 1.4",
                    "path": "resources/sample_apps/code_snippets/analytics"
                  }
                ]
              }
            ]
          },
          {
            "title": "Spectrum Introduction",
            "path": "resources/spectrum-intro",
            "pages": [
              {
                "title": "Lesson 1: What is Spectrum ?",
                "path": "resources/spectrum-intro/lesson1"
              },
              {
                "title": "Lesson 2: Using Spectrum CSS",
                "path": "resources/spectrum-intro/lesson2"
              },
              {
                "title": "Lesson 3: Using React Spectrum",
                "path": "resources/spectrum-intro/lesson3"
              },
              {
                "title": "Lesson 4: Using React Spectrum in App Builder",
                "path": "resources/spectrum-intro/lesson4"
              },
              {
                "title": "Well done",
                "path": "resources/spectrum-intro/welldone"
              }
            ]
          },
          {
            "title": "Todo App",
            "path": "resources/todo-app",
            "pages": [
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
            "title": "Videos",
            "path": "resources/videos",
            "pages": [
              {
                "title": "Overview",
                "path": "resources/videos/overview",
                "pages": [
                  {
                    "title": "Introducing App Builder",
                    "path": "resources/videos/overview/introduction"
                  },
                  {
                    "title": "Getting Started",
                    "path": "resources/videos/overview/getting-started"
                  },
                  {
                    "title": "Architecture",
                    "path": "resources/videos/overview/architecture"
                  },
                  {
                    "title": "A Full Security Overview",
                    "path": "resources/videos/overview/security"
                  },
                  {
                    "title": "User Journey",
                    "path": "resources/videos/overview/e2e-user-journey"
                  }
                ]
              },
              {
                "title": "Exploring",
                "path": "resources/videos/exploring",
                "pages": [
                  {
                    "title": "Projects and Workspaces",
                    "path": "resources/videos/exploring/projects-and-workspaces"
                  },
                  {
                    "title": "React Spectrum",
                    "path": "resources/videos/exploring/react-spectrum"
                  },
                  {
                    "title": "Custom Events",
                    "path": "resources/videos/exploring/custom-events"
                  },
                  {
                    "title": "CI/CD",
                    "path": "resources/videos/exploring/ci-cd"
                  },
                  {
                    "title": "Debugging",
                    "path": "resources/videos/exploring/debugging"
                  },
                  {
                    "title": "Learning Resources",
                    "path": "resources/videos/exploring/learning-resources"
                  },
                  {
                    "title": "Dashboard Case Study",
                    "path": "resources/videos/exploring/dashboard-case-study"
                  },
                  {
                    "title": "ODE Case Study",
                    "path": "resources/videos/exploring/ode-case-study"
                  },
                  {
                    "title": "Deep Dive Use Cases",
                    "path": "resources/videos/exploring/deep-dive-use-cases"
                  },
                  {
                    "title": "Live Wired Sneak",
                    "path": "resources/videos/exploring/live-wired-sneak"
                  },
                  {
                    "title": "Softcrylic Partner Showcase",
                    "path": "resources/videos/exploring/softcrylic-showcase"
                  }
                ]
              },
              {
                "title": "Developers Live",
                "path": "resources/videos/developers-live",
                "pages": [
                  {
                    "title": "App Builder Deep Dive",
                    "path": "resources/videos/developers-live/deep-dive"
                  },
                  {
                    "title": "Asset Compute Service Extensibility",
                    "path": "resources/videos/developers-live/asset-compute-service-extensibility"
                  },
                  {
                    "title": "Extend Adobe Experience Cloud",
                    "path": "resources/videos/developers-live/extend-experience-cloud"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: ['@adobe/gatsby-theme-aio'],
  pathPrefix: process.env.PATH_PREFIX || '/app-builder/docs/'
};

