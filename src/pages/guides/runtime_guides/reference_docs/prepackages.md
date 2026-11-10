# Pre-Installed Packages

These packages are pre-installed and available to any I/O Runtime user:

```
/whisk.system/alarms                                                  
```

You can get details about the content of a package by running this command:

```
aio rt:package:get /whisk.system/alarms
```

You can execute any of the actions defined in a shared package by using the fully qualified name. For example:

```
aio rt:action:invoke /whisk.system/alarms/alarm
```

Alternatively, you can bind any of these packages to your namespace; see the [Packages](packages.md) page. When you bind a package, you can set your own default parameters (if any) and run the actions as local to your namespace.

## Using the alarms package

The alarms package can be used to trigger a actions for a single or recurring interval. This is a three-step process:

1. Create one or more actions you want to be executed. There is nothing special about these actions; create them as you would any other.
2. Create a trigger and specify the frequency. This is what the Alarms package provides.
3. Create a rule that links every action to a trigger Every time the trigger is fired, its linked action is executed.

The alarms package contains:

| Entity                          | Type    | Parameters                                            | Description                                            |
| ------------------------------- | ------- | ----------------------------------------------------- | ------------------------------------------------------ |
| `/whisk.system/alarms`          | package | -                                                     | Alarms utility                                         |
| `/whisk.system/alarms/interval` | feed    | `minutes`, `trigger_payload`, `startDate`, `stopDate` | Fire Trigger event on an interval-based schedule       |
| `/whisk.system/alarms/once`     | feed    | `date`, `trigger_payload`, `deleteAfterFire`          | Fire Trigger event once on a specific date             |
| `/whisk.system/alarms/alarm`    | feed    | `cron`, `trigger_payload`, `startDate`, `stopDate`    | Fire Trigger event on a time-based schedule using cron |

<InlineAlert variant="info" slots="text" />

**Date format:** The `startDate` and `stopDate` parameters must use ISO-8601 format. You can use UTC (for example, `"2027-01-01T00:00:00.000Z"`) or include a timezone offset (for example, `"2027-01-01T05:30:00.000+05:30"`). Do not use epoch millisecond timestamps. Both dates must be in the future at the time of deployment. **Cron schedule:** Cron expressions for `/whisk.system/alarms/alarm` are always evaluated in UTC. The `timezone` parameter from the upstream OpenWhisk documentation is ignored in Adobe I/O Runtime.

To create a trigger named `my-interval` on an interval-based schedule that will fire every 10 minutes until January 31, 2028:

```
aio rt:trigger:create my-interval \
  --feed /whisk.system/alarms/interval \
  --param minutes 10 \
  --param trigger_payload "{\"name\":\"Vlad\",\"place\":\"Transylvania\"}" \
  --param stopDate "2028-01-31T23:59:00.000Z"
```

To create a trigger that fires once:

```
aio rt:trigger:create my-interval \
  --feed /whisk.system/alarms/once \
  --param trigger_payload "{\"name\":\"Vlad\",\"place\":\"Transylvania\"}" \
  --param stopDate "2028-01-31T23:59:00.000Z"
  --param deleteAfterFire "rules"
```

Finally, to create a trigger that fires every hour on a time-based schedule using cron, starting January 1, 2027:

```
aio rt:trigger:create my-cron-trigger \
  --feed /whisk.system/alarms/alarm \
  --param cron "0 * * * *" \
  --param trigger_payload "{\"name\":\"Vlad\",\"place\":\"Transylvania\"}" \
  --param startDate "2027-01-01T00:00:00.000Z"
```

<InlineAlert variant="warning" slots="text" />

**Known issue: `stopDate` with `/whisk.system/alarms/alarm`.** Creating a cron-based alarm trigger with the `stopDate` parameter currently fails with the error `Response is not valid 'message/http'.`, and the trigger is not registered. Until this is fixed, do not pass `stopDate` to `/whisk.system/alarms/alarm`. To stop the schedule, delete the trigger (or its rule) instead. `stopDate` still works with `/whisk.system/alarms/interval`.

<InlineAlert variant="warning" slots="text" />

**Known issue: changing an existing alarm trigger does not change its schedule.** If you update the parameters of an alarm trigger (for example, change `cron` and redeploy), or delete it and create it again with the same name, the alarm service may keep firing on the previous schedule. To change a schedule, create a trigger with a new name and a rule for it, then delete the old trigger. This applies to all `/whisk.system/alarms` feeds.

### Cron expression format

The `cron` parameter uses the syntax of the [`cron` npm package](https://www.npmjs.com/package/cron), which differs from standard UNIX crontab in one important way: **months are numbered from 0 (January) to 11 (December)**, not from 1 to 12. For example, `35 8 2 11 *` fires on **December 2** at 08:35 UTC, not November 2.

A cron expression has five fields separated by spaces, all evaluated in UTC:

| Field        | Allowed values                                    |
| ------------ | ------------------------------------------------- |
| Minute       | `0`-`59`                                          |
| Hour         | `0`-`23`                                          |
| Day of month | `1`-`31`                                          |
| Month        | `0`-`11` (`0` = January), or `jan`-`dec`          |
| Day of week  | `0`-`6` (`0` = Sunday), or `sun`-`sat`            |

You can add an optional sixth field at the start for seconds (`0`-`59`). Each field also accepts `*`, ranges (`1-5`), lists (`1,15`), and steps (`*/2`).

To avoid month off-by-one mistakes, use month names (`jan`-`dec`) instead of numbers. Use `0`-`6` or day names (`sun`-`sat`) for the day of the week; do not use `7` for Sunday.

Here are some examples of `cron` values:

- `* * * * *`: The Trigger fires at the top of every minute
- `0 * * * *`: The Trigger fires at the top of every hour
- `0 */2 * * *`: The Trigger fires every 2 hours (that is, 02:00:00, 04:00:00, ...)
- `0 9 8 * *`: The Trigger fires at 9:00:00AM (UTC) on the eighth day of every month
- `30 13 * * sun`: The Trigger fires at 1:30:00PM (UTC) every Sunday
- `35 8 2 nov *`: The Trigger fires at 8:35:00AM (UTC) on November 2 every year (equivalent to `35 8 2 10 *`)

## Next steps

Return to the [Runtime Reference Documentation Index](index.md).

Return to the [Guides Index](../../index.md).
