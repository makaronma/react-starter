import { useQuery } from '@tanstack/react-query';
import { apiBaseClient } from '../../lib/api';
import { Post } from '../../types/data/post';

const usePosts = () =>
  useQuery<Post[], Error>(["posts"], () =>
    apiBaseClient
      .get<Post[]>("/posts")
      .then((res) => res.data)
  );

export default usePosts;