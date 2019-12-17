import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer sQe0s45fubjpxXKaeGxF5smjqIo02jUSMR8wTGB_-BOrKJCQtBzLl7lDxfbzQylGd5zXhTwqfw73KkQ68oPm4nhdOEgPagDiSn-KXhE-PLyWv03mDnKvfAFzPDRuXXYx'
  }
});
