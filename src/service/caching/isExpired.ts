import { HALF_DAY_MILISECOND, HEADER_DATE } from "../../constant/cache";

const isExpired = (cachedRes: Response) => {
  const headerDate = cachedRes.headers.get(HEADER_DATE);
  if (!headerDate) {
    throw new Error("unexpected err: caches headers not present");
  }
  const fetchDate = new Date(headerDate).getTime();
  const today = new Date().getTime();
  console.log("만료?", today - fetchDate > HALF_DAY_MILISECOND);
  return today - fetchDate > HALF_DAY_MILISECOND;
};

export default isExpired;
