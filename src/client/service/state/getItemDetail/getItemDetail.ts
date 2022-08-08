import { sendHTTPRequest } from "../../http/sendHTTPRequest/sendHTTPRequest";
import { HTTP } from "../../../constant";
import { Item } from "../../../../type";

const getItemDetail = async (
  searchParams: string,
  onSuccess: (items: Item) => void,
  onError: (error: string) => void
) => {
  const requestUrl = `/itemDetail${searchParams}`;

  try {
    const data = await sendHTTPRequest(requestUrl, HTTP.METHOD.GET);
    onSuccess(data);
  } catch (error: any) {
    onError(error);
  }
};

export { getItemDetail };
