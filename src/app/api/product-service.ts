import { apiClient } from "./api-client";

export const getAllProductApi
  = () => apiClient.get(`/api/get/AllProduct`);

export const getSpecificProductApi
  = (id: number) => apiClient.get(`/api/get/SpecificProduct/${id}`);

export const postNewProductApi
  = (product: any) => apiClient.post(`/api/post/NewProduct`, product);

export const putUpdateProductApi
  = (product: any) => apiClient.put(`/api/put/UpdateProduct`, product);

export const deleteProductApi
  = (id: any) => apiClient.delete(`/api/delete/DeleteProduct/${id}`);
