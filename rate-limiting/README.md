# Rate limiting

Rate limiting is a technique of limit incomming traffic to a backend server.

## Quick setup

```sh
git clone http://github.com/A7Lavinraj/system-design.git

cd system-design/rate-limiting

pnpm ci

pnpm run start
```

## Quick stress test

> [!IMPORTANT]
> Make sure express server is running

```sh
# If you are using Linux or MacOS
pnpm run stress-test

# If you are using Windows
Figure it out yourself :)
```
