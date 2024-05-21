---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: Events Using Runtime Actions as Webhook
description: >-
  Creating cron jobs in an App Builder application to consume events using
  Journaling API.
contributors:
  - 'https://github.com/Yu1986'
---

# Events Using Runtime Actions as Webhook

The codelab will guide you through how to consume events using runtime action as webhook. 

## Background

In previous codelab [Consume Events using Journaling API](../journaling-events/index.md) we guide you through how to consume event using Journaling API. In this codelab, we will introduce another way to consume events - runtime action as webhook. This integration between Adobe I/O Runtime and I/O Events allow you create runtime actions to be setup as webhook endpoints on the Adobe developer console for receiving events, so that every time an event fires, your runtime action is executed and the debug tracing feature allow you to debug easily.  

## Benefits of using Runtime Action as Webhook

There are two main benefits to choose runtime action as webhook: 
- [Built in Signature Verification](https://developer.adobe.com/events/docs/guides/sdk/sdk_signature_verification/)
- Tracing actions with Activation Ids 

## How to choose between Journaling API and Runtime Action webhook
- Journaling API: when you have a long running(async) actions that require guaranteed event handling especially when there is a surge of events, you should consider using the [journaling approach](../journaling-events/index.md) to consume events. 
- Runtime action webhook: if you have short-running (sync) action for example, responds within 10 sec, we recommend setting up your runtime action as webhook

## Overview
This codelab will take you through the I/O events SYNC webhook registration using your own runtime actions via console.
As part of this codelab, we will cover all the behind the scene actions happening for the below 

- Using App Builder template `publish-event`to set up custom event as event provider
- Setting up event registration 
- Ingesting subscribed events for that webhook in I/O Events pipeline
- Debug tracing on console for the Success and Failure scenarios




