import { getRequest, deleteRequest, postRequest } from "./util";

const BASE_URL = "/member";

export const getMembers = () => getRequest(`${BASE_URL}`);
export const getMember = (id) => getRequest(`${BASE_URL}/${id}`);

// export const lendBook = (id, burrowedMemberId, burrowedDate) =>
//   putRequest(`${BASE_URL}/${id}/burrow`, { burrowedMemberId, burrowedDate });

export const deleteMember = (id) => deleteRequest(`${BASE_URL}/${id}`);
export const addMember = (data) => postRequest(`${BASE_URL}`, data);
