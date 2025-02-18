import axios from "axios";

export const getJsonLinkMeta = async (url: string) => {
  try {
    const res = await axios.get(
      `https://jsonlink.io/api/extract?api_key=${
        process.env.AUTH_JSON_LINK_API_KEY as string
      }&url=${url}`
    );

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getUrlMeta = async (url: string) => {
  try {
    const res = await axios.get(
      `https://api.urlmeta.org/meta?url=${encodeURIComponent(url)}`,
      {
        headers: {
          mode: "cors",
          Authorization:
            "Basic cGFyYWxpc3RpY0BnbWFpbC5jb206TE9wVXdDbmhuSTZYY1B4VlNtRnI=",
        },
      }
    );

    return JSON.stringify(res.data ?? "");
  } catch (error) {
    console.error(error);
  }
};
