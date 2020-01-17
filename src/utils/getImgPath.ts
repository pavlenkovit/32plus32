export default (featuredmedia: any, fimg_url: string, size: string) => {
  if (featuredmedia) {
    const { sizes } = featuredmedia[0].media_details;
    if (sizes[size]) {
      return sizes[size].source_url;
    }

    if (size === 'medium_large') {
      if (sizes['keratin-featured-image-archive']) {
        return sizes['keratin-featured-image-archive'].source_url;
      }
    }

    return fimg_url;
  }
  return null;
};
