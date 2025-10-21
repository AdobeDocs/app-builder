# Configuring Sequences in app.config.yaml

## Overview

Sequences in Adobe App Builder allow you to chain multiple actions together, where the output of one action becomes the input of the next. While sequences can be created using CLI commands, they can also be configured declaratively in your `app.config.yaml` file following the [OpenWhisk specification](https://github.com/apache/openwhisk-wskdeploy/blob/master/specification/html/spec_sequences.md).

<InlineAlert variant="info" slots="text" />

To get started quickly with a hands-on example, check out the [action-sequences QuickStart](https://github.com/adobe/appbuilder-quickstarts/tree/master/action-sequences) which provides a ready-to-run sample application.

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
- When you need error handling between steps (use a [conductor action](https://github.com/apache/incubator-openwhisk-composer/blob/master/docs/COMBINATORS.md) instead)
- When latency is critical (sequences add cumulative latency as each action waits for the previous one to complete)

## Basic Syntax

Sequences are declared in your `app.config.yaml` file under the `sequences` section of the `runtimeManifest`, separate from regular actions.

```yaml
runtimeManifest:
  packages:
    my-package:
      sequences:
        my-sequence:
          actions: action1, action2, action3
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
        sequences:
          data-pipeline:
            actions: validate-input, process-data, format-output
            web: true
            annotations:
              require-adobe-auth: true
```

## Full Path References

When referencing actions in a sequence, you can use simple names (if in the same package) or full paths:

```yaml
sequences:
  my-sequence:
    actions: /namespace/package/action1, /namespace/package/action2, action3
```

## Web Actions as Sequences

Sequences can be exposed as web actions just like regular actions:

```yaml
runtimeManifest:
  packages:
    my-package:
      sequences:
        public-api-sequence:
          actions: authenticate, process-request, format-response
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
        sequences:
          delete-workflow:
            actions: list-resources, validate-deletion, delete-resources, send-notification
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
sequences:
  my-sequence:
    actions: action1, action2
    inputs:
      defaultParam: "value"
    annotations:
      require-adobe-auth: true
      description: "My sequence description"
```

The same [annotations](configuration.md#annotations) available for regular actions can be applied to sequences, including `require-adobe-auth` and `disable-download`.

## CLI Commands for Sequences

While this guide focuses on declarative configuration in `app.config.yaml`, you can also manage sequences using CLI commands. This is useful for testing, one-off tasks, or when you need to create sequences programmatically.

### Creating Sequences via CLI

You can create a sequence directly using the `aio` CLI:

```bash
# Create a basic sequence
aio runtime action create my-sequence --sequence action1,action2,action3

# Create a sequence with full paths
aio runtime action create my-sequence --sequence /namespace/pkg/action1,/namespace/pkg/action2

# Create a web-enabled sequence
aio runtime action create my-sequence --sequence action1,action2,action3 --web true

# Create a sequence with annotations
aio runtime action create my-sequence --sequence action1,action2 --annotation require-adobe-auth true
```

### Listing and Getting Sequence Details

```bash
# List all actions (including sequences)
aio runtime action list

# Get details about a specific sequence
aio runtime action get my-sequence

# Get the sequence definition in JSON format
aio runtime action get my-sequence --summary
```

### Invoking Sequences

```bash
# Invoke a sequence
aio runtime action invoke my-sequence --result

# Invoke with parameters
aio runtime action invoke my-sequence --param key1 value1 --param key2 value2 --result

# Invoke asynchronously (non-blocking)
aio runtime action invoke my-sequence --param key value

# Invoke and get the activation ID
aio runtime action invoke my-sequence --result --blocking
```

### Updating Sequences

```bash
# Update an existing sequence
aio runtime action update my-sequence --sequence newaction1,newaction2,newaction3

# Update sequence annotations
aio runtime action update my-sequence --annotation description "Updated description"
```

### Deleting Sequences

```bash
# Delete a sequence
aio runtime action delete my-sequence
```

### Testing Sequences

After deploying your application with sequences defined in `app.config.yaml`, you can test them:

```bash
# Deploy your application
aio app deploy

# Invoke the sequence
aio runtime action invoke my-package/my-sequence --result

# With parameters
aio runtime action invoke my-package/my-sequence --param key value --result

# Get activation logs
aio runtime activation list
aio runtime activation get <activation-id>
```

### CLI vs Declarative Configuration

**Use CLI commands when:**
- Prototyping or testing sequences quickly
- Creating temporary sequences for debugging
- Automating sequence management in scripts
- Working outside of an App Builder project

**Use `app.config.yaml` when:**
- Building production applications
- Managing sequences as part of your version-controlled codebase
- Deploying sequences consistently across environments
- Working within an App Builder project structure

## Migration from CLI to Declarative Configuration

If you previously created sequences using CLI commands, you can migrate them to declarative configuration in `app.config.yaml` for better maintainability and version control.

**Before (CLI approach):**
```bash
aio runtime action create my-sequence --sequence action1,action2,action3 --web true
aio runtime action update my-sequence --annotation require-adobe-auth true
```

**After (Declarative approach):**
```yaml
runtimeManifest:
  packages:
    my-package:
      sequences:
        my-sequence:
          actions: action1, action2, action3
          web: true
          annotations:
            require-adobe-auth: true
```

**Benefits of migration:**
- Sequences are version-controlled alongside your application code
- Consistent deployment across different environments
- Easier to review changes through pull requests
- Reduces manual CLI commands and potential human error
- Better integration with CI/CD pipelines

## Additional Resources

- [Action Sequences QuickStart](https://github.com/adobe/appbuilder-quickstarts/tree/master/action-sequences) - Hands-on sample application to get started quickly
- [OpenWhisk Sequence Specification](https://github.com/apache/openwhisk-wskdeploy/blob/master/specification/html/spec_sequences.md)
- [App Builder Configuration](configuration.md)
- [Runtime Sequences & Compositions](../../runtime_guides/reference_docs/sequences-compositions.md) - In-depth CLI usage and compositions
- [Runtime System Settings](../../runtime_guides/system-settings.md)

## Next Steps

Learn more about [Webpack Configuration](webpack-configuration.md) or return to the [Configuration Overview](configuration.md).

