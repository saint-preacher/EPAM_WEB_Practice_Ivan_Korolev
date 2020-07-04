let controlItemList = document.getElementsByClassName("control-item");

let modeTextList = ["all-voices", "speaker-mode", "stream-mode"];

let setControlItemActive = (controlItem, index) => {
    for (let currentControlItem of controlItemList) {
        if (currentControlItem.classList.contains("active")) {
            currentControlItem.classList.remove("active");
        }
    }
    controlItem.classList.add("active");

    document.getElementById("active-mode").innerText = modeTextList[index];
};

for (let i = 0; i < controlItemList.length; i++) {
    controlItemList[i].onclick = () => setControlItemActive(controlItemList[i], i);
}

