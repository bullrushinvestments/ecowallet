import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

interface TestFormInputs {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestFormInputs>();

  const onSubmit: SubmitHandler<TestFormInputs> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      router.push(`/test/${encodeURIComponent(data.title)}`);
      reset();
      setError(null);
    }, 1000).catch((err) => {
      setError('Failed to create test. Please try again later.');
      setLoading(false);
    });
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="text-xl font-bold mb-4">Write a Test</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Test creation form" role="form">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Title is required' })}
            aria-required="true"
            aria-invalid={errors.title ? true : undefined}
            className={`block w-full p-2 border rounded-lg ${errors.title && "border-red-500"}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'Description is required' })}
            aria-required="true"
            aria-invalid={errors.description ? true : undefined}
            className={`block w-full p-2 border rounded-lg ${errors.description && "border-red-500"}`}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none ${loading ? 'cursor-not-allowed opacity-75' : ''}`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';

interface TestFormInputs {
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<TestFormInputs>();

  const onSubmit: SubmitHandler<TestFormInputs> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      router.push(`/test/${encodeURIComponent(data.title)}`);
      reset();
      setError(null);
    }, 1000).catch((err) => {
      setError('Failed to create test. Please try again later.');
      setLoading(false);
    });
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h1 className="text-xl font-bold mb-4">Write a Test</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} aria-label="Test creation form" role="form">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Title is required' })}
            aria-required="true"
            aria-invalid={errors.title ? true : undefined}
            className={`block w-full p-2 border rounded-lg ${errors.title && "border-red-500"}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'Description is required' })}
            aria-required="true"
            aria-invalid={errors.description ? true : undefined}
            className={`block w-full p-2 border rounded-lg ${errors.description && "border-red-500"}`}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none ${loading ? 'cursor-not-allowed opacity-75' : ''}`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;