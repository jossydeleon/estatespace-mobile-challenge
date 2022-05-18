import React from 'react';
import { SuccessResponse, User } from '../types';

const INITIAL_PAGE = 1;

const dummy: SuccessResponse = {
  "total": 1000,
  "page": 1,
  "count": 3,
  "numPages": 334,
  "entries": [
    {
      "id": 1,
      "name": {
        "firstName": "Thorny",
        "lastName": "Clayborn"
      },
      "email": "tclayborn0@altervista.org",
      "gender": "Male",
      "role": "Test Engineer"
    },
    {
      "id": 2,
      "name": {
        "firstName": "Layney",
        "lastName": "Juan"
      },
      "email": "ljuan1@google.com.au",
      "gender": "Male",
      "role": "Vendor"
    },
    {
      "id": 3,
      "name": {
        "firstName": "Ulrich",
        "lastName": "Lepper"
      },
      "email": "ulepper2@example.com",
      "gender": "Male",
      "role": "Vendor"
    },
    {
      "id": 4,
      "name": {
        "firstName": "Josymar",
        "lastName": "De Leon"
      },
      "email": "jossydeleon@gmail.com",
      "gender": "Male",
      "role": "Developer"
    }
  ]
}

const useApi = () => {
  const [data, setData] = React.useState<User[]>([]);
  const [nextPage, setNextPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<unknown | undefined>();

  /**
   * 
   */
  const fetchMore = () => {
    fetchData(true);
  }

  /**
   * 
   */
  const fetchData = async (shouldFetchMore = false) => {
    try {
      setLoading(true);
      setError(undefined)

      const response = await Promise.resolve(dummy);
      setData(response.entries);
      setNextPage(nextPage + 1);
      if (shouldFetchMore) {
        setData(oldState => [...oldState, ...response.entries])
      } else {
        setData(response.entries);
      }

    } catch (err) {
      setError(err);
    } finally {
      setLoading(false)
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    data,
    error,
    fetchMore,
  };
};

export default useApi;
