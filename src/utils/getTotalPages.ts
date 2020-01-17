export default (res: any) => {
  return +res.headers.get('X-WP-TotalPages');
};
