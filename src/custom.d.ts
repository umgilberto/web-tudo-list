import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UseFormReturn } from 'react-hook-form';

declare module 'react-hook-form' {
  interface UseFormMethods<FormData extends Record<string, any>> {
    handleSubmit: UseFormReturn<FormData>['handleSubmit'];
    control: UseFormReturn<FormData>['control'];
    formState: UseFormReturn<FormData>['formState'];
    reset: UseFormReturn<FormData>['reset'];
    setValue: UseFormReturn<FormData>['setValue'];
    register: UseFormReturn<FormData>['register'];
    watch: UseFormReturn<FormData>['watch'];
    errors: UseFormReturn<FormData>['errors'];
    trigger: UseFormReturn<FormData>['trigger'];
    getValues: UseFormReturn<FormData>['getValues'];
    handleSubmit: UseFormReturn<FormData>['handleSubmit'];
    formState: UseFormReturn<FormData>['formState'];
    resolver: yupResolver<yup.AnyObjectSchema>;
  }
}
