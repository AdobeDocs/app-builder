---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: 'External module: page'
---

# External Module: Page

Page APIs let solutions interact with and personalize the main page, for example by setting the title or favicon, or refreshing the solution iframe.

### Interfaces

- [ObjectWithHref](../interfaces/page.objectwithhref.md)
- [ObjectWithPath](../interfaces/page.objectwithpath.md)
- [PageApi](../interfaces/page.pageapi.md)
- [PageApiProperties](../interfaces/page.pageapiproperties.md)

## Type aliases

### LocationLike

Ƭ **LocationLike**: *[ObjectWithHref](../interfaces/page.objectwithhref.md) | [ObjectWithPath](../interfaces/page.objectwithpath.md)*

Defines the location-like object for which to get the shell URL. You may specify either a path or an absolute URL.

***Example:***

`{path: '/abc'}` or `{href: 'https://example.com/abc'}`

***Import:***

```typescript
import page from '@adobe/exc-app/page';
```

***Default export:***

[PageApi](../interfaces/page.pageapi.md#interface-pageapi)

***Usage:***

```typescript
import page from '@adobe/exc-app/page';

page.title = 'Experience Cloud';

// Show spinner while performing an async operation
page.spinner = true;
try {
  await performOperation();
} finally {
  page.spinner = false;
}

// Generate a shell URL that directly opens the specified solution URL
const shellUrl = page.generateShellUrl('/relative/path');

// Navigate to another solution
page.shellRedirect('/target');
```

## Next steps

Explore details of the [Index](./modules/index.md), [TopBar](./modules/topbar.md), and [User](./modules/user.md) external modules.

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
