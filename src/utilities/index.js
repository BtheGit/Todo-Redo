export const generateRandomId = (len = 8) => {

  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let length = len;
  let id = '';
  while(length--) {
    id += chars[Math.random() * chars.length | 0]
  }
  return id;
}
