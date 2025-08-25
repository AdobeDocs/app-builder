---
title: Troubleshooting
description: Guidance on resolving common issues related to actions, including handling local storage limits and mitigating action evictions.
keywords:
- Actions
- Local Storage
- Logging
- File Management
- System Settings
# --- FAQs ---
faqs:
- question: What causes a pod to exceed local storage and be evicted?
  answer: Excessive verbose logging and storing large files without cleanup are the primary causes. Monitor and limit log verbosity and manage file cleanup to prevent eviction.
- question: How can I reduce log storage usage in my actions?
  answer: Use the @adobe/aio-sdk logging library with the DEBUG level during development and set AIO_LOG_LEVEL to INFO or WARN in production to minimize storage while keeping essential logs.
- question: What should I do if my action exceeds the configured local storage limit?
  answer: Review and adjust logging practices, ensure all temporary files are deleted after execution, and check your local storage limits in System Settings to avoid exceeding quotas.
---
# Troubleshooting

If you're having trouble with your actions or activations, here is a common issue and its solution.

## The pod exceeded local storage and was evicted with X in-flight activations

The most common reasons for exceeding local storage for an action are:

- Writing too many verbose logs
- Storing large files on local storage without cleaning them up

Please refer to the local storage limit configured for an action, found in [System Settings](./system-settings.md) section.
Exceeding this limit will result in the action being terminated or not completing successfully.

### Mitigation Strategies

- Logging: Use the [@adobe/aio-sdk](https://github.com/adobe/aio-lib-core-logging) library for logging. Make sure to use the `DEBUG` logging level for development, and set your production `AIO_LOG_LEVEL` env variable to `INFO` or `WARN`. This approach minimizes storage use while retaining critical log information necessary for troubleshooting.
- Logging: Avoid verbose logging and log only the necessary information.
- File Management: Always clean up files written to disk after function execution. Neglecting this can lead to storage bloat, preventing future actions from running as expected.

## Next step

Review [System Settings](system-settings.md) and defaults.

Return to [Guides Index](../index.md).
