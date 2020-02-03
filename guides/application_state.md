# Dealing with Application File & State

As part of Adobe Custom Applications, you will have out-of-the-box access to file storage and to key-value store. 

To provide zero-config state and file caching for Adobe Custom Applications, we have created the [Adobe I/O File library](https://github.com/adobe/aio-lib-files) and [Adobe I/O State library](https://github.com/adobe/aio-lib-state). The Adobe I/O State library is a npm module that provides a JavaScript abstraction on top of distributed/cloud DBs with a simple key value store state persistence API; whereas the Adobe I/O Files library provides a JavaScript abstraction on top of cloud blob storages with a simple file system like persistence API.

The state library is meant for storing and accessing small values, please use the files library Adobe I/O Files SDK for storing bigger amounts of data.

Follow the instructions to try it out!
- [Adobe I/O File library](https://github.com/adobe/aio-lib-files)
- [Adobe I/O State library](https://github.com/adobe/aio-lib-state)

You can see in the sample code that both libraries only asks for your Runtime namespace credentials to start accessing the cloud services behind the scene. This is handled through the [Adobe I/O Token Vending Machine (TVM)](https://github.com/adobe/aio-tvm). TVM is a set of Adobe I/O Runtime actions exposed as an API that allows developers to trade their credentials for temporary and restricted tokens to external cloud services. Users authenticate to the TVM with their Adobe I/O Runtime (a.k.a OpenWhisk) credentials and are only authorized to access their own resources.

You can also opt out and leverage your own cloud services. See sample code for more details.