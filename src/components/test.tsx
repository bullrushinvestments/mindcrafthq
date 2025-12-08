import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface TestFormValues {
  testName: string;
  testDescription: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<TestFormValues>();

  const onSubmit: SubmitHandler<TestFormValues> = async (data) => {
    try {
      setLoading(true);
      setError(null); // Clear any previous error
      await axios.post('/api/tests', data);
    } catch (err) {
      setError('Failed to submit test. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 sm:p-10">
      <header>
        <h2 className="text-lg font-medium text-gray-900">Write a New Test</h2>
      </header>

      {error && (
        <div role="alert" aria-live="assertive" className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <p className="text-sm text-red-900">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="testName" className="block mb-2 text-sm font-medium text-gray-900">Test Name</label>
        <input
          type="text"
          id="testName"
          placeholder="Enter test name"
          {...register('testName', { required: 'This is required' })}
          className={`border border-gray-300 p-2 w-full ${errors.testName ? 'border-red-500 focus:border-red-500' : ''}`}
        />
        <p className="text-sm text-red-600">{errors.testName?.message}</p>

        <label htmlFor="testDescription" className="block mb-2 text-sm font-medium text-gray-900">Test Description</label>
        <textarea
          id="testDescription"
          placeholder="Enter test description"
          {...register('testDescription', { required: 'This is required' })}
          rows={4}
          className={`border border-gray-300 p-2 w-full ${errors.testDescription ? 'border-red-500 focus:border-red-500' : ''}`}
        />
        <p className="text-sm text-red-600">{errors.testDescription?.message}</p>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-300 font-medium rounded-lg text-sm ${loading ? 'bg-gray-300 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface TestFormValues {
  testName: string;
  testDescription: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<TestFormValues>();

  const onSubmit: SubmitHandler<TestFormValues> = async (data) => {
    try {
      setLoading(true);
      setError(null); // Clear any previous error
      await axios.post('/api/tests', data);
    } catch (err) {
      setError('Failed to submit test. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4 sm:p-10">
      <header>
        <h2 className="text-lg font-medium text-gray-900">Write a New Test</h2>
      </header>

      {error && (
        <div role="alert" aria-live="assertive" className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <p className="text-sm text-red-900">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="testName" className="block mb-2 text-sm font-medium text-gray-900">Test Name</label>
        <input
          type="text"
          id="testName"
          placeholder="Enter test name"
          {...register('testName', { required: 'This is required' })}
          className={`border border-gray-300 p-2 w-full ${errors.testName ? 'border-red-500 focus:border-red-500' : ''}`}
        />
        <p className="text-sm text-red-600">{errors.testName?.message}</p>

        <label htmlFor="testDescription" className="block mb-2 text-sm font-medium text-gray-900">Test Description</label>
        <textarea
          id="testDescription"
          placeholder="Enter test description"
          {...register('testDescription', { required: 'This is required' })}
          rows={4}
          className={`border border-gray-300 p-2 w-full ${errors.testDescription ? 'border-red-500 focus:border-red-500' : ''}`}
        />
        <p className="text-sm text-red-600">{errors.testDescription?.message}</p>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 focus:ring-blue-300 font-medium rounded-lg text-sm ${loading ? 'bg-gray-300 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;