import Cookies from 'js-cookie';
import useSWR from 'swr';

function useLinearStats () {
  const auth = Cookies.get('auth');
  const { data, error } = useSWR({
    url: '/linear/stats',
    data: {
      auth,
    }
  });

  return {
    stats: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useLinearStats;