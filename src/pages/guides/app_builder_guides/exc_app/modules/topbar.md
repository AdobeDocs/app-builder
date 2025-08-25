---
title: External Module: Topbar
description: Documentation for the External Module Topbar, detailing APIs to interact with and personalize the top bar including configuration of solution areas, workspaces, and search customization.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
- Topbar
# --- FAQs ---
faqs:
- question: What is the purpose of the Topbar module?
  answer: The Topbar module allows solutions to interact with and personalize the top bar interface, such as configuring the solution area, workspaces, and customizing search options.
- question: How do I import the Topbar module in my project?
  answer: Import the Topbar module using `import topbar from '@adobe/exc-app/topbar';` in your TypeScript or JavaScript code.
- question: What kind of configurations can I set with the Topbar APIs?
  answer: You can configure elements like custom feedback, search behavior, solution areas, help center feedback, and workspace settings through various interfaces.
- question: Where can I find detailed interface documentation for the Topbar module?
  answer: Detailed interfaces such as Callback, CustomFeedbackConfig, CustomSearchConfig, and TopbarApi are linked within the documentation for in-depth reference.
- question: What are the next steps after understanding the Topbar module?
  answer: Explore other external modules such as Index, Page, and User, as well as Adobe Experience Cloud interfaces for a broader understanding of available APIs.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
title: 'External module: topbar'
---
# External Module: Topbar

Topbar APIs let solutions interact with and personalize the top bar, for example by configuring the solution area on the left, setting up workspaces, or customizing search.

### Interfaces

- [Callback](../interfaces/topbar-callback.md)
- [CustomFeedbackConfig](../interfaces/topbar-customfeedbackconfig.md)
- [CustomSearchConfig](../interfaces/topbar-customsearchconfig.md)
- [ExternalFeedbackConfig](../interfaces/topbar-externalfeedbackconfig.md)
- [HelpCenterFeedbackConfig](../interfaces/topbar-helpcenterfeedbackconfig.md)
- [Solution](../interfaces/topbar-solution.md)
- [TopbarApi](../interfaces/topbar-topbarapi.md)
- [TopbarApiProperties](../interfaces/topbar-topbarapiproperties.md)

***Import:***

```typescript
import topbar from '@adobe/exc-app/topbar';
```

***Default export:***

[TopbarAPI](../interfaces/topbar-topbarapi.md)

***Usage:***

```typescript
import topbar from '@adobe/exc-app/topbar';

topbar.customEnvLabel = 'Beta';
```

## Next steps

Explore details of the [Index](index.md), [Page](page.md), and [User](user.md) external modules.

Explore the attributes and behavior of Adobe Experience Cloud Interfaces:

[Modules](../interfaces/modules.md)

[Runtime](../interfaces/runtime.md)

| Page                                             | Topbar                                                     | User                          |
| ------------------------------------------------ | ---------------------------------------------------------- | ----------------------------- |
| [Object with Href](../interfaces/page-objectwithhref.md) | [Callback](../interfaces/topbar-callback.md)          | [User API](../interfaces/user-userapi.md)   |
| [Object with Path](../interfaces/page-objectwithpath.md)  | [Custom Feedback](../interfaces/topbar-customfeedbackconfig.md)        | [User Info](../interfaces/user-userinfo.md) |
| [Page API](../interfaces/page-pageapi.md)                      | [Custom Search](../interfaces/topbar-customsearchconfig.md)              |                               |
| [Page API Properties](../interfaces/page-pageapiproperties.md) | [Help Center Feedback](../interfaces/topbar-helpcenterfeedbackconfig.md) |                               |
|                                                  | [External Feedback](../interfaces/topbar-externalfeedbackconfig.md)      |                               |
|                                                  | [Solution](../interfaces/topbar-solution.md)                             |                               |
|                                                  | [Topbar API](../interfaces/topbar-topbarapi.md)                          |                               |
|                                                  | [Topbar API Properties](../interfaces/topbar-topbarapiproperties.md)     |                               |

Return to the [Guides Index](../../../index.md).
