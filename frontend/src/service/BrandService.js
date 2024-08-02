import httpAxios from "../httpAxios";

const BrandService = {
  //lấy ra danh sách
  index: () => {
    return httpAxios.get("brand/index");
  },
  show: (id) => {
    return httpAxios.get(`brand/show/${id}`);
  },
  store: (data) => {
    return httpAxios.post(`brand/store`, data);
  },
  update: (data, id) => {
    return httpAxios.post(`brand/update/${id}`, data);
  },
  destroy: (id) => {
    return httpAxios.delete(`brand/destroy/${id}`);
  },
  status: (id) => {
    return httpAxios.get(`brand/status/${id}`);
  },
  delete: (data, id) => {
    return httpAxios.put(`brand/delete/${id}`, data);
  },
  thungrac: () => {
    return httpAxios.get("brand/thungrac");
  },
};
export default BrandService;
