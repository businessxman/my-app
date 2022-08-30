const version = process.env.APP_VERSION;
const STORAGE_KEY = `__SERIALIZED_STATE_TREE_V${version}__`;

export function saveState<T = object>(storeState: T): boolean {
  if (!localStorage) {
    return false;
  }

  try {
    const serializedState = JSON.stringify(storeState);
    localStorage.setItem(STORAGE_KEY, serializedState);
    return true;
  } catch (err) {
    throw new Error('store serialization failed');
  }
}

export function saveToken (token: string): boolean {
  if (!localStorage) {
    return false;
  }

  localStorage.setItem(STORAGE_KEY, token);
  return true;
}

export function loadState<T = object>(): T | undefined {
  if (!localStorage) {
    return;
  }

  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState == null) {
      return;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    throw new Error('store deserialization failed');
  }
}

export function getToken(): any {
  if (!localStorage) return;

  return localStorage.getItem(STORAGE_KEY);
}

// logOut function
export const logOut = () => {
  try {
      return localStorage.removeItem(STORAGE_KEY);
  }
  catch (err) {
      return undefined;
  }
};