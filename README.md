## Synopsis

Minimal code to reproduce ts-protoc-gen issue #148

## How to run

yarn && yarn test

```
$ ./gen-proto && mocha -r ts-node/register *.spec.ts
+ module=core
+ mkdir -p src/proto
+ export OUT_DIR=src
+ OUT_DIR=src
+ PROTOC_GEN_TS_PATH=./node_modules/.bin/protoc-gen-ts
+ protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --js_out=import_style=commonjs,binary:src --ts_out=src protobuf/core.proto
+ mv src/protobuf/core_pb.js src/proto/core_google_temp.js
+ mv src/protobuf/core_pb.d.ts src/proto/core_google.d.ts
+ echo '/* eslint-disable */'
+ cat src/proto/core_google_temp.js


  1) clear function should not exist
  2) has function should not exist

  0 passing (28ms)
  2 failing

  1) clear function should not exist:
     AssertionError: expected [Function] to be an undefined
      at Context.<anonymous> (test.spec.ts:6:38)

  2) has function should not exist:
     AssertionError: expected [Function] to be an undefined
      at Context.<anonymous> (test.spec.ts:10:36)



error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
