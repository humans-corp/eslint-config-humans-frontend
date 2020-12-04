# eslint-config-humans-frontend

## Eslint 규칙 적용
1. 모듈 및 peerDependencies 의존성을 설치한다.

```bash
$ npx install-peerdeps --dev eslint-config-humans-frontend
```

2. 적용하고자 하는 프로잭트의 eslint 환경 설정 파일에 아래와 같이 적용한다.

```js
// .eslintrc.js
module.exports = {
  extends: ["humans-frontend"],
};

```


## Prettier 규칙 적용
1. prettier 환경 설정 파일에 아래와 같이 적용한다.

```js
// prettier.config.js
module.exports = require("eslint-config-humans-frontend/prettier.config")
```

만약 해당 규칙 중 일부분 수정하고자 하는 내용이 있다면 아래와 같이 적용하여 사용할 수 있다.

```js
// prettier.config.js
module.exports = {
  ...require("eslint-config-humans-frontend/prettier.config"),
  semi: false
}
```
