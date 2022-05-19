import { useState, useEffect } from 'react';
import { API_ENDPOINT, API_KEY } from '../../config';
import { User } from '../types';
import { handleError } from '../util/errorHandler';

const INITIAL_PAGE = 1;

/**
 * Custom hook to handle API call
 */
const useApi = () => {
  const [data, setData] = useState<User[]>([]);
  const [nextPage, setNextPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState<string | undefined>();

  /**
   * Refresh data from initial page
   */
  const refresh = () => {
    setData([]);
    setNextPage(INITIAL_PAGE);
  }

  /**
   * Request more data from fetchData function
   */
  const fetchMore = () => {
    setNextPage(nextPage + 1)
  }

  /**
   * Fetch data from api
   */
  const fetchData = async () => {

    setError(undefined)

    if (nextPage !== INITIAL_PAGE) {
      setFetching(true);
    } else {
      setLoading(true);
    }

    fetch(`${API_ENDPOINT}?page=${nextPage}&count=40&key=${API_KEY}`)
      .then(handleError)
      .then(json => {
        setData(oldState => [...oldState, ...json.entries])
      })
      .catch(err => setError(err.message))
      .finally(() => {
        setLoading(false);
        setFetching(false);
      })
  };

  useEffect(() => {
    fetchData();
  }, [nextPage]);

  return {
    loading,
    fetching,
    data,
    error,
    refresh,
    fetchMore,
  };
};

export default useApi;
