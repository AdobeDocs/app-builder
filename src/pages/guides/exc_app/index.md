---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
---

# Integration Guide with Adobe Experience Cloud

Adobe Experience Cloud gives you everything you need to bring world-class experiences to every
customer. It consists of multiple solutions that power insights, content, engagement, commerce and
optimization.  The unified shell web application at
[https://experience.adobe.com](https://experience.adobe.com) provides a unified user experience for
customers to manage these solutions from a single place.

The solution experiences run within an iframe in the unified shell web application and can interact
with components of the unified shell such as topbar, menus, nps, alerts, etc. These interactions are
made possible through two components: -

1. A module-runtime script that is injected into the product iframe
2. This @adobe/exc-app package that provides an API to interact with the injected module-runtime
script.

- [exc-app](#exc-app)
  - [Getting Started](#getting-started)
  - [Features](#features)
    - [APIs](#apis)
      - [root](#root)
      - [Page](#page)
      - [TopBar](#topbar)
      - [User](#user)
    - [Events](#events)
      - [Ready](#ready)
      - [Configuration](#configuration)
      - [History](#history)
  - [Licensing](#licensing)

## Getting Started

To get started with this integration, below two things need to be done.

1. Include the runtime loader script on the home page
2. Include the [@adobe/exc-app](https://www.npmjs.com/package/@adobe/exc-app) package in your NPM
`package.json` and invoke the init API.

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import {init} from '@exc/runtime';

init(runtime => {
  // Example initialization for a solution that uses React
  ReactDOM.render(<MyProductPage runtime={runtime} />, document.querySelector('#main'));
});
```

## Features

### APIs

#### root

Core APIs that let solutions initialize the application, provide access to the runtime object from
anywhere in the app, listen to events.
[learn more](https://github.com/AdobeDocs/exc-app/blob/master/docs/modules/root.md)

#### Page

APIs that let solutions interact with the main page and personalize it, e.g. setting the title,
favicon, refreshing the solution iframe, etc.
[learn more](https://github.com/AdobeDocs/exc-app/blob/master/docs/modules/page.md)

#### TopBar

APIs that let solutions interact with the top bar and personalize it, e.g. configuring the solution
area on the left, setting up workspaces, custom search, etc.
[learn more](https://github.com/AdobeDocs/exc-app/blob/master/docs/modules/topbar.md)

#### User

APIs to request user-specific information such as IMS organization, IMS profile, access token,
tenant, etc. It also  provides solutions with other capabilities such as notifying the shell that
the session has expired and configuring a logout URL to expire custom sessions.
[learn more](https://github.com/AdobeDocs/exc-app/blob/master/docs/modules/user.md)

### Events

Events are emitted by the module runtime when it receives certain messages from the Unified Shell.

#### Ready

The ready event fires when the initial configuration has been received from the Shell. It would
make sense to wait for this event before rendering the application or setting any workspaces. The
locale will be required to do globalization and we require the workspaces translated prior to
setting them on the Shell, since we don’t (and shouldn’t) have translations for every Solution’s
workspaces.

***Example:***

```typescript
import excApp from '@exc/runtime';

function setup() {
  const runtime = excApp();
  runtime.on('ready', ({imsOrg, imsToken, locale}) => {
  this.setState({
      imsOrg,
      imsToken,
      loading: false,
      locale
  });
  });
}
```

***Payload:***

- `baseUrl`: Base url for the solution.
- `environment`: Environment being used.
- `historyType`: Type of history.
- `imsEnvironment`: IMS environment. This follows general rules unless shell_ims query param is
in use.
- `imsOrg`: IMS org ID.
- `imsOrgName`: Name of the IMS org.
- `imsProfile`: Object containing information about the authenticated user.
- `imsToken`: IMS token.
- `locale`: Locale string for globalization.
- `preferredLanguages`: List of preferred languages from the user's IMS profile.
- `shellInfo`: Shell related information needed to populate the shell UI. More details about what
is included are Shell API.
- `tenant`: tenant name for current ims org.

#### Configuration

The configuration event fires when any configuration changes from the Shell. This has the same
payload as the ready event.

***Example:***

```typescript
import runtime from '@exc/runtime';

function setup() {
  const runtime = excApp();
  runtime.on('configuration', ({imsOrg, imsToken, locale}) => {
    if (imsOrg !== this.state.imsOrg) {
      // Change org
    }
    this.setState({imsOrg, imsToken, locale});
  });
}
```

#### History

The history event fires when the browser history changes and the frame needs to know about it.

***Example:***

```typescript
import runtime from '@exc/runtime';

function setup() {
  const runtime = excApp();
  runtime.on('history', ({type, path}) => {
    const cleanedPath = path[0] === '/' ? path : '/' + path;
    if (type === 'external' && this.history.location.pathname !== cleanedPath) {
      this.history.replace(cleanedPath);
    }
  });
}
```

***Payload:***

- `type`: Internal or external depending on where the event originates from.
- `path`: The new path to update the browser history with.

## Licensing

This project is licensed under the Creative Commons Attribution-NoDerivatives 4.0 International Public License. See [LICENSE](https://creativecommons.org/licenses/by-nd/4.0/) for more information.
