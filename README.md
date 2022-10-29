# 미션 - 온보딩

# 문제 1 기능 목록

1. problem1 : 페이지숫자의 덧셈 곱셈 중 가장 큰 수 반환하는 함수 구하기(완료)
2. problem1 : 왼쪽 오른쪽 페이지 숫자 비교해서 큰 수 반환하는 함수 작성(완료)
3. problem1 : 포비와 크롱의 점수 구하기 (완료)
4. problem1 : 예외 사항 구하기

   → 예외사항 추가(왼쪽페이지가 짝수인경우)

   → 인원이 추가될 경우도 체크 가능하도록 추가

5. problem1 : 결과 구하기(1 : 포비 승 or 2 : 크롱 승 or 0 : 무승부 or -1 : 예외사항)(완료)

# 문제 2 기능 목록

1. problem2 : 문자열 배열로 변환 하는 함수 제작(완료)
2. problem2 : 배열에서 원하는 인덱스만 삭제해주는 함수 제작(완료)
3. problem2 : 배열을 반복하며 이전의 인덱스와 중복되면 indexDeleter 함수를 이용하여 삭제하는 함수 제작(완료)
4. problem2 : 배열을 문자화하여 최종 결과값 반환 (완료)

```jsx
const cryptogramToArray = stringToArr(cryptogram);
const answerArray = overlapElementDeleter(cryptogramToArray);
answer = answerArray.join("");
```

# 문제 3 기능 목록

1. problem3 : number까지의 숫자 전체를 배열로 바꿔주는 함수 제작
2. problem3 : 원하는 숫자의 개수 얻는 함수 제작
3. problem3 : ‘3’, ‘6’, ‘9’ 개수 더하여 반환

# 문제 4 기능 목록

문자 → 유니코드 : string.charCodeAt();

유니코드 → 문자 : String.fromCharCode(number);

1. problem4 : 대문자 변환 함수 제작
2. problem4 : 소문자 변환 함수 제작
3. problem4 : 아무 문자 입력 후 대/소문자 판별하여 변환 함수 제작
4. problem4 : 문자열 입력하면 변환하는 함수 제작

# 문제 5 기능 목록

1. problem5 : 1자리 수 입력 시 바로 반환
2. problem5 : 이외 기타 돈 입력 시 반환하는 함수 제작

# 문제 6 기능 목록

1. problem6 : 닉네임 1자인 인원 제거
2. problem6 : 첫번째 form부터 닉네일 배열로 뽑기
3. problem6 : 2글자씩만 추출
4. problem6 : 2글자 추출한 form 이후의 form들에서 해당 글자가 있는지 확인 후 있으면 중복된 닉네임 모으는 배열에 push
5. problem6 : 중복된 닉네임가진 이메일들의 배열을 중복된 님네임과 함께 객체에 담기
