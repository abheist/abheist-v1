---
title: Set Corporate Proxy on NPM
date: "2020-03-19"
description: Sometime in need 😐
tags: ["npm"]
---

![NPM image](./npm-proxy.jpeg)

Please use the following code to set the proxy

```shell
npm config set proxy http://username:pass@server.com:port
npm config set https-proxy http://username:pass@server.com:port
```

Please replace `username`, `password`, `proxyserver.com`, `port` with your details, it will look something like this:

```shell
npm config set proxy http://abhi:hipass@abheist.com:8080
npm config set https-proxy http://abhi:hipass@abheist.com:8080
```

🙏
