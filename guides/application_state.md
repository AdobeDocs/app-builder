# Dealing with Application State

As part of Adobe Custom Applications, you will have out-of-the-box access to file storage and to a key-value store. 

To provide zero-config state and file caching for Adobe Custom Applications, we have created the [Adobe I/O File library](https://github.com/adobe/aio-lib-files) and [Adobe I/O State library](https://github.com/adobe/aio-lib-state). The Adobe I/O State library is an npm module that provides a JavaScript abstraction on top of distributed/cloud DBs with a simple key-value store state persistence API; whereas the Adobe I/O Files library provides a JavaScript abstraction on top of cloud blob storages with a simple file-system like persistence API.

The state library is meant for storing and accessing small values, while the files library should be used for storing bigger amounts of data.

To learn more or to try them out, please visit the following GitHub repositories:
- [Adobe I/O File Storage library](https://github.com/adobe/aio-lib-files)
- [Adobe I/O Key/Value Storage library](https://github.com/adobe/aio-lib-state)

After reviewing each of the libraries, you may have noticed that the sample code only requires your Runtime namespace credentials in order to start accessing the cloud services behind the scenes. This is handled through the [Adobe I/O Token Vending Machine](https://github.com/adobe/aio-tvm) (TVM). TVM is a set of Adobe I/O Runtime actions exposed as an API that allows developers to trade their credentials for temporary and restricted tokens to external cloud services. Users authenticate to the TVM with their Adobe I/O Runtime (OpenWhisk) credentials and are only authorized to access their own resources.

You can also opt out of using Runtime (OpenWhisk) and leverage your own cloud services (for example, Azure). Please see the sample code in either of the library GitHub repositories for more information.
