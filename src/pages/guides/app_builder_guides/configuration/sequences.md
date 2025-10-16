# Configuring Sequences in app.config.yaml

## Overview

Sequences in Adobe App Builder allow you to chain multiple actions together, where the output of one action becomes the input of the next. While sequences can be created using CLI commands, they can also be configured declaratively in your `app.config.yaml` file following the [OpenWhisk specification](https://github.com/apache/openwhisk-wskdeploy/blob/master/specification/html/spec_sequences.md).

## What are Sequences?

A sequence is a special type of action that executes a series of actions in order. The result of one action is passed as the input to the next action in the sequence. This provides a powerful way to compose actions without writing additional code to handle the chaining logic.

### Benefits of Sequences

- **Declarative Configuration**: Define your sequence structure in configuration rather than code
- **Reusability**: Chain existing actions without modification
- **Maintainability**: Easier to understand and modify the action flow
- **No Additional Code**: No need to write orchestration logic

## When to Use Sequences

Sequences are ideal when you need to:

- Chain multiple actions where each action's output feeds into the next action's input
- Create a pipeline of data transformations
- Compose existing actions without modifying their code
- Implement a workflow that requires sequential processing

**When NOT to use sequences:**
- When you need conditional logic or branching
- When actions need to run in parallel
- When you need error handling between steps (use a conductor action instead)

## Basic Syntax

Sequences are declared in your `app.config.yaml` file under the `actions` section of the `runtimeManifest`. The key difference from regular actions is that sequences use the `sequence` property instead of `function` to define the ordered list of actions to execute.

```yaml
runtimeManifest:
  packages:
    my-package:
      actions:
        my-sequence:
          sequence:
            - action1
            - action2
            - action3
```

## Complete Example

Here's a comprehensive example showing how to configure a sequence along with its component actions:

```yaml
application:
  actions: actions
  web: web-src
  runtimeManifest:
    packages:
      my-package:
        license: Apache-2.0
        actions:
          # Individual actions that will be part of the sequence
          validate-input:
            function: actions/validate-input/index.js
            runtime: nodejs:20
            inputs:
              LOG_LEVEL: debug
            annotations:
              require-adobe-auth: true
          
          process-data:
            function: actions/process-data/index.js
            runtime: nodejs:20
            inputs:
              LOG_LEVEL: debug
          
          format-output:
            function: actions/format-output/index.js
            runtime: nodejs:20
          
          # The sequence that chains the actions together
          data-pipeline:
            sequence:
              - validate-input
              - process-data
              - format-output
            web: true
            annotations:
              require-adobe-auth: true
```

## Full Path References

When referencing actions in a sequence, you can use simple names (if in the same package) or full paths:

```yaml
actions:
  my-sequence:
    sequence:
      - /namespace/package/action1
      - /namespace/package/action2
      - action3  # Same package
```

## Web Actions as Sequences

Sequences can be exposed as web actions just like regular actions:

```yaml
runtimeManifest:
  packages:
    my-package:
      actions:
        public-api-sequence:
          sequence:
            - authenticate
            - process-request
            - format-response
          web: true
          web-export: true
```

## Real-World Example

Here's a practical example of a sequence that processes and deletes resources, based on this [internal example](https://git.corp.adobe.com/CNA/app-builder-delete-proj/blob/main/app.config.yaml#L41):

```yaml
application:
  actions: actions
  web: web-src
  runtimeManifest:
    packages:
      resource-management:
        license: Apache-2.0
        actions:
          # Component actions
          list-resources:
            function: actions/list-resources/index.js
            runtime: nodejs:20
            inputs:
              LOG_LEVEL: info
          
          validate-deletion:
            function: actions/validate-deletion/index.js
            runtime: nodejs:20
          
          delete-resources:
            function: actions/delete-resources/index.js
            runtime: nodejs:20
          
          send-notification:
            function: actions/send-notification/index.js
            runtime: nodejs:20
          
          # Sequence that orchestrates the deletion workflow
          delete-workflow:
            sequence:
              - list-resources
              - validate-deletion
              - delete-resources
              - send-notification
            web: true
            annotations:
              require-adobe-auth: true
              final: true
```

## Important Considerations

### Data Flow

Each action in the sequence receives the output of the previous action as its input parameters. Ensure that:
- Each action returns a JSON object
- The output schema of one action matches the expected input of the next
- Actions handle the data format correctly

### Error Handling

If any action in the sequence fails:
- The sequence execution stops immediately
- Subsequent actions are not executed
- The error is returned as the sequence result

### Annotations and Parameters

Sequences can have their own annotations and default parameters:

```yaml
actions:
  my-sequence:
    sequence:
      - action1
      - action2
    inputs:
      defaultParam: "value"
    annotations:
      require-adobe-auth: true
      description: "My sequence description"
```

The same [annotations](configuration.md#annotations) available for regular actions can be applied to sequences, including `require-adobe-auth` and `disable-download`.

## Testing Sequences

After configuring your sequence in `app.config.yaml`, you can test it using the CLI:

```bash
# Deploy your application
aio app deploy

# Invoke the sequence
aio runtime action invoke my-package/my-sequence --result

# With parameters
aio runtime action invoke my-package/my-sequence --param key value --result
```

## Migration from CLI

If you previously created sequences using CLI commands:

```bash
aio runtime action create my-sequence --sequence action1,action2,action3
```

You can now declare them in `app.config.yaml`:

```yaml
runtimeManifest:
  packages:
    my-package:
      actions:
        my-sequence:
          sequence:
            - action1
            - action2
            - action3
```

This declarative approach makes your sequence configuration version-controlled and easier to maintain.

## Additional Resources

- [OpenWhisk Sequence Specification](https://github.com/apache/openwhisk-wskdeploy/blob/master/specification/html/spec_sequences.md)
- [App Builder Configuration](configuration.md)
- [Runtime System Settings](../../runtime_guides/system-settings.md)

## Next Steps

Learn more about [Webpack Configuration](webpack-configuration.md) or return to the [Configuration Overview](configuration.md).

