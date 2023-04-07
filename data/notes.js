import yaml from 'js-yaml';
import fs from 'fs/promises';

export async function getStoredYaml() {
  const rawFileContent = await fs.readFile('form.yml', { encoding: 'utf-8' });
  const data = yaml.load(rawFileContent);
  const result = data?.paths ? Object.keys(data.paths).map(key=>{
        return {
            key,
            data: data.paths[key]
        }
  }) : [];
  return result;
}

export async function getHeaders() {
  const rawFileContent = await fs.readFile('roles.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedHeaders = data.headers ?? [];
  return storedHeaders;
}


export function storeNotes(notes) {
  return fs.writeFile('form.json', JSON.stringify({ notes: notes || [] }));
}

export async function sampleRole() {
  var base64 = require('base-64');

  const rawFileContent = await fs.readFile('id_token', { encoding: 'utf-8' });
  const b64 = JSON.parse(rawFileContent);
  const decodedString = base64.decode(b64);
  const data = JSON.parse(decodedString);
  return data.roles;
}


export async function SomeComponent(path) {
  
  const head = await getHeaders();
  const service = head.find(h => h.service_name === path);
  let serviceRole = service ? service.roles : null

  const roleSample = await sampleRole()     // flag: to be changed
  const accessRole = roleSample.some(role => serviceRole.includes(role))

  return accessRole ? true : false;
}