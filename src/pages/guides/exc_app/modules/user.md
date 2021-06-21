# External module: user

API to request user-specific information such as IMS organization, IMS profile, access token,
tenant, etc. It also  provides solutions with other capabilities such as notifying the shell that
the session has expired and configuring a logout URL to expire custom sessions.

***Import:***

```typescript
import user from '@adobe/exc-app/user';
```

***Default export:***

[UserApi](../interfaces/user.userapi.md#interface-userapi)

***Usage:***

Below is an example of how to get various attributes associated to the user:

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

You can also listen for updates on the requested data by listening to specific change events.

These change events are emitted from the api that the data is requested from. For example, if a
user calls `await user.get('locale');` they must listen for the change event on
`user.on('change:locale')`. If a user calls `await user.get('imsOrg')` they must listen for the
change event on `user.on('change:imsOrg')`. Here is a more detailed example of how the promise
api and change events can be used to keep track of specific values from the config:

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

## Index

### Interfaces

* [UserApi](../interfaces/user.userapi.md)
* [UserInfo](../interfaces/user.userinfo.md)
