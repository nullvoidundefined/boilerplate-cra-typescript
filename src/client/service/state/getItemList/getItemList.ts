import { sendHTTPRequest } from "../../http/sendHTTPRequest/sendHTTPRequest";
import { HTTP } from "../../../constant";
import { Item } from "../../../../type";

const getItemList = async (
  searchParams: string,
  onSuccess: (items: Item[]) => void,
  onError: (error: string) => void
) => {
  const itemRequestUrl = `/itemList${searchParams}`;

  try {
    const data = await sendHTTPRequest(itemRequestUrl, HTTP.METHOD.GET);
    onSuccess(data);
  } catch (error: any) {
    onError(error);
  }
};

export { getItemList };
