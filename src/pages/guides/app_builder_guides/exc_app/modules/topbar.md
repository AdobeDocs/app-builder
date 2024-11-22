---
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

- [Callback](../interfaces/topbar.callback.md)
- [CustomFeedbackConfig](../interfaces/topbar.customfeedbackconfig.md)
- [CustomSearchConfig](../interfaces/topbar.customsearchconfig.md)
- [ExternalFeedbackConfig](../interfaces/topbar.externalfeedbackconfig.md)
- [HelpCenterFeedbackConfig](../interfaces/topbar.helpcenterfeedbackconfig.md)
- [Solution](../interfaces/topbar.solution.md)
- [TopbarApi](../interfaces/topbar.topbarapi.md)
- [TopbarApiProperties](../interfaces/topbar.topbarapiproperties.md)

***Import:***

```typescript
import topbar from '@adobe/exc-app/topbar';
```

***Default export:***

[TopbarApi](../interfaces/topbar.topbarapi.md#interface-topbarapi)

***Usage:***

```typescript
import topbar from '@adobe/exc-app/topbar';

topbar.customEnvLabel = 'Beta';
```

## Next steps

Explore details of the [Index](./modules/index.md), [Page](./modules/page.md), and [User](./modules/user.md) external modules.

Explore the attributes and behavior of Adobe Experience Cloud Interfaces:

[Modules](modules.md)

[Runtime](runtime.md)

| Page                                             | Topbar                                                     | User                          |
| ------------------------------------------------ | ---------------------------------------------------------- | ----------------------------- |
| [Object with Href](page.objectwithhref.md)       | [Callback](topbar.callback)                                | [User API](user.userapi.md)   |
| [Object with Path](pageobjectwithpath.md)        | [Custom Feedback](topbar.customfeedback.md)                | [User Info](user.userinfo.md) |
| [Page API](page.pageapi.md)                      | [Custom Search](topbar.customsearchconfig.md)              |                               |
| [Page API Properties](page.pageapiproperties.md) | [Help Center Feedback](topbar.helpcenterfeedbackconfig.md) |                               |
|                                                  | [External Feedback](topbar.externalfeedbackconfig.md)      |                               |
|                                                  | [Solution](topbar.solution.md)                             |                               |
|                                                  | [Topbar API](topbar.topbarapi.md)                          |                               |
|                                                  | [Topbar API Properties](topbar.topbarapiproperties.md)     |                               |

Return to the [Guides Index](../../guides_index.md).
