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
        "path": "intro_and_overview/app_builder_overview.md"
      },
      {
        "title": "Getting Started",
        "path": "get_started/app_builder_get_started/first_app.md"
      },
      {
        "title": "Guides",
        "path": "guides/guides_index.md"
      },
      {
        "title": "Resources",
        "path": "resources/index.md"
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
        "title": "Getting Started",
        "path": "get_started",
        "pages": [
          {
            "title": "App Builder Getting Started",
            "path": "get_started/app_builder_get_started",
            "pages": [
              {
                "title": "App Builder and Runtime",
                "path": "get_started/app_builder_get_started/app_builder_and_runtime.md"
              },
              {
                "title": "App Builder Introduction",
                "path": "get_started/app_builder_get_started/app_builder_intro.md"
              },
              {
                "title": "Creating your First App",
                "path": "get_started/app_builder_get_started/first_app.md"
              },
              {
                "title": "Publishing Your App",
                "path": "get_started/app_builder_get_started/publish_app.md"
              },
              {
                "title": "Setting Up",
                "path": "get_started/app_builder_get_started/set_up.md"
              },
              {
                "title": "Troubleshooting",
                "path": "get_started/app_builder_get_started/troubleshoot.md"
              }
            ]
          },
          {
            "title": "Runtime Getting Started",
            "path": "get_started/runtime_getting_started",
            "pages": [
              {
                "title": "Activations",
                "path": "get_started/runtime_getting_started/activations.md"
              },
              {
                "title": "Deploy",
                "path": "get_started/runtime_getting_started/deploy.md"
              },
              {
                "title": "Entities",
                "path": "get_started/runtime_getting_started/entities.md"
              },
              {
                "title": "How Runtime Works",
                "path": "get_started/runtime_getting_started/how_runtime_works.md"
              },
              {
                "title": "Resources",
                "path": "get_started/runtime_getting_started/resources.md"
              },
              {
                "title": "Runtime Introduction",
                "path": "get_started/runtime_getting_started/runtime_intro.md"
              },
              {
                "title": "Setup",
                "path": "get_started/runtime_getting_started/setup.md"
              },
              {
                "title": "Understanding Runtime",
                "path": "get_started/runtime_getting_started/understanding_runtime.md"
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
            "path": "guides/application_state.md"
          },
          {
            "title": "Contribution Guide",
            "path": "guides/contribution_guide.md"
          },
          {
            "title": "References",
            "path": "guides/references.md"
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
                    "path": "guides/app_builder_guides/architecture_overview/app_hooks.md"
                  },
                  {
                    "title": "Application State",
                    "path": "guides/app_builder_guides/architecture_overview/application_state.md"
                  },
                  {
                    "title": "Architecture Overview",
                    "path": "guides/app_builder_guides/architecture_overview/architecture_overview.md"
                  },
                  {
                    "title": "Introduction to React Spectrum",
                    "path": "guides/app_builder_guides/architecture_overview/introduction_to_react_spectrum.md"
                  },
                  {
                    "title": "Using SDKs",
                    "path": "guides/app_builder_guides/architecture_overview/using_sdks.md"
                  }
                ]
              },
              {
                "title": "Application Logging",
                "path": "guides/app_builder_guides/application_logging",
                "pages": [
                  {
                    "title": "Azure Log Analytics",
                    "path": "guides/app_builder_guides/application_logging/azure_log_analytics.md"
                  },
                  {
                    "title": "Logging",
                    "path": "guides/app_builder_guides/application_logging/logging.md"
                  },
                  {
                    "title": "New Relic",
                    "path": "guides/app_builder_guides/application_logging/new_relic.md"
                  },
                  {
                    "title": "Splunk Cloud",
                    "path": "guides/app_builder_guides/application_logging/splunk_cloud.md"
                  },
                  {
                    "title": "Splunk Enterprise",
                    "path": "guides/app_builder_guides/application_logging/splunk_enterprise.md"
                  }
                ]
              },
              {
                "title": "Configuration",
                "path": "guides/app_builder_guides/configuration",
                "pages": [
                  {
                    "title": "Configuration",
                    "path": "guides/app_builder_guides/configuration/configuration.md"
                  },
                  {
                    "title": "Webpack Configuration",
                    "path": "guides/app_builder_guides/configuration/webpack_configuration.md"
                  }
                ]
              },
              {
                "title": "Deployment",
                "path": "guides/app_builder_guides/deployment",
                "pages": [
                  {
                    "title": "CI/CD for App Builder Apps",
                    "path": "guides/app_builder_guides/deployment/cicd_for_app_builder_apps.md"
                  },
                  {
                    "title": "Credential Rotation",
                    "path": "guides/app_builder_guides/deployment/credential_rotation.md"
                  },
                  {
                    "title": "Deployment",
                    "path": "guides/app_builder_guides/deployment/deployment.md"
                  },
                  {
                    "title": "Setting Response Headers",
                    "path": "guides/app_builder_guides/deployment/setting_response_headers.md"
                  }
                ]
              },
              {
                "title": "Development",
                "path": "guides/app_builder_guides/development.md"
              },
              {
                "title": "Distribution",
                "path": "guides/app_builder_guides/distribution.md"
              },
              {
                "title": "Events",
                "path": "guides/app_builder_guides/events",
                "pages": [
                  {
                    "title": "Custom Events",
                    "path": "guides/app_builder_guides/events/custom_events.md"
                  },
                  {
                    "title": "Webhooks",
                    "path": "guides/app_builder_guides/events/webhooks.md"
                  }
                ]
              },
              {
                "title": "Exc App",
                "path": "guides/app_builder_guides/exc_app",
                "pages": [
                  {
                    "title": "AEC Integration",
                    "path": "guides/app_builder_guides/exc_app/aec_integration.md"
                  },
                  {
                    "title": "Interfaces",
                    "path": "guides/app_builder_guides/exc_app/interfaces",
                    "pages": [
                      {
                        "title": "Modules",
                        "path": "guides/app_builder_guides/exc_app/interfaces/modules.md"
                      },
                      {
                        "title": "Page ObjectWithHref",
                        "path": "guides/app_builder_guides/exc_app/interfaces/page.objectwithhref.md"
                      },
                      {
                        "title": "Page ObjectWithPath",
                        "path": "guides/app_builder_guides/exc_app/interfaces/page.objectwithpath.md"
                      },
                      {
                        "title": "Page PageAPI",
                        "path": "guides/app_builder_guides/exc_app/interfaces/page.pageapi.md"
                      },
                      {
                        "title": "Page PageAPIProperties",
                        "path": "guides/app_builder_guides/exc_app/interfaces/page.pageapiproperties.md"
                      },
                      {
                        "title": "Runtime",
                        "path": "guides/app_builder_guides/exc_app/interfaces/runtime.md"
                      },
                      {
                        "title": "TopBar Callback",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.callback.md"
                      },
                      {
                        "title": "TopBar CustomFeedbackConfig",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.customfeedbackconfig.md"
                      },
                      {
                        "title": "TopBar CustomSearchConfig",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.customsearchconfig.md"
                      },
                      {
                        "title": "TopBar ExternalFeedbackConfig",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.externalfeedbackconfig.md"
                      },
                      {
                        "title": "TopBar HelpCenterFeedbackConfig",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.helpcenterfeedbackconfig.md"
                      },
                      {
                        "title": "TopBar Solution",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.solution.md"
                      },
                      {
                        "title": "TopBar TopBarAPI",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.topbarapi.md"
                      },
                      {
                        "title": "TopBar TopBarAPIProperties",
                        "path": "guides/app_builder_guides/exc_app/interfaces/topbar.topbarapiproperties.md"
                      },
                      {
                        "title": "User UserAPI",
                        "path": "guides/app_builder_guides/exc_app/interfaces/user.userapi.md"
                      },
                      {
                        "title": "User UserInfo",
                        "path": "guides/app_builder_guides/exc_app/interfaces/user.userinfo.md"
                      }
                    ]
                  },
                  {
                    "title": "Migrate App to Exp Cloud SPA",
                    "path": "guides/app_builder_guides/exc_app/migrate_app_to_exp_cloud_spa.md"
                  },
                  {
                    "title": "Modules",
                    "path": "guides/app_builder_guides/exc_app/modules",
                    "pages": [
                      {
                        "title": "Index",
                        "path": "guides/app_builder_guides/exc_app/modules/index.md"
                      },
                      {
                        "title": "Page",
                        "path": "guides/app_builder_guides/exc_app/modules/page.md"
                      },
                      {
                        "title": "TopBar",
                        "path": "guides/app_builder_guides/exc_app/modules/topbar.md"
                      },
                      {
                        "title": "User",
                        "path": "guides/app_builder_guides/exc_app/modules/user.md"
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
                    "path": "guides/app_builder_guides/extensions/extension_migration_guide.md"
                  },
                  {
                    "title": "Extensions",
                    "path": "guides/app_builder_guides/extensions/extensions.md"
                  }
                ]
              },
              {
                "title": "Optimization",
                "path": "guides/app_builder_guides/optimization.md"
              },
              {
                "title": "Security",
                "path": "guides/app_builder_guides/security",
                "pages": [
                  {
                    "title": "Index",
                    "path": "guides/app_builder_guides/security/index.md"
                  },
                  {
                    "title": "Understanding Authentication",
                    "path": "guides/app_builder_guides/security/understanding_authentication.md"
                  }
                ]
              },
              {
                "title": "Telemetry",
                "path": "guides/app_builder_guides/telemetry.md"
              }
            ]
          },
          {
            "title": "Runtime Guides",
            "path": "guides/runtime_guides",
            "pages": [
              {
                "title": "Asynchronous Calls",
                "path": "guides/runtime_guides/asynchronous_calls.md"
              },
              {
                "title": "Creating Actions",
                "path": "guides/runtime_guides/creating_actions.md"
              },
              {
                "title": "Creating REST APIs",
                "path": "guides/runtime_guides/creating_rest_apis.md"
              },
              {
                "title": "CI/CD Pipeline",
                "path": "guides/runtime_guides/ci-cd_pipeline.md"
              },
              {
                "title": "Debugging",
                "path": "guides/runtime_guides/debugging.md"
              },
              {
                "title": "Logging & Monitoring",
                "path": "guides/runtime_guides/logging_monitoring.md"
              },
              {
                "title": "Reference Docs",
                "path": "guides/runtime_guides/reference_docs",
                "pages": [
                  {
                    "title": "API Reference",
                    "path": "guides/runtime_guides/reference_docs/api_ref.md"
                  },
                  {
                    "title": "CLI Usage",
                    "path": "guides/runtime_guides/reference_docs/cli_use.md"
                  },
                  {
                    "title": "Configuring Proxy",
                    "path": "guides/runtime_guides/reference_docs/configuringproxy.md"
                  },
                  {
                    "title": "Environment Variables",
                    "path": "guides/runtime_guides/reference_docs/environment_variables.md"
                  },
                  {
                    "title": "Feeds",
                    "path": "guides/runtime_guides/reference_docs/feeds.md"
                  },
                  {
                    "title": "Index",
                    "path": "guides/runtime_guides/reference_docs/index.md"
                  },
                  {
                    "title": "Multiple Regions",
                    "path": "guides/runtime_guides/reference_docs/multiple_regions.md"
                  },
                  {
                    "title": "Packages",
                    "path": "guides/runtime_guides/reference_docs/packages.md"
                  },
                  {
                    "title": "Prepackages",
                    "path": "guides/runtime_guides/reference_docs/prepackages.md"
                  },
                  {
                    "title": "Runtimes",
                    "path": "guides/runtime_guides/reference_docs/runtimes.md"
                  },
                  {
                    "title": "Sequences & Compositions",
                    "path": "guides/runtime_guides/reference_docs/sequences_compositions.md"
                  },
                  {
                    "title": "Triggers & Rules",
                    "path": "guides/runtime_guides/reference_docs/triggersrules.md"
                  },
                  {
                    "title": "WSK Usage",
                    "path": "guides/runtime_guides/reference_docs/wsk_use.md"
                  }
                ]
              },
              {
                "title": "Security General",
                "path": "guides/runtime_guides/security_general.md"
              },
              {
                "title": "Securing Web Actions",
                "path": "guides/runtime_guides/securing_web_actions.md"
              },
              {
                "title": "System Settings",
                "path": "guides/runtime_guides/system_settings.md"
              },
              {
                "title": "Throughput Tuning",
                "path": "guides/runtime_guides/throughput_tuning.md"
              },
              {
                "title": "Tools",
                "path": "guides/runtime_guides/tools",
                "pages": [
                  {
                    "title": "CLI Install",
                    "path": "guides/runtime_guides/tools/cli_install.md"
                  },
                  {
                    "title": "Index",
                    "path": "guides/runtime_guides/tools/index.md"
                  },
                  {
                    "title": "WSKDeploy Install",
                    "path": "guides/runtime_guides/tools/wskdeploy_install.md"
                  }
                ]
              },
              {
                "title": "Troubleshooting",
                "path": "guides/runtime_guides/troubleshooting.md"
              },
              {
                "title": "Using Packages",
                "path": "guides/runtime_guides/using_packages.md"
              },
              {
                "title": "Using Runtime",
                "path": "guides/runtime_guides/using_runtime.md"
              }
            ]
          }
        ]
      },
      {
        "title": "Resources",
        "path": "resources",
        "pages": [
          {
            "title": "Asset Compute Worker PS API",
            "path": "resources/asset-compute-worker-ps-api",
            "pages": [
              {
                "title": "Index",
                "path": "resources/asset-compute-worker-ps-api/index.md"
              },
              {
                "title": "Lesson 1",
                "path": "resources/asset-compute-worker-ps-api/lesson1.md"
              },
              {
                "title": "Lesson 2",
                "path": "resources/asset-compute-worker-ps-api/lesson2.md"
              },
              {
                "title": "Lesson 3",
                "path": "resources/asset-compute-worker-ps-api/lesson3.md"
              },
              {
                "title": "Lesson 4",
                "path": "resources/asset-compute-worker-ps-api/lesson4.md"
              },
              {
                "title": "Requirements",
                "path": "resources/asset-compute-worker-ps-api/requirements.md"
              },
              {
                "title": "Well Done",
                "path": "resources/asset-compute-worker-ps-api/welldone.md"
              }
            ]
          },
          {
            "title": "Barcode Reader",
            "path": "resources/barcode-reader",
            "pages": [
              {
                "title": "Barcode",
                "path": "resources/barcode-reader/barcode.md"
              },
              {
                "title": "Bootstrap",
                "path": "resources/barcode-reader/bootstrap.md"
              },
              {
                "title": "Index",
                "path": "resources/barcode-reader/index.md"
              },
              {
                "title": "Requirements",
                "path": "resources/barcode-reader/requirements.md"
              },
              {
                "title": "Test",
                "path": "resources/barcode-reader/test.md"
              },
              {
                "title": "Well Done",
                "path": "resources/barcode-reader/welldone.md"
              }
            ]
          },
          {
            "title": "Blog Articles",
            "path": "resources/blog_articles.md"
          },
          {
            "title": "CI/CD",
            "path": "resources/ci-cd",
            "pages": [
              {
                "title": "Index",
                "path": "resources/ci-cd/index.md"
              },
              {
                "title": "Lesson 1",
                "path": "resources/ci-cd/lesson1.md"
              },
              {
                "title": "Lesson 2",
                "path": "resources/ci-cd/lesson2.md"
              },
              {
                "title": "Lesson 3",
                "path": "resources/ci-cd/lesson3.md"
              },
              {
                "title": "Requirements",
                "path": "resources/ci-cd/requirements.md"
              },
              {
                "title": "Well Done",
                "path": "resources/ci-cd/welldone.md"
              }
            ]
          },
          {
            "title": "Cron Jobs",
            "path": "resources/cron-jobs",
            "pages": [
              {
                "title": "Index",
                "path": "resources/cron-jobs/index.md"
              },
              {
                "title": "Lesson 1",
                "path": "resources/cron-jobs/lesson1.md"
              },
              {
                "title": "Lesson 2",
                "path": "resources/cron-jobs/lesson2.md"
              },
              {
                "title": "Lesson 3",
                "path": "resources/cron-jobs/lesson3.md"
              },
              {
                "title": "Requirements",
                "path": "resources/cron-jobs/requirements.md"
              },
              {
                "title": "Well Done",
                "path": "resources/cron-jobs/welldone.md"
              }
            ]
          },
          {
            "title": "Custom Asset Compute Worker",
            "path": "resources/custom-asset-compute-worker",
            "pages": [
              {
                "title": "AEM Cloud Assets",
                "path": "resources/custom-asset-compute-worker/aem-cloud-assets.md"
              },
              {
                "title": "Index",
                "path": "resources/custom-asset-compute-worker/index.md"
              },
              {
                "title": "Lesson 1",
                "path": "resources/custom-asset-compute-worker/lesson1.md"
              },
              {
                "title": "Lesson 2",
                "path": "resources/custom-asset-compute-worker/lesson2.md"
              },
              {
                "title": "Lesson 3",
                "path": "resources/custom-asset-compute-worker/lesson3.md"
              },
              {
                "title": "Lesson 4",
                "path": "resources/custom-asset-compute-worker/lesson4.md"
              },
              {
                "title": "Lesson 5",
                "path": "resources/custom-asset-compute-worker/lesson5.md"
              },
              {
                "title": "Our Worker",
                "path": "resources/custom-asset-compute-worker/our-worker.md"
              },
              {
                "title": "Requirements",
                "path": "resources/custom-asset-compute-worker/requirements.md"
              },
              {
                "title": "Well Done",
                "path": "resources/custom-asset-compute-worker/welldone.md"
              }
            ]
          },
          {
            "title": "Customer Dashboard",
            "path": "resources/customer-dashboard",
            "pages": [
              {
                "title": "Index",
                "path": "resources/customer-dashboard/index.md"
              },
              {
                "title": "Lesson 1",
                "path": "resources/customer-dashboard/lesson1.md"
              },
              {
                "title": "Lesson 2",
                "path": "resources/customer-dashboard/lesson2.md"
              },
              {
                "title": "Lesson 3",
                "path": "resources/customer-dashboard/lesson3.md"
              },
              {
                "title": "Lesson 4",
                "path": "resources/customer-dashboard/lesson4.md"
              },
              {
                "title": "Lesson 5",
                "path": "resources/customer-dashboard/lesson5.md"
              },
              {
                "title": "Requirements",
                "path": "resources/customer-dashboard/requirements.md"
              },
              {
                "title": "Well Done",
                "path": "resources/customer-dashboard/welldone.md"
              }
            ]
          },
          {
            "title": "Debugging",
            "path": "resources/debugging",
            "pages": [
              {
                "title": "Index",
                "path": "resources/debugging/index.md"
              },
              {
                "title": "Lesson 1",
                "path": "resources/debugging/lesson1.md"
              },
              {
                "title": "Lesson 2",
                "path": "resources/debugging/lesson2.md"
              },
              {
                "title": "Lesson 3",
                "path": "resources/debugging/lesson3.md"
              },
              {
                "title": "Requirements",
                "path": "resources/debugging/requirements.md"
              },
              {
                "title": "Well Done",
                "path": "resources/debugging/welldone.md"
              }
            ]
          },
          {
            "title": "Event Driven",
            "path": "resources/event-driven",
            "pages": [
              {
                "title": "Index",
                "path": "resources/event-driven/index.md"
              },
              {
                "title": "Lesson 1",
                "path": "resources/event-driven/lesson1.md"
              },
              {
                "title": "Lesson 2",
                "path": "resources/event-driven/lesson2.md"
              },
              {
                "title": "Lesson 3",
                "path": "resources/event-driven/lesson3.md"
              },
              {
                "title": "Lesson 4",
                "path": "resources/event-driven/lesson4.md"
              },
              {
                "title": "Requirements",
                "path": "resources/event-driven/requirements.md"
              },
              {
                "title": "Well Done",
                "path": "resources/event-driven/welldone.md"
              }
            ]
          },
          {
            "title": "Events Runtime",
            "path": "resources/events-runtime",
            "pages": [
              {
                "title": "Index",
                "path": "resources/events-runtime/index.md"
              },
              {
                "title": "Lesson 1",
                "path": "resources/events-runtime/lesson1.md"
              },
              {
                "title": "Lesson 2",
                "path": "resources/events-runtime/lesson2.md"
              },
              {
                "title": "Requirements",
                "path": "resources/events-runtime/requirements.md"
              },
              {
                "title": "Well Done",
                "path": "resources/events-runtime/welldone.md"
              }
            ]
          },
          {
            "title": "Journaling Events",
            "path": "resources/journaling-events",
            "pages": [
              {
                "title": "Index",
                "path": "resources/journaling-events/index.md"
              },
              {
                "title": "Lesson 1",
                "path": "resources/journaling-events/lesson1.md"
              },
              {
                "title": "Lesson 2",
                "path": "resources/journaling-events/lesson2.md"
              },
              {
                "title": "Lesson 3",
                "path": "resources/journaling-events/lesson3.md"
              },
              {
                "title": "Requirements",
                "path": "resources/journaling-events/requirements.md"
              },
              {
                "title": "Well Done",
                "path": "resources/journaling-events/welldone.md"
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
                    "title": "Analytics",
                    "path": "resources/sample_apps/code_snippets/analytics.md"
                  },
                  {
                    "title": "Events",
                    "path": "resources/sample_apps/code_snippets/events.md"
                  },
                  {
                    "title": "Files",
                    "path": "resources/sample_apps/code_snippets/files.md"
                  },
                  {
                    "title": "Index",
                    "path": "resources/sample_apps/code_snippets/index.md"
                  },
                  {
                    "title": "State",
                    "path": "resources/sample_apps/code_snippets/state.md"
                  }
                ]
              },
              {
                "title": "Demo",
                "path": "resources/sample_apps/demo.md"
              },
              {
                "title": "Index",
                "path": "resources/sample_apps/index.md"
              }
            ]
          },
          {
            "title": "Spectrum Introduction",
            "path": "resources/spectrum-intro",
            "pages": [
              {
                "title": "Index",
                "path": "resources/spectrum-intro/index.md"
              },
              {
                "title": "Lesson 1",
                "path": "resources/spectrum-intro/lesson1.md"
              },
              {
                "title": "Lesson 2",
                "path": "resources/spectrum-intro/lesson2.md"
              },
              {
                "title": "Lesson 3",
                "path": "resources/spectrum-intro/lesson3.md"
              },
              {
                "title": "Lesson 4",
                "path": "resources/spectrum-intro/lesson4.md"
              },
              {
                "title": "Requirements",
                "path": "resources/spectrum-intro/requirements.md"
              },
              {
                "title": "Well Done",
                "path": "resources/spectrum-intro/welldone.md"
              }
            ]
          },
          {
            "title": "Todo App",
            "path": "resources/todo-app",
            "pages": [
              {
                "title": "Index",
                "path": "resources/todo-app/index.md"
              },
              {
                "title": "Lesson 1",
                "path": "resources/todo-app/lesson1.md"
              },
              {
                "title": "Lesson 2",
                "path": "resources/todo-app/lesson2.md"
              },
              {
                "title": "Lesson 3",
                "path": "resources/todo-app/lesson3.md"
              },
              {
                "title": "Lesson 4",
                "path": "resources/todo-app/lesson4.md"
              },
              {
                "title": "Lesson 5",
                "path": "resources/todo-app/lesson5.md"
              },
              {
                "title": "Lesson 6",
                "path": "resources/todo-app/lesson6.md"
              },
              {
                "title": "Requirements",
                "path": "resources/todo-app/requirements.md"
              },
              {
                "title": "Well Done",
                "path": "resources/todo-app/welldone.md"
              }
            ]
          },
          {
            "title": "Videos",
            "path": "resources/videos",
            "pages": [
              {
                "title": "Developers Live",
                "path": "resources/videos/developers-live",
                "pages": [
                  {
                    "title": "Asset Compute Service Extensibility",
                    "path": "resources/videos/developers-live/asset-compute-service-extensibility.md"
                  },
                  {
                    "title": "Deep Dive",
                    "path": "resources/videos/developers-live/deep-dive.md"
                  },
                  {
                    "title": "Extend Experience Cloud",
                    "path": "resources/videos/developers-live/extend-experience-cloud.md"
                  }
                ]
              },
              {
                "title": "Exploring",
                "path": "resources/videos/exploring",
                "pages": [
                  {
                    "title": "CI/CD",
                    "path": "resources/videos/exploring/ci-cd.md"
                  },
                  {
                    "title": "Custom Events",
                    "path": "resources/videos/exploring/custom-events.md"
                  },
                  {
                    "title": "Dashboard Case Study",
                    "path": "resources/videos/exploring/dashboard-case-study.md"
                  },
                  {
                    "title": "Debugging",
                    "path": "resources/videos/exploring/debugging.md"
                  },
                  {
                    "title": "Deep Dive Use Cases",
                    "path": "resources/videos/exploring/deep-dive-use-cases.md"
                  },
                  {
                    "title": "Learning Resources",
                    "path": "resources/videos/exploring/learning-resources.md"
                  },
                  {
                    "title": "Live Wired Sneak",
                    "path": "resources/videos/exploring/live-wired-sneak.md"
                  },
                  {
                    "title": "ODE Case Study",
                    "path": "resources/videos/exploring/ode-case-study.md"
                  },
                  {
                    "title": "Projects and Workspaces",
                    "path": "resources/videos/exploring/projects-and-workspaces.md"
                  },
                  {
                    "title": "React Spectrum",
                    "path": "resources/videos/exploring/react-spectrum.md"
                  },
                  {
                    "title": "Softcrylic Showcase",
                    "path": "resources/videos/exploring/softcrylic-showcase.md"
                  }
                ]
              },
              {
                "title": "Index",
                "path": "resources/videos/index.md"
              },
              {
                "title": "Overview",
                "path": "resources/videos/overview",
                "pages": [
                  {
                    "title": "Architecture",
                    "path": "resources/videos/overview/architecture.md"
                  },
                  {
                    "title": "E2E User Journey",
                    "path": "resources/videos/overview/e2e-user-journey.md"
                  },
                  {
                    "title": "Getting Started",
                    "path": "resources/videos/overview/getting-started.md"
                  },
                  {
                    "title": "Introduction",
                    "path": "resources/videos/overview/introduction.md"
                  },
                  {
                    "title": "Security",
                    "path": "resources/videos/overview/security.md"
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

