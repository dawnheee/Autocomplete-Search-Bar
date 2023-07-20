# 원티드 프리온보딩 11th 4주차 과제

안녕하세요 프론트엔드 개발자를 꿈꾸는 박서희 입니다!

## 🌟 프로젝트 소개

- 질환명을 검색할 수 있는 어플리케이션입니다.
- [한국 임상정보 웹 사이트](https://clinicaltrialskorea.com/)의 검색 영역을 클론하였습니다.
- 개발 기간: 2023-07-16 ~ 2023.07.19

### 목표

- 검색창 구현
- 검색어 추천 기능 구현
- 캐싱 기능 구현

</br>

## 프로젝트 구조

```
pre-onboarding-11th-4
├─ public
├─ src
│  ├─ @type
│  ├─ asset
│  ├─ components
│  │  ├─ AutoCompletedItem
│  │  ├─ Search
│  │  ├─ SearchBar
│  │  ├─ SearchButton
│  │  ├─ SearchingLetters
│  │  └─ WordBox
│  ├─ constant
│  ├─ hooks
│  ├─ pages
│  │  ├─ main
│  │  └─ notFound
│  ├─ router
│  ├─ service
│  ├─ style
│  └─ utils
└─ tsconfig.json

```

</br>

## 프로젝트 실행 방법

### 서버 실행

[원티드에서 제공한 서버 레파지토리](https://github.com/walking-sunset/assignment-api)를 클론/다운로드 합니다.</br>

패키지를 설치합니다.

```
npm run install
```

서버를 실행합니다.

```
npm run start
```

### 클라이언트 실행

[해당 레파지토리](https://github.com/dawnheee/pre-onboarding-11th-4)를 클론/다운로드 합니다.

```
npm run install
```

클라이언트를 실행합니다.

```
npm run start
```

</br>

## 🌟 주요 기능과 시연 영상

### ✔️ 1. 질환명 검색 시 API 호출 통해 검색어 추천 기능

<img src="https://blog.kakaocdn.net/dn/doVRpj/btsofppnVgJ/f19IljaJ6ljocQdPSy3aj0/img.gif" alt="검색어 추천 기능"/>

- input에 입력되는 값으로 API 요청
- 응답 결과 중 10개의 요소를 추천 검색어 state에 저장하고 노출

### ✔️ 2. API 호출별로 로컬 캐싱 구현

<img src="https://blog.kakaocdn.net/dn/dmpLbx/btsobaNnOVn/R8r2WxlxJ53Wh0N9Mfkt1K/img.gif" alt="로컬 캐싱 기능"/>

로컬 캐싱 기능은 크게 3가지 기능으로 나누어 구현했습니다.

- API 요청 전, 캐시 확인 `getCachedResponse`
- 캐시 유효성 확인 `isExpired`, `deleteCache`
- 요청 후 응답 캐시 저장 `setCache`

`getCachedResponse`, `deleteCache`, `isExpired`, `deleteCache` 모두 `src/service/caching` 경로에 저장하고 캐시 관련 로직에서 사용했습니다.

아래는 캐시를 구현한 setCache 함수의 코드입니다.

`src/service/caching/setCache.ts`
```
...
const setCache = async (q: string, response: Response) => {
  const sickStorage = await caches.open(cacheName);
  const cloneResponse = response.clone();
  const newBody = await cloneResponse.blob();
  const newHeaders = new Headers(cloneResponse.headers);
  newHeaders.append(HEADER_DATE, new Date().toISOString());

  const newResponse = new Response(newBody, {
    status: cloneResponse.status,
    statusText: cloneResponse.statusText,
    headers: newHeaders,
  });

  sickStorage.put(q, newResponse);
};
```

#### 🍎 expire time 구현

캐시를 저장할 때 헤더에 현재 시간을 포함시킵니다.

`src/service/caching/setCache.ts`
```
...
 const newHeaders = new Headers(cloneResponse.headers);
 newHeaders.append(HEADER_DATE, new Date().toISOString());
...
```

이후 요청 전 캐시의 유효 여부를 확인할 때는 임의로 설정한 `유효한 시간`과 캐시 생성 시간을 비교하여 `true`, `false`를 리턴합니다.

`src/service/caching/isExpired.ts`
```
...
  const fetchDate = new Date(headerDate).getTime();
  const today = new Date().getTime();
  return today - fetchDate > HALF_DAY_MILISECOND;
...
```

### ✔️ 3. 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

<img src="https://blog.kakaocdn.net/dn/d3Fbpz/btsoe9UOw3H/YiaNIbmqtBGvK37NC05BN0/img.gif" alt="API 호출 줄이는 전략"/>

- `setTimeout`을 이용하여 input에 입력된 값들이 모두 API 호출로 이어지지 않도록 값의 입력을 지연시켰습니다.

`src/hooks/useDebounce.ts`
```
...
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(word);
    }, 400);
    return () => {
      clearTimeout(handler);
    };
  }, [word]);
...
```

### ✔️ 4. 키보드만으로 추천 검색어들로 이동 가능하도록 구현

<img src="https://blog.kakaocdn.net/dn/dg9BAO/btsofQHbN5w/pC23uF3WuCty9Gl3IWr531/img.gif" alt="키보드 기능"/>

**useKey Hook**

- 키 입력에 따라 자동완성 목록을 제어할 수 있습니다. 자동완성 목록에서 선택된 항목을 변경하고, 엔터 키를 눌렀을 때 선택된 항목을 처리합니다. 키보드 입력에 따라 선택된 자동완성 항목의 인덱스를 변경하고, 엔터 키를 눌렀을 때 선택된 항목을 처리합니다. 이를 사용하여 자동완성 기능이 있는 컴포넌트에서 키보드 입력을 감지하고 처리할 수 있습니다.
- 마우스를 사용하여 focus된 인덱스 값을 키보드로 계속해서 사용할 수 있도록 구현했습니다.

</br>

## 🌟 고민한 사항

### 🖍️ **캐싱 기능 로직**

1. 컴포넌트에서 입력된 `letters` 문자열로 캐시를 검색한다
2. 일치하는 캐시가 있다면 response의 expire time과 현재 시간을 비교해 유효한지 확인한다
3. 유효하다면 해당 캐시의 response의 data를 추천검색어의 배열에 전달한다
4. 유효하지 않다면 해당 캐시는 삭제하고, `letters` 문자열로 API 요청한다
5. 요청의 응답은 헤더에 `expire time`을 포함하여 캐시에 저장한다
