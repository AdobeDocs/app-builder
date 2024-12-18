---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: 'External module: page'
---

# External module: page

APIs that let solutions interact with the main page and personalize it, e.g. setting the title,
favicon, refreshing the solution iframe, etc.

***Import:***

```typescript
import page from '@adobe/exc-app/page';
```

***Default export:***

[PageApi](../interfaces/page-pageapi.md#interface-pageapi)

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

## Index

### Interfaces

* [ObjectWithHref](../interfaces/page-objectwithhref.md)
* [ObjectWithPath](../interfaces/page-objectwithpath.md)
* [PageApi](../interfaces/page-pageapi.md)
* [PageApiProperties](../interfaces/page-pageapiproperties.md)

### Type aliases

* [LocationLike](page.md#locationlike)

## Type aliases

###  LocationLike

Ƭ **LocationLike**: *[ObjectWithHref](../interfaces/page-objectwithhref.md) | [ObjectWithPath](../interfaces/page-objectwithpath.md)*

Defines the location-like object for which to get the shell URL. You can either specify a path or
an absolute URL.

***Example:***

`{path: '/abc'}` or `{href: 'https://example.com/abc'}`
