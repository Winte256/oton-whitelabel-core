import useSWR from 'swr';

function useUserInfo (auth?: string) {
  const { data, error } = useSWR({
    url: '/user/info',
    data: {
      auth
    }
  });

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useUserInfo;