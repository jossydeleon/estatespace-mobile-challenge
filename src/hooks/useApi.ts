import React from 'react';
import { SuccessResponse } from '../types';

const useApi = () => {
  const [data, setData] = React.useState<SuccessResponse | undefined>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<unknown | undefined>();

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

  const handleApiCall = async () => {
    try {
      setLoading(true);
      setError(undefined);
      
      setTimeout(async () => {
        const response = await Promise.resolve(dummy);
        setData(response);
      }, 5000)
      
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    handleApiCall();
  }, []);

  return {
    loading,
    data,
    error,
  };
};

export default useApi;
