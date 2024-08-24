'use client';
import { Box } from '@/components/box';
import { Button } from '@/components/button';
import axios from 'axios';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsPending(true);
    try {
      const response = await axios.post('/api/contact', data);
      console.log('Data posted successfully:', response.data);
      setIsSuccess(`Thank ${name} for reaching out, I will get back to you as soon as possible`);
      reset();
    } catch (error) {
      console.error('Error posting data:', error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Box className="flex min-h-[90vh] items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-full max-w-[400px] space-y-5 rounded bg-primary-50 p-5 dark:bg-gray-950"
      >
        <div className="space-y-1">
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            {...register('name', { required: true })}
            className="h-10 w-full rounded px-3 py-2"
            type="text"
            id="name"
            disabled={isPending}
            placeholder="Enter your name"
          />
          {errors.name && <span className="text-xs text-danger-400">Name field is required</span>}
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="block">
            Email:
          </label>
          <input
            {...register('email', { required: true })}
            className="h-10 w-full rounded px-3 py-2"
            type="email"
            id="email"
            disabled={isPending}
            placeholder="Enter your name"
          />
          {errors.email && <span className="text-xs text-danger-400">Email field is required</span>}
        </div>
        <div className="space-y-1">
          <label htmlFor="message" className="block">
            Message:
          </label>
          <textarea
            {...register('message', { required: true })}
            className="w-full rounded px-3 py-2"
            id="email"
            disabled={isPending}
            rows={6}
          ></textarea>
          {errors.message && <span className="text-xs text-danger-400">Message field is required</span>}
        </div>
        {isSuccess && <p className="rounded bg-secondary-600 px-4 py-3 text-sm text-secondary-100">{isSuccess}</p>}
        <Button type="submit" disabled={isPending} variant="primary">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
