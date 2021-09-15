import { reactive, readonly, watch } from "vue";
import db from "./mock.data";

const state = reactive({
    count: 0
});

watch(state, (newState, oldState) => console.log("newState:", newState));

const increment = function () {
    state.count++;
}

const getGifts = () => db.getAll('gifts');
const getGift = (id) => {
    const items = getGifts()
    return items[id];
}

const getGreets = () => db.getAll('greets');
const getGreet = (id) => {
    const items = getGreets()
    return items[id];
}

const getGreetsProps = () => db.getAll('greetsProps');
const getGreetsProp = (id) => {
    const items = getGreetsProps()
    return items[id];
}

const getGiftsProps = () => db.getAll('giftsProps');
const getGiftsProp = (id) => {
    const items = getGiftsProps()
    return items[id];
}


const getSenderProps = () => db.getAll('senderProps');
const getSenderProp = (id) => {
    const items = getSenderProps()
    return items[id];
}


export default {
    state: readonly(state), increment,
    getGift, getGifts,
    getGreets, getGreet,
    getGiftsProps, getGiftsProp,
    getSenderProps, getSenderProp
};
