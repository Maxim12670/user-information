import { baseUrl, filterUrl, keysForFilter } from '../config';
import { filterUserProperties } from '../helper';

export const getAllUsers = async () => {
  try {
    const res = await fetch(baseUrl);
    if (res.ok) {
      const data = await res.json();
      return filterUserProperties(data.users);
    } else {
      alert(`${res.status} Error!`)
    }
  } catch (err) {
    alert('Error!', err);
  }
}

export const getFilterUsers = async (str) => {
  const promise = keysForFilter.map(field =>
    fetch(`${filterUrl}?key=${field}&value=${str}`)
      .then(res => res.json())
  );

  try {
    const results = await Promise.all(promise);
    const users = results.flatMap(result => result.users || []);
    return filterUserProperties(users);
  } catch (err) {
    alert('Error!', err);
  }
}

