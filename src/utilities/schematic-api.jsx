import sendRequest from "./send-request";
const BASE_URL = '/api/schematics';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getById(schematicId) {
  return sendRequest(`${BASE_URL}/${schematicId}`);
}

export function createSchematic(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}

export function updateSchematic(schematicId, formData) {
    return sendRequest(`${BASE_URL}/${schematicId}`, 'PUT', formData);
}
  
export function deleteSchematic(schematicId) {
    return sendRequest(`${BASE_URL}/${schematicId}`, 'DELETE', {schematicId});
}

export function editSchematic(schematicId) {
  return sendRequest(`${BASE_URL}/${schematicId}/edit`);
}
