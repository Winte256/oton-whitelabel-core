import Cookies from 'js-cookie';
import useSWR from 'swr';

function useLinear (user_id?: number) {
  const auth = Cookies.get('auth');
  const { data, error } = useSWR({
    url: !user_id ? null : '/linear/data',
    data: {
      auth,
      user_id
    }
  });

  return {
    linear: data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useLinear;