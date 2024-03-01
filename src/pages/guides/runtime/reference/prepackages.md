# Pre-installed packages

These are the packages that are pre-installed and available to any I/O Runtime user:

```
/whisk.system/alarms                                                  
```

You can get details about the content of a package by running this command:

```
wsk package get --summary /whisk.system/alarms
```

You can execute any of the actions defined in a shared package by using the fully qualified name. For example:

```
wsk action invoke /whisk.system/alarms/alarm
```

Alternatively, you can bind any of this packages to your namespace; see the [Packages page](../reference/packages.md). When you bind a package, you can set your own default parameters (if there are any parameters) and run the actions as being local to your namespace.

## Using the alarms package

The alarms package can be used to trigger an action(s) for a given interval (once or recurring).This is a three-step process:

1. Create one or more actions you want to be executed. There is nothing special about these actions, you&rsquo;d create them just as you would any other action.
2. Create a trigger and specify the frequency. This is what the Alarms package provides.
3. Create a rule that links the action(s) to the trigger Every time the trigger is fired, the action(s) is executed.

The alarms package contains:

| Entity | Type | Parameters | Description |
|---|---|---|---|
| `/whisk.system/alarms` | package | - | Alarms utility |
| `/whisk.system/alarms/interval` | feed | `minutes`, `trigger_payload`, `startDate`, `stopDate` | Fire Trigger event on an interval-based schedule |
| `/whisk.system/alarms/once` | feed | `date`, `trigger_payload`, `deleteAfterFire` |  Fire Trigger event once on a specific date |
| `/whisk.system/alarms/alarm` | feed | `cron`, `trigger_payload`, `startDate`, `stopDate` | Fire Trigger event on a time-based schedule using cron |

To create a trigger on an interval-based schedule that will fire every 10 minutes until January 31, 2020 (`my-interval` is the name of the trigger):

```
wsk trigger create my-interval \
  --feed /whisk.system/alarms/interval \
  --param minutes 10 \
  --param trigger_payload "{\"name\":\"Vlad\",\"place\":\"Transylvania\"}" \
  --param stopDate "2020-01-31T23:59:00.000Z"
```

To create a trigger that fires once:

```
wsk trigger create my-interval \
  --feed /whisk.system/alarms/once \
  --param trigger_payload "{\"name\":\"Vlad\",\"place\":\"Transylvania\"}" \
  --param stopDate "2020-01-31T23:59:00.000Z"
  --param deleteAfterFire "rules"
```

Finally, to create a trigger that fires on a time-based schedule using cron (it fires every hour):
```
wsk trigger create my-interval \
  --feed /whisk.system/alarms/alarm \
  --param cron "0 * * * *" \
  --param trigger_payload "{\"name\":\"Vlad\",\"place\":\"Transylvania\"}" \
  --param startDate "2018-10-17" \
  --param stopDate "2019-10-31T23:59:00.000Z"
```

Here are some examples of how to set various `cron` values - for more info check this [page](http://crontab.org):
- `* * * * *`: The Trigger fires at the top of every minute.
- `0 * * * *`: The Trigger fires at the top of every hour.
- `0 */2 * * *`: The Trigger fires every 2 hours (that is, 02:00:00, 04:00:00, ...).
- `0 9 8 * *`: The Trigger fires at 9:00:00AM (UTC) on the eighth day of every month.


