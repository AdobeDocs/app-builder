---
title: Build an Event-Driven App Builder App Using Custom Events
description: >-
  Introduction to applying Custom I/O Events in event-driven use cases of App
  Builder applications.
keywords:
- Adobe I/O
- Extensibility
- API Documentation
- Developer Tooling
# --- FAQs ---
faqs:
- question: What is App Builder used for?
  answer: App Builder is a framework for building and deploying custom web applications that extend Adobe Experience Cloud solutions using modern technologies and best practices.
- question: What does the Custom Event CLI Plugin do?
  answer: It is an open-source plugin that allows developers to build reactive, event-driven applications by leveraging Adobe I/O custom events.
- question: How can I register my app as an event provider?
  answer: You can register your app using the custom event functionality provided by Adobe I/O to emit events that other applications can subscribe to.
- question: What technologies does App Builder incorporate?
  answer: App Builder uses JAM stack, serverless computing, Node.js, React, event-driven architecture, microservices, and continuous integration and delivery.
- question: What will I learn from this Code Lab?
  answer: You will learn to build a simple web app using App Builder and enable event-driven workflows using Adobe I/O custom event templates.
contributors:
- 'https://github.com/Yu1986'
---
# Build an Event-Driven App Builder App Using Custom Events

## Overview

App Builder is a complete framework that enables enterprise Developers to build and deploy custom web applications that extend Adobe Experience Cloud solutions and run on Adobe infrastructure. It uses modern technologies like JAM stack, serverless computing, Node, and React, and ensures best practices such as event-driven architecture, microservices, and continuous integration and delivery when building applications. 

[Custom Event CLI Plugin](https://github.com/adobe/aio-cli-plugin-events) is an open-source events plugin for customers and third parties to use as part of App Builder. Adobe I/O custom events allows them to build reactive, event-driven applications based on events originating from Adobe services. Events are triggered by event providers and can be listened to by journalling or by registering a webhook. Adobe I/O also provides the [Custom Event SDK](https://github.com/adobe/aio-lib-events), which puts a wrapper over API calls so Developers can use it more easily as part of their apps. 

## User story

Users may wish to register their own apps as event providers and integrate other technologies in an event-driven manner - for example with other third-party event service providers (ESPs), notifying call-centres, conducting look-ups to CRM platforms such as Dynamics prior to an e-mail send, etc. 
This Code Lab illustrates an example of this use case:

* Jane builds an app using App Builder to track likes clicked by a reader
* Jane registers her app as an event provider using custom event
* Joe subscribes to events from Jane's custom app event registration 
* When the reader clicks the like button or leaves a comment, both Jane and Joe receive an event notification

In this lab, you will learn how to:

* Build a simple web app using the App Builder framework 
* Enable event-driven workflows using Adobe I/O custom event template 
