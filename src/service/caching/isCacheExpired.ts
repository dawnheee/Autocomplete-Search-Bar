const isExpired = (cachedRes: Response) => {
  if (cachedRes) return true;
};

export default isExpired;

// input: cachedResponse
//  expired time 확인
// 유효하지 않다면 캐시 삭제
// return boolean
