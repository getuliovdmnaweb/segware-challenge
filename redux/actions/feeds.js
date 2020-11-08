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

export const CLOSE_FEEDS_MODAL = "feeds/CLOSE_FEEDS_MODAL";
export const closeModal = () => {
  return {
    type: CLOSE_FEEDS_MODAL,
  };
};
export const OPEN_FEEDS_MODAL = "feeds/OPEN_FEEDS_MODAL";
export const openModal = () => {
  return {
    type: OPEN_FEEDS_MODAL,
  };
};

export const POST_FEED = "feeds/POST_FEED";
export const postFeed = (content) => {
  return { type: POST_FEED, payload: content };
};
