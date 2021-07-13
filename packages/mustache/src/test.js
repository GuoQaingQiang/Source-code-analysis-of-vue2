import {get} from "./axios/index";

export default async function getChildren() {
    const result = await get("/flows/api/v1/flows/3369f669-539e-4dd8-a6a5-f78357b46ec0");
    console.log(result);
}