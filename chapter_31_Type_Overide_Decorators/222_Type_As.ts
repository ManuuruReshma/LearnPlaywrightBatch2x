let element: unknown = {
    tagName: "Button",
    texContent: "SUBMIT",
    id: "Submit-btn",
    disabled: false
}

interface elementI {
    tagName: string,
    textContent: string,
    id: string,
    disabled: boolean
};

let button = element as elementI

console.log("TAG: ", button.tagName);