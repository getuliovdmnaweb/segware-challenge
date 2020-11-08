export const SET_FEEDS = "feeds/SET_FEEDS";
export const setFeeds = (feeds) => {
  return { type: SET_FEEDS, payload: feeds };
};

export const FETCH_FEEDS = "feeds/FETCH_FEEDS";
export const fetchFeeds = () => {
  return { type: FETCH_FEEDS };
};

export const REACT_FEED = "feeds/REACT_FEED";
export const reactFeed = (feed) => {
  return {
    type: REACT_FEED,
    payload: feed,
  };
};
