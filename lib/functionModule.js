 export const getPicture = (data) => {
  const { background, cover } = data;
  if (cover) {
    return { url: cover.url, filename: cover.filename };
  }
  if (background) {
    return { url: background.url, filename: background.filename };
  }

  return null;
};

export const mapData = (data) => {
  const { content } = data;
  const picture = content.find((item) => item.type === "PICTURES");
  const markup = content.find((item) => item.type === "MARKUP");
  return {
    url: picture?.files[0].url,
    data: markup?.data,
    filename: picture?.files[0].filename,
  };
};