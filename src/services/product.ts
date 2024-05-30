import {axiosInstance} from '@/config/index';
import {ProductModel} from '@/types/product';

export const getAll = async () =>
  await axiosInstance.get<ProductModel.Response.GetAll>('');

export const getOne = async (id: string) =>
  await axiosInstance.get<ProductModel.Response.GetOne>(`/${id}`);

export const create = async (data: ProductModel.Request.Create) =>
  await axiosInstance.post<ProductModel.Response.Create>('', data);

export const update = async (id: string, data: ProductModel.Request.Update) =>
  await axiosInstance.put<ProductModel.Response.Update>(`/${id}`, data);

export const remove = async (id: string) =>
  await axiosInstance.delete<ProductModel.Response.Delete>(`/${id}`);

export const verifyId = async (id: string) =>
  await axiosInstance.get<boolean>(`/verification/${id}`);
