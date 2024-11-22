---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: 'External module: user'
---

# External Module: User

User APIs request user-specific information such as IMS organization, IMS profile, access token, tenant, and so on. They also  add capabilities to solutions, for example notifying the shell when a session expires, or configuring a logout URL to expire custom sessions.

***Import:***

```typescript
import user from '@adobe/exc-app/user';
```

***Default export:***

[UserApi](../interfaces/user.userapi.md#interface-userapi)

***Usage:***

This is an example of how to get user attributes:

```typescript
import user from '@adobe/exc-app/user';

const [org, name, orgs, token, profile, locale, subOrg, tenant, languages] = await Promise.all([
  user.get('imsOrg'),
  user.get('imsOrgName'),
  user.get('imsOrgs'),
  user.get('imsToken'),
  user.get('imsProfile'),
  user.get('locale'),
  user.get('subOrg'),
  user.get('tenant'),
  user.get('preferredLanguages')
]);
```

### Receiving updates

You can also listen for updates on requested data by listening to change events. Change events are emitted from the API from which the data is requested. For example, if a user calls `await user.get('locale');` they must listen for the change event on
`user.on('change:locale')`. If a user calls `await user.get('imsOrg')` they must listen for the change event on `user.on('change:imsOrg')`. Here is a more detailed example of how to use the API and change events to track specific configuration values:

```typescript
import user from '@adobe/exc-app/user';

constructor() {
  this.state = {org: null, shell: {}};

  user.on('change:imsOrg', (org) => {
    this.setState({org});
  });
}

async componentDidMount() {
  const org = await user.get('imsOrg');
  this.setState({org});
}
```

## Next steps

Explore details of the [Index](./modules/index.md), [Page](./modules/page.md), and [TopBar](./modules/topbar.md) external modules.

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
