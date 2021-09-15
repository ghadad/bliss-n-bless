import { reactive, readonly, watch, ref } from "vue";
import _ from "lodash";
const STOREKEY = "appstate_";

import api from "./api";
import schema from "./schema"

const getFromPersist = (k, defVal) => {
    let valString = localStorage[STOREKEY + k];
    if (!valString) return defVal;
    let valObject = JSON.parse(valString);
    if (!("val" in valObject)) return defVal;
    return valObject.val;
}

const saveToPersist = (k, val) => {
    const valToSave = JSON.stringify({
        val: _.cloneDeep(val)
    })
    localStorage[STOREKEY + k] = valToSave;
    return;
}

const state = ref(getFromPersist("state", { count: 0, ...schema }));

const increment = function () {
    state.value.count++;
}

const save = function (k, val) {
    const rootk = k.substr(0, k.indexOf("."));
    const krest = k.substr(k.indexOf(".") + 1)
    let existVal = getFromPersist(rootk, {})
    _.set(existVal, krest, val);
    saveToPersist(rootk, existVal, val)
}

const get = function (k) {
    const rootk = k.substr(0, k.indexOf("."));
    const krest = k.substr(k.indexOf(".") + 1)
    let existVal = getFromPersist(rootk, {})
    return _.get(existVal, krest, existVal)
}

export default { state: readonly(state.value), save, get, increment, api };
