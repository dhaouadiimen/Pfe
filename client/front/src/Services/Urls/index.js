export function getMessageUrl(discussionId,page=1,limit=10) {
    return `/message/${discussionId}`;
  }

  export function PostMessageUrl() {
    return `/message/add/`;
  }

