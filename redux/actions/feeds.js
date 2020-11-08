export const SET_FEEDS = "feeds/SET_FEEDS";
export const setFeeds = (feeds) => {
  return { type: SET_FEEDS, payload: feeds };
};

export const FETCH_FEEDS = "user/FETCH_FEEDS";
export const fetchFeeds = () => {
  return { type: FETCH_FEEDS };
};
