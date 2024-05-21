---
keywords:
  - Adobe I/O
  - Extensibility
  - API Documentation
  - Developer Tooling
title: Build an Event-Driven App Builder App Using Custom Events
description: >-
  Introduction to applying Custom I/O Events in event-driven use cases of App
  Builder applications.
contributors:
  - 'https://github.com/Yu1986'
---

# Build an Event-Driven App Builder App Using Custom Events

## Overview

App Builder is a complete framework that enables enterprise developers to build and deploy custom web applications that extend Adobe Experience Cloud solutions and run on Adobe infrastructure. It leverages modern technologies (JAM stack, serverless computing, Node, and React) and ensures best practices when building applications (event-driven architecture, microservices, continuous integration, and delivery). 

[Custom Event CLI Plugin](https://github.com/adobe/aio-cli-plugin-events) is an open-source events plugin for the use of third party customers as part of App Builder. Adobe I/O custom events allows you to build reactive, event-driven applications, based on events originating from various Adobe services. Events are triggered by event providers and can be listened to by journalling or by registering a webhook, Adobe I/O also provide the [Custom Event SDK](https://github.com/adobe/aio-lib-events). The events SDK provides a wrapper over these API calls making it easier for developers to use it as part of their apps. 

## User Story
There are times when users may wish to register their own apps as an event provider and integrate other technologies in an event-driven manner (e.g. with other 3rd-party ESPs, notifying call-centres, conducting look-ups to CRM platforms such as Dynamics prior to an e-mail send, etc) 
A specific demonstration to illustrate this use case has therefore been put together in this lab:
* Jane builds an app using App Builder and she would like to track the likes which have been clicked by a reader
* Jane registered her app as an event provider using custom event
* Joe subscribes to events from Jane's custom app event registration 
* When the reader clicks the like button or leaves a comment, both Jane and Joe will receive an event notification

In this lab, you will learn how to:
* Build a simple web app using the App Builder framework 
* Enable event-driven workflows using Adobe I/O custom event template 

