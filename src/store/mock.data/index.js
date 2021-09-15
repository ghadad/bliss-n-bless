import gifts from "./gifts";
import greets from "./greets";
import giftsProps from "./gifts.props";
import greetsProps from "./greets.props";
import senderProps from "./sender.props";

const allData = {
    gifts, greets, giftsProps, greetsProps, senderProps
}
const getAll = coll => allData[coll] || null;
export default {
    getAll
}