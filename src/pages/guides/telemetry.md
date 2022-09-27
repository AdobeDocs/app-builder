---
keywords:
  - cli
  - Extensibility
  - Developer Tooling
  - telemetry
---

# Telemetry

The latest release of the Adobe Developer Platform CLI (v9.0.0) collects anonymous telemetry data about general usage.  This is an optional feature, and you may opt-out if you would not like to share your anonymous usage information.


# Why collect telemetry?

The cli has grown from a small project developed by a small team to being used and contributed to by many teams inside and even outside of Adobe.  As we have grown we have strived to keep consistency across operating systems, node versions, terminal choices, etc.  Telemetry allows us to observe feature usage, and focus on removing pain points as we aim to maintain a first class developer experience.


# What data is collected?

Our goal is primarily performance, so in addition to tracking what commands are run, and whether they are successful, we keep track of how long each command runs.

The data collected includes specifically:

- the command being run, including any aliases used
- any flags being used ( but not the values of the flags )
- how long the command ran, and whether it was successful or not
- environment info including macOS/Linux/Windows, node version and cli version


# What about secrets and sensitive data?

We __do not__ collect any data that might be sensitive.  This includes, but is not limited to: command arguments and flag values, file paths, environment variables, logs, stack traces, or error output.

For more information please read our [privacy policy](https://www.adobe.com/privacy.html)


# Will this data be shared? With who?

The data we collect is anonymous and only meaningful in aggregate form. We may share non-personally identifiable aggregate data with other teams at Adobe to help them develop or improve their cli plugins.  Some info may be shared with the developer community as well, presumably high level info like operating system, or node version popularity.


# How do I opt out?

You may turn telemetry off, (or __on__) at any time and this setting will persist until you change it.
```
➜ aio telemetry off
Telemetry is off.
If you would like to turn telemetry on, simply run `aio telemetry on`

➜ aio telemetry on
Telemetry is on! Nice, you are helping us improve Adobe Developer CLI
If you would like to turn telemetry off, simply run `aio telemetry off`
```

You can also just check the status of telemetry.
```
➜ aio telemetry
Telemetry is on! Nice, you are helping us improve Adobe Developer CLI
If you would like to turn telemetry off, simply run `aio telemetry off`
```

Additionally, any individual command may be run with telemtry off by using the `--no-telemetry` flag.

ex. `aio app info --no-telemetry`


# Show me the code

Telemetry itself is implemented as a cli plugin.  It is developed in the open, and released under the Apache 2.0 license.  If you would like to watch, review, _(star!)_ or contribute to the project please visit [aio-cli-plugin-telemetry](https://github.com/adobe/aio-cli-plugin-telemetry)
_Pull requests welcomed!_