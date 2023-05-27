# 🚨 이 폴더의 코드들은 모두 `.storybook` 폴더에서 사용합니다

## using

디펜던시 설치하기

esm을 위해서 `storybook@^7`사용합니다.

```bash
# storybook core
npx storybook@next init
# storybook addon
yarn add -D @storybook/addon-viewport storybook-dark-mode
# storybook style
yarn add -D sass
```

`storybook-dark-mode`는 storyboko@^7 호환되지 않았으나 약 2023년 4월 3.0.0 버전 업데이트로 호환되게 변경되었습니다.

### preview docs darkmode (option)

```ts
// preview.tsx
import './preview.scss'
import './preview-docs.scss'
```

vite tailwindcss, tailwindcss plugin @tailwindcss/typography가 설치되어있다면 위 두개를 사용해도됩니다.
